<p align="center">
  <img src="./public/images/preview.gif" alt="animated" />
</p>

# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Links

- [Solution URL](https://www.frontendmentor.io/solutions/time-tracking-dashboard-using-react-and-css-grid-meG7njxZOn)
- [Live Site URL](https://time-tracking-dashboard-challenge.netlify.app/)

## My process

- I first hard coded the activity cards in order to style them and the dashboard grid. The design files only included computer and mobile layouts, I sort of also added styles for tablet.
- Once the general styles were done, I rendered the activities cards dynamically, with their content still hard coded.
- Then I focused on the main functionality of the app: rendering the correct stats for each activity when clicking on a timeframe.
- After that, I completed other small features of the app: highlighting the active timeframe, dynamically showing the previous timeframe text in the card (such as ‘Last Week’), setting the right icon/background for each activity.
- Finally, the layout of the app and the content of the cards was still a bit wonky and not true to the design, so I made the last adjustements there.
- I added a small animation on loading for fun. :)

### Built with

- Semantic HTML5 markup
- CSS Grid
- [React](https://reactjs.org/) - JS library

### What I learned

Tons. The hardest part of the app in my opinion lies more in its (responsive) layout than its functionality. I almost never used CSS grid in past projects as I struggled with it. But this challenge enabled me to get more confident with it and to see how powerful it is. Not just for the general layout but also for content placement, for which I usually only swear by Flexbox.

Although the functionality took me less time to implement, I made the mistake (that I often make) to not have laid out the steps before starting to code, and got into something really convoluted code which kept on throwing errors. I then proceeded to write down the steps, and that’s how I realised I didn’t know how to finish my initial approach. I outlined a second approach, much simpler and concise, that React can accommodate perfectly.

Once I was on the right track, the only hurdle I ran into was that I was trying to access a property stored in a variable in uppercase while the property in the data object is in lowercase - it took me a while to understand why I got a TypeError when all my console logs showed that the value was defined.

### Continued development

In future projects I will certainly use CSS Grid again. I've also for the first time made use of switch statements and they do really came in handy!

### Useful resources

- [freeCodeCamp CSS grid course](https://www.freecodecamp.org/learn/2022/responsive-web-design/#learn-css-grid-by-building-a-magazine) - I followed FCC updated tutorial on CSS Grid before starting working on the challenge as I needed a refresher on grids and was not very confident using them at all before starting with the challenge. This course helped a lot!
- [CSS tricks](https://www.example.com) - Always a great resource, it really helped to look up grid properties and understand them.
- [Code 15 React Projects](https://www.youtube.com/watch?v=a_7Z7C_JCyo&ab_channel=freeCodeCamp.org) I feel like I made so much progress quickly in React thanks to these follow along projects provided by John Smilga. I had completed a few prior to this challenge and referred back to them when I was stuck.
- [This StackOverflow's answer](https://stackoverflow.com/a/41610263/14697954) - I was searching for how to display the cards one after the other on start up and with pure CSS, this reply was exactly what I needed!
