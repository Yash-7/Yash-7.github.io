var animationEnd = (function(el) {
    var animations = {
      animation: 'animationend',
      OAnimation: 'oAnimationEnd',
      MozAnimation: 'mozAnimationEnd',
      WebkitAnimation: 'webkitAnimationEnd',
    };
  
    for (var t in animations) {
      if (el.style[t] !== undefined) {
        return animations[t];
      }
    }
  })(document.createElement('div'));

var animation='wobble';
var classChange= function(id){
    $('i').css({"animation-delay":0,"-webkit-animation-delay":0})
    $("#"+id).removeClass('animated bounce')
    $("#"+id).addClass('animated '+animation).one(animationEnd, function(){
        $("#"+id).removeClass('animated '+animation)
    });
}
$(document).ready(function(){
    $("#git").click(function(){
        window.open('https://github.com/Yash-7', '_blank')
        return false;
    });
    $("#git").hover(function(){
        classChange('git');
    });
    $("#fb").click(function(){
        window.open('https://www.facebook.com/yashwanth.naik.73', '_blank')
        return false;
    });
    $("#fb").hover(function(){
        classChange('fb');
    });
    $("#ig").click(function(){
        window.open('https://www.instagram.com/yashwanth.7/saved/?hl=en', '_blank')
        return false;
    });
    $("#ig").hover(function(){
        classChange('ig');
    });
    $("#lin").click(function(){
        window.open('https://www.linkedin.com/in/yashwanth-naik-26114011b/', '_blank')
        return false;
    });
    $("#lin").hover(function(){
        classChange('lin');
    });
});