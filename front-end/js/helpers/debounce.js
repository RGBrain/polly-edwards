/**
 * Debounce functions for better performance
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * https://gomakethings.com/debouncing-your-javascript-events/
 * @param  {Function} fn The function to debounce
 */
module.exports = function (fn) {

    // Setup a timer
    var timeout;

    // Return a function to run debounced
    return function () {

        // Setup the arguments
        var context = this;
        var args = arguments;

        // If there's a timer, cancel it
        if (timeout) {
            window.cancelAnimationFrame(timeout);
        }

        // Setup the new requestAnimationFrame()
        timeout = window.requestAnimationFrame(function () {
            fn.apply(context, args);
        });

    }

};
