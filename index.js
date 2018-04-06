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
    $("#"+id).removeClass('animated bounce')
    $("#"+id).addClass('animated '+animation).one(animationEnd, function(){
        $("#"+id).removeClass('animated '+animation)
    });
}
var resize=function(){
    if($(window).width()<340){
        $('#fb').css('margin-left','8%');
        $('#ig').css('margin-left','16%');
        $('#lin').css('margin-left','24%');
    }else if($(window).width()<470){
        $('#fb').css('margin-left','6%');
        $('#ig').css('margin-left','12%');
        $('#lin').css('margin-left','18%');
    }
    else if($(window).width()<570){
        $('#fb').css('margin-left','4%');
        $('#ig').css('margin-left','8%');
        $('#lin').css('margin-left','12%');
    }else if($(window).width()<840){
        $('#fb').css('margin-left','3%');
        $('#ig').css('margin-left','6%');
        $('#lin').css('margin-left','9%');
    }else if($(window).width()<1200){
        $('#fb').css('margin-left','1%');
        $('#ig').css('margin-left','2%');
        $('#lin').css('margin-left','3%');
    }else{
        $('#fb,#ig,#lin').css('margin-left','0')
    }
    if($(window).width()<550){
        if($(window).height()<710){
            $('#dp,#phone,#msg').css('height','80vh')
        } else {
            $('#dp,#phone,#msg').css('height','70vh')            
        }
    } else {
        $('#dp,#phone,#msg').css('height','70vh')            
    }
    if($(window).width()<350){
        $('#dpimg').height(230);
        $('#dpimg').width(230);
        $('#dpimg').css('margin-top','25%')
    }else{
        $('#dpimg').height(300);
        $('#dpimg').width(300);
        $('#dpimg').css('margin-top','15%')
    }
    if($(window).width()<700){
        $('.icon').css('display','block')
    }
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
        window.open('https://www.instagram.com/yashwanth.7/?hl=en', '_blank')
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

    $('#cric').hover(function(){
        this.style.opacity="0.7";
    },function(){
        this.style.opacity="1";
    })
    $('#sk').hover(function(){
        this.style.opacity="0.7";
    },function(){
        this.style.opacity="1";
    });
    $('#vb').hover(function(){
        this.style.opacity="0.7";
    },function(){
        this.style.opacity="1";
    })
    $('#game').hover(function(){
        this.style.opacity="0.7";
    },function(){
        this.style.opacity="1";
    })
    $('#webop').hover(function(){
        this.style.opacity="0.7";
    },function(){
        this.style.opacity="1";
    })
    $('#ml').hover(function(){
        this.style.opacity="0.7";
    },function(){
        this.style.opacity="1";
    })
    resize();
    $(window).resize(function(){
        resize();  
    })
    $("#gotoabt").hover(function(){
        $("#gotoabt").addClass('animated fadeOutDown').one(animationEnd, function(){
            $("#gotoabt").removeClass('animated fadeOutDown')
        });
    })
});
$(document).ready(function(){
    var scrollTop = 0;
    $(window).scroll(function(){
        scrollTop = $(window).scrollTop();
        if (scrollTop >= 150) {
            $('#nav').addClass('scrolled-nav');
        } else if (scrollTop < 150) {
            $('#nav').removeClass('scrolled-nav');
        } 
    
    });
    var scrollFunction=function(e,num){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(e.target.attributes.href.value).offset().top
        }, num);
    }
    $("#abtbtn").click(function(e) {
        scrollFunction(e,1000);
    });
    $("#intbtn").click(function(e) {
        scrollFunction(e,1200);
    });
    $("#contbtn").click(function(e) {
        scrollFunction(e,1600);
    });
    $("#gotoabt").click(function(e){
        scrollFunction(e,700);
    })
});
var nav=function(){
    var x = document.getElementById("nav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
