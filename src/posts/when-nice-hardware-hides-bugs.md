---
title: "When Nice Hardware Hides Bugs"
date: "2016-11-18"
published: true
---

I recently ran into an issue with an app I'm working on, where an action that had previously felt instantaneous was taking upwards of 1 second to complete.

What changed? Well I had just decided to give "life in linux" a fresh go, after becoming recently disillusioned with the other major offerings. But that surely couldn't be the issue. The graphics driver definitely wasn't as snappy as the Windows counterpart, but not a 1000x difference.

So I dug in, profiling the functions that composed the action in question. I suspected the bottleneck would be a graph search function, but that turned out to be as performant as ever. The culprit, it turned out, was actually the autosave feature I had built into this action. And then it hit me – my linux install was on an old HDD I had laying around! Every other OS I had run this app on was installed on an SSD!

Being a web developer by trade, I had never run into an issue like this before. I'm accustomed to network speed being the biggest bottleneck, not hardware specs. It was really interesting to get a sense of how much hardware can impact software performance.