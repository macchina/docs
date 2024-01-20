# Common Issues

## Introduction

In this section, we are collecting all of the common issues users come across, along with explanations and hopefully, solutions.&#x20;

If you don't see you answer here, we encourage you to look here to review:&#x20;

{% content-ref url="contact-us-faq.md" %}
[contact-us-faq.md](contact-us-faq.md)
{% endcontent-ref %}

or, if the issue has to do with a specific library or code base, raise an issue in the appropriate repo here:&#x20;

{% embed url="https://github.com/macchina" %}

## Issues

For example A0 or M2 not reflashing correctly. We test every unit that ships to try to prevent this. While the ultimate solution varies from case to case the most common issue by far is a bad USB cable. It is not good enough to verify the cable works with another product as USB implementation and cable configuration vary. Please test with multiple cables. The one we verify with is available in our store. Drivers and worn out ports also frequently come up. &#x20;

### **Arduino IDE Board Manager Issues**

Description: After entering a new board manager URL in File->Preferences, going to Tools->Boards Manager causes a Java error. Upon closing, Arduino IDE will be unable to reopen until it is either reinstalled or the folder ...AppData/Local/Arduino15 is deleted.

Solution: Ensure that Java is allowed network access in your computer's firewall settings.

### Why doesn't my SD card work? It may be fake.

Description: We have had customers contact us regarding SD card problems with M2. On rare occasions it would seem that an SD card will flatly refuse to work with M2, without any apparent rhyme or reason. Sometimes they are unbranded generic cards and sometimes they are well-known name brands. Sometimes they are slower cards and sometimes they are faster cards. In all the time we have tracked complaints about SD card problems we have noticed one unifying theme: there is no unifying theme.

Solution: That’s a little hard to believe, so we set out to do some random testing. We bought a handful of SD cards from a handful of vendors, and tested each card straight out of the packaging directly in M2. We also tested all of the cards on a Mac with an SD card reader, using “Disk Speed Test” by Blackmagicdesign.

Of the six SD cards, two failed in M2 outright and posted extremely poor performance in Disk Speed Test. Both were Sandisk Ultra-branded and purchased from the same source, but another Sandisk Ultra purchased from a different source performed perfectly.

It did not appear to be a question of class of card, which leads us to believe that the only way to get both failed cards to operate so poorly and nearly identically MIGHT be if the cards are fakes. The random internet budget vendor who sold us the suspect cards may not even be aware that they are selling counterfeits that don’t work in many applications.

There are a LOT of good write-ups on the problem of counterfeit SD cards, but one that we found particularly detailed and useful is https://photographylife.com/fake-memory-cards.

TL;DR: There is almost nothing to prevent a customer from buying a fake card, so all you can do is buy from reputable sources with good return policies (such as the 8GB card we carry), and thoroughly test the card yourself!

