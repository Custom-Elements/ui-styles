/*
This is a handy set of tack on methods to
Element providing animations with callbacks.
*/

/*
Fade in and out, with a simple node style callback when
the animation is complete.
*/

if (!Element.prototype.fadeOut) {
  Element.prototype.fadeOut = function(callback){
    var anim = this.animate([
          {opacity: 1, transform: 'scale(1)', offset: 0},
          {opacity: 0, transform: 'scale(.98)', offset: 1}
          ], {duration: 100, easing: "0.1s cubic-bezier(0.4, 0.0, 1, 1)"});
    anim.onfinish = function () {
      if (callback) {
        callback();
      }
    }
  }
}

if (!Element.prototype.fadeIn) {
  Element.prototype.fadeIn = function(callback){
    var anim = this.animate([
          {opacity: 0, transform: 'scale(.98)', offset: 0},
          {opacity: 1, transform: 'scale(1)', offset: 1}
          ], {duration: 100, easing: "0.1s cubic-bezier(0.4, 0.0, 1, 1)"});
    anim.onfinish = function () {
      if (callback) {
        callback();
      }
    }
  }
}
