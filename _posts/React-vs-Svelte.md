---
title: "React vs Svelte"
excerpt: "A comparison of 2 popular technologies for UI web development. Which of these two you should choose to create your next project. Also we will consider about which technology to choose for beginners to learn. What are the pros and cons of them at the moment, and about their prospects."
coverImage: "/assets/blog/ReactVsSvelte/reactvssvelte.jpg"
date: "2022-05-22T05:35:07.322Z"
author:
  name: Artem Verbitski
  picture: "/assets/blog/authors/artem.jpeg"
ogImage:
  url: "/assets/blog/ReactVsSvelte/reactvssvelte.jpg"
---

## Introduction

More and more often we hear about a relatively new web framework for developing the user interface for web and even for mobile apps, and this is Svelte. I don't want to write just about this technology, its pros and cons, but to compare it with the most famous web framework React, and if it can be beaten by Svelte.

## Svelte

Let's start with Svelte, many developers who are starting to use this technology are very satisfied. They want to continue to explore the depths of Svelte and even help support the project both financially and contributing to the repository on Github.

But what makes Svelte stand out and make it so unique in the competition?

The main feature of Svelte is that it works as a compiler and not as a library, Svelte compiles the code into pure optimized JavaScript and does not need to drag the entire library into the product. This makes Svelte extremely fast.

## React

On the other hand React, a library with a rich community, developers and a huge Facebook corporation behind it.
It is currently the most popular technology in the front-end ecosystem.

## Let's compare them

- <a href="#which-of-them-is-more-beginner-friendly">Which of them is more beginner friendly</a>
- [Performance](#performance)
- [Reactivity](#reactivity)
- [Community](#community)
- [Server-side rendering](#server-side-rendering)
- [Typescript](#typescript)
- [Bundle-size](#bundle-size)

## Which of them is more beginner friendly

When we start learning something new, we always look first and estimate how much time and effort it takes to learn that or other technology. Thus, the criterion "Which is best for beginners" is important.

Both Svelte and React are not difficult to learn with JavaScript basic knowledge.
If you take React, you may need more time to study things like JSX or CSS-in-JS, although this is not something scary or incomprehensible. Below is an example of JSX syntax.

#### **`Hello.js`**

```js
import React from "react";

const Hello = (props) => {
  const element = <h1>Hello, {props.world}!</h1>;

  return element;
};

export default Hello;
```

Svelte, on the other hand, is more like a simple JavaScript application, and only adds minor adjustments to HTML. Here you can see an example of Svelte syntax.

#### **`Hello.svelte`**

```js
<script>
	let name = 'world';
</script>

<h1>Hello {name}!</h1>

<style>
  h1 {
    color: red;
  }
</style>
```

## Performance

In this comparison, Svelte can be proud not only of its superiority over React, but many other frameworks as well.
Why is Svelte that fast?

Unlike React, Svelte does not load the entire code of the framework into the browser, but instead turns the application into a light and
optimized vanilla Javascript code on build time, and does not load the browser with unnecessary work.

Also a very bold decision from Svelte was to stop using VirtualDOM.

VirtualDOM is for a second almost everything that why React is so fast, and allows it to reach such speeds. 

But what is VDOM?
It is a copy of realDOM that is initialized with the application, we specify what the interfaces should look like, and React with VDOM which is ReactDOM library, finds the best and most effective way to update realDOM - this is also called reconciliation process or diffing.

Svelte is running at build time, converting your components into highly efficient imperative code that surgically updates the DOM. As a result, you're able to write ambitious applications with excellent performance characteristics.

## Reactivity

What is reactive programming?

Every developer has its own opinion about what reactivity is for him.
Here is the definition I like:

> The essence of functional reactive programming is to specify the dynamic behavior of a value completely at the time of declaration
>
> <p>- Heinrich Apfelmus, via Michel Weststrate</p>
>
But to put it very simply, we can think about it that way - when a value changes, your application should **react.**

If you want your application to be reactive in React, you need to add `this.state` or `useState` API, otherwise your application will not respond to changes in the values of your application. So React is not entirely reactive.

But what about Svelte?

Svelte brings reactivity in Javascript itself. It looks through your code and watches for components that depend on your variables, then updates those components as the variables change. This way, Svelte is reactive without having to rely on a third-party API.

In the example below, we declared the reactive variable `doubled` which will change only when the variable `count` is updated, so `doubled` is now tied to `count` variable.
The `$` symbol in Svelte stands for Reactive declaration.

```js
<script>
  let count = 0;
  $: doubled = count * 2;

  const handleClick = () => count += 1;
</script>

<button on:click="{handleClick}">Click me!</button>

<p>{count} doubled is {doubled}</p>
```

Compared to React, Svelte can be considered more reactive

## Community

I think everyone already knows that React is currently the most popular framework, which means that it has many more developers who communicate, discuss and argue about this technology. There are many more such developers, so if you need to make a web application for a client, then finding someone to write this app using React is much easier than finding someone who will use Svelte.

Another important thing is that React is supported by the huge Facebook corporation, and does not intend to disappear in the near future. 

Svelte, when it was a hobby project by Rich Harris, recently joined the Vercel team, which is a big plus and offers great prospects for this technology.

Also, according to the State of JS 2021 survey, newcomer Svelte takes the top spot as the <a href="https://insights.stackoverflow.com/survey/2021#section-most-loved-dreaded-and-wanted-web-frameworks" target="_blank">most loved framework.</a> React is the most wanted, desired by one in four developers.

## Server-side rendering

Server-side rendering (SSR) is the process of rendering web pages on a server and passing them to the browser (client-side),
instead of sending to the browser simple HTML page with `<div id="root"></div>` and then pushing all content to that div with Javascript, as we would do it with React, we are sending a full HTML page, ready to be rendered in the browser with it's full initial page content.

![How SSR works](/assets/blog/ReactVsSvelte/ssr.jpeg)

This approach is good for initial page loading speed and much better SEO. Also, SSR pages are optimal for users with a slow internet connection, because they can see the rendered HTML while the JavaScript is processing.

In React, there's Next.js. Next.js is a web development framework built on top of Node.js enabling React based web applications functionalities such as server-side rendering and generating static websites. React documentation mentions Next.js among "Recommended Toolchains" advising it to developers as a solution when "Building a server-rendered website with Node.js".

On the other hand Svelte with it's SvelteKit. SvelteKit is a full-stack, server-side, pre-rendering application framework for Svelte that can output production builds to different environments.

Next is amazing because it manages to reduce the big fat React library into smaller chunks and has many smart design decisions but some clumsy ones as well. The first or second js download is still 70kb. So, it's ok and far from being a bottleneck, but SvelteKits initial js downloads are a fraction from that paired with having more features built-in.

## Bundle-size

One more not less important thing is bundle-size, the smaller the bundle, the faster the page speed.
React has **42.2KB** of gzipped version, but Svelte team did something unusual and made Svelte with only **1.6KB** it is 26 times smaller then React, wow 😯.

## Conclusion

At the end of this comparison, it may seem that Svelte is the winner, and many experienced developers say that the future is behind it. But it has to be taken with a pinch of salt, React is a good technology with a large community, and for Svelte to overshadow it, it still has a lot to grow and develop.

It will be good advice to get familiarize with Svelte and get something new out of it.

![pigeon likes svelte](/assets/blog/ReactVsSvelte/chiken.jpeg)

But as of 2022, the choice between Svelte and React in business will surely fall on **React**.

