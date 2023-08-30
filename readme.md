https://github.com/coding-bootcamps-eu/web-apps-foundation/blob/main/web-app-basics/05-color-mixer.md

# Color Mixer

Implement a web app that can mix red, green and blue into any color like this [example](https://coding-katas.netlify.app/color-mixer/).

## Requirments

- [ ] Add a header with three sliders (input with type `range`)
- [ ] The sliders will control the values for a rgb color (one slider for red, one slider for green, one slider for blue)
- [ ] Once a slider is moved the background color of the web app is updated
- [ ] Also show the color value in the header (can be in hex or as a rgb value like this `rgb(xx,xx,xx)`)
- [ ] Load a default color an the beginning (i.e. hotpink or dodgerblue)

## Hints

Example range input. The `value` property sets the default value for the range input.

```html
<input type="range" step="1" min="0" max="255" value="50" />
```

## Example Video

https://user-images.githubusercontent.com/16404104/146947856-c66a4566-c3a3-4ed4-87e7-b7c2a32ef5d5.mov

## Extension

https://github.com/coding-bootcamps-eu/restful-backends/blob/main/fetch-api-and-http/02-color-mixer-with-api.md

### Color Mixer with API

This kata assumes that you already implemented the [Color Mixer Kata](https://github.com/coding-bootcamps-eu/web-apps-foundation/blob/main/web-app-basics/05-color-mixer.md).

Add a `Get Random Color` button to your color mixer that will load a random color from the [random color API](https://dummy-apis.netlify.app/api/color).

The color mixer should then look like [this](https://coding-katas.netlify.app/color-mixer-with-api/).

#### Video

https://user-images.githubusercontent.com/16404104/148771378-2c53f195-281e-4a8a-963a-06d8149387b1.mov

# Task: color-mixer App with Vue

In this task we use the `v-on` directive to create a vue version of our [color-mixer app](https://github.com/coding-bootcamps-eu/web-apps-foundation/blob/main/web-app-basics/05-color-mixer.md) from the `web apps foundation` module.

## Fulfill the following tasks:

- [ ] Try to refactor your existing (plain js and html) color mixer with VueJS.
  - [ ] If you didn't solve that issue before start from scratch!

https://github.com/coding-bootcamps-eu/web-apps-with-vuejs/tree/main/part-1-vue-basics/tasks/color-mixer
