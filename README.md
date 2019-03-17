## PicoDL

picoDL aims to be a useful and minimal package to generate the necessary tools/assets for all analytics purposes. 
Reduce the time to regenerate analytics from scratch. Use picoDL now. 

**Quick note**
This currently works with static pages. If you are working on a SPA you'll need to tweak it yourself or wait for an update (currently working on).


### How to use it?

On any component that you need to track add an extra class and some dataset attributes
For example if you want to track a link being clicked or hovered you can do with the following:

```html
<a 
    href='#' 
    class='dl' 
    data-dl-events='click, hover'
    data-dl-component='cta'
  >
    Testing
  </a>
```
  
On the js file define the handlers for each type of event

```javascript
const handlers = {
  cta: {
    click: { 
      click: function (event, component) {
        console.log(`${component} clicked. Do something`);
      },
      keypress: function (event, component) {
        console.log(`key pressed for ${component}. Do something`);
      }
    },
    hover: {
      mouseenter: function (event, component) {
        console.log(`${component} hovered Do. something`);
      },
      mouseover: function (event, component) {
        console.log(`${component} hovered. Do something`);
      },
    },
  }
}
```

With a structured way to implement the handlers, we could reduce the time to refactor/rework analytics stuff. 
