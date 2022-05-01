# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](/images/screenshot.png)

### Links

- [Solution](https://www.frontendmentor.io/solutions/sunnyside-agency-landing-page-using-tailwind-css-By2s2r2r5)
- [Live](https://antonio-sunny-agency-landing.netlify.app/)

## My process

### Built with

- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapidly building custom user interfaces.
- Mobile-first workflow
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Javascript

### What I learned

I learned about the Mark Text Element and how to tweak the line height using Tailwind CSS.

```
<a class="text-center font-serif font-bold" href="/#">
	<mark class="inline-block rounded-full bg-yellow px-1 pb-2 leading-[0]">LEARN MORE</mark>
</a>
```

Also learned how to a mobile menu open and close using Javascript.

```
<img id="hamburger"/>

<ul
	id="menu"
	class="absolute left-6 right-6 mt-[23rem] hidden flex-col items-center space-y-6 bg-white py-11">
	<li><a href="/#">About</a></li>
</ul>

//script
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
hamburger.addEventListener('click', (e) => {
	e.preventDefault();
	menu.classList.toggle('hidden');
	menu.classList.toggle('flex');
});
```

### Useful resources

- [Tailwind CSS Grid](https://tailwindcss.com/docs/grid-column) - Utilities for controlling how elements are sized and placed across grid columns
- [Create custom underline](https://stackoverflow.com/questions/43683187/how-can-i-create-custom-underline-or-highlight-for-text-in-html-or-css)
- [Mark Text Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark)

## Author

👤 **Antonio Lopez**

- Website: [Antonio Lopez](https://www.antoniolopez.me/)
- Github: [@antonio-lopez](https://github.com/antonio-lopez)
- Frontend Mentor: [@antonio-lopez](https://www.frontendmentor.io/profile/antonio-lopez)
