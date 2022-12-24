---
layout: ../../layouts/Post.astro
title: Build your Sketch Library for Fast Prototyping
date: 2017-08
---

# Build your Sketch Library for Fast Prototyping

Draw your design on paper, take pictures and import to a prototyping tool, add a link to each page, show it to the stakeholder and they will give you this face 🧐.

Paper prototyping can be rough, abstract, and hard to understand. So… you to want build high-fidelity prototypes? Here are some problems:

* You need to spend a lot of time on design decisions, not on solving the real problems.
  
* Product requirements change faster than your prototype; what you designed would be trashed before it gets presented to product owners.
    

How about trying to build a faster high-fidelity prototype next time, with powerful Sketch Libraries?


## A quick look of Sketch Libraries

### What is Sketch Libraries?

Sketch Libraries are just ordinary Sketch documents that contain Symbols. However, Libraries are cross-document symbols, which means you can use these symbols across all your Sketch documents.

### Why do Sketch Libraries matter?

*   In order to keep your design consistent in different design files… especially when you start collaborating with other designers. You need a single source of truth to relay on: what you changed in the Library will also change in other files.
*   You probably used other online wireframe tools to do rapid prototyping. If you think about it, those tools are just libraries which contain all the components you need to build a prototype quickly. So why not just build one by yourself?

## Build your first Sketch Library

When you start building the sketch library, it’s more like making (not playing) Lego. It’s not the fun part, but it’s a very important step.

Just like Lego, one library can use another library to build a more complex one.

Sketch has a document about how to build the library, and I would recommend starting there. Here are some tips for building the Library.

### Mono Library or Multi-Library

**Mono library** includes all the components in a single file. The benefit of mono libraries are that it’s easy to mange, as only one file is needed to be imported into Sketch Library. However when your library starts growing, it can also be hard to maintain. Another reason to avoid mono libraries is that your symbols selection in Sketch will be huge (although you can of course use plugins to insert symbols).

**Multi-library** makes each file smaller, and it is easier to maintain in the future. There are also drawbacks: If one library uses another library, both libraries need to be updated. In Kotti Design System[^1], we found that the multi-library architecture is more suitable for us.

### Structured Nest Library

![Nested library structure](/images/sl-01.png)

Sketch allows nested symbols, so we can use this feature to build a nested library. Kotti Color is in the bottom of the hierarchy, and Kotti Icon and Kotti Typography rely on it. It makes changing the color of icons or text easier. Other components depending on Kotti Icon and Kotti Typography makes quickly changing the icon and font type super fast.

![Using the library in action](/images/sl-02.gif)

## The End …

We changed our first library when Sketch[^2] launched this feature. We spent a few days to convert all the symbols into libraries. Yes it’s a tedious process, but the benefits are huge:

*   For small features (2–3 views) we can build the prototype in 2 hours and it can be used for collecting customer feedback.
*   For projects we’re still using paper prototype in the early stage for fast design iteration. Then we switch to Sketch - Full Speed On.

[^1]: [Kotti Design System](https://github.com/3yourmind/kotti)       
[^2]: https://medium.com/3yourmind/build-your-sketch-library-for-fast-prototyping-e6cf80109e80
