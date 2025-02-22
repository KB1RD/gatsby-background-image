'use strict';

exports.onClientEntry = function (a, pluginOptions) {
  // Set chars to escape in classNames.
  if (pluginOptions.specialChars) {
    window._gbiSpecialChars = pluginOptions.specialChars
  }
  // IntersectionObserver polyfill for gatsby-background-image-es5 (Safari, IE)
  if (typeof window.IntersectionObserver === `undefined`) {
    import(`intersection-observer`)
    console.log(`# IntersectionObserver is polyfilled!`)
  }
}
