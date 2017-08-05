const fs = require('fs')
const cherrio = require('cheerio')
const promisify = require("util").promisify
const pandoc = promisify(require('pdc'))
const glob = promisify(require('glob'))

async function main() {

    const pages = await glob("./www.macchina.cc/guide/**/*.html");

    // let page = pages[pages.length -1] 
    // {
    for (let page of pages) {
        const html = await promisify(fs.readFile)(page, "utf8")
        const content = extractDesiredHtml(html)

        fs.writeFileSync("showMe.html", content, "utf8")

        const markdown = await pandoc(content, "html", "markdown_github")

        const dest = page.replace("/www.macchina.cc/guide/", "/www.macchina.cc/guideMd/").replace(/.html$/, ".md")
        console.log(dest)
        ensureDirectoryExits(dest)
        await promisify(fs.writeFile)(dest, markdown, "utf8")
        console.log(page)
        console.log(markdown)
        console.log()
    }

    function extractDesiredHtml(content) {
        const $ = cherrio.load(content)

        $(".book-navigation").remove()
        $("footer").remove()
        $("#block-commentsblock-comment-form-block").remove()

        $(".element-hidden").remove()
        $("a").removeClass()
        $("image").removeClass()
        $("img").removeClass()

        return $("#content-wrapper").html()
    }
}

//https://stackoverflow.com/a/29261105/1072626
function ensureDirectoryExits(filePath) {
    filePath.split('/').reduce(function (prev, curr, i) {
        if (fs.existsSync(prev) === false) {
            fs.mkdirSync(prev);
        }
        return prev + '/' + curr;
    });
}

if (require.main === module) {
    main(process.argv)
        .then(s => { console.log("Done!") })
        .catch(error => {
            console.error(error);
            process.exit(2);
        });
}