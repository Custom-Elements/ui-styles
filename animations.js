/*
This is a handy set of tack on methods to
Element providing animations with callbacks.
*/

/*
Fade in and out, with a simple node style callback when
the animation is complete.
*/

Element.prototype.fadeOut = function(callback){
  var elem = this;
  var anim = this.animate([
        {opacity: 1, transform: 'scale(1, 1)', offset: 0},
        {opacity: 0, transform: 'scale(.98, .98)', offset: 1}
        ], {duration: 200, easing: "0.2s cubic-bezier(0.4, 0.0, 1, 1)"});
  anim.onfinish = function () {
    elem.setAttribute('hidden', '');
    if (callback) {
      callback();
    }
  }
}

Element.prototype.fadeIn = function(callback){
  var elem = this;
  elem.removeAttribute('hidden');
  var anim = this.animate([
        {opacity: 0, transform: 'scale(.98, .98)', offset: 0},
        {opacity: 1, transform: 'scale(1, 1)', offset: 1}
        ], {duration: 200, easing: "0.2s cubic-bezier(0.4, 0.0, 1, 1)"});
  anim.onfinish = function () {
    if (callback) {
      callback();
    }
  }
}

Element.prototype.zoomIn = function(callback){
  var anim = this.animate([
        {opacity: 0.66, transform: 'scale(1.2, 1.2)', 'text-shadow': '0 0 1em', offset: 0},
        {opacity: 0.66, transform: 'scale(1, 1)', 'text-shadow': '0 0 0', offset: 1}
        ], {duration: 200, easing: "0.2s cubic-bezier(0.4, 0.0, 1, 1)"});
  anim.onfinish = function () {
    if (callback) {
      callback();
    }
  }
}
