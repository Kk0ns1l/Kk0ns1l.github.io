$(document).ready(function(){
    var Slider = (function() {
        var initSlider = function() {
        var dir = $("html").attr("dir");
        var swipeHandler = new Hammer(document.getElementById("reviewsSlider"));
        swipeHandler.on('swipeleft', function(e) {
            if (dir == "rtl")
                $(".arrow-left").trigger("click");
            else
                $(".arrow-right").trigger("click");
        });

        swipeHandler.on('swiperight', function(e) {
            if (dir == "rtl")
                $(".arrow-right").trigger("click");
            else
                $(".arrow-left").trigger("click");
        });

        $(".arrow-right , .arrow-left").click(function(event) {
            var nextActiveSlide = $(".slider-card.active").next();

            if ($(this).hasClass("arrow-left"))
                nextActiveSlide = $(".slider-card.active").prev();

            if (nextActiveSlide.length > 0) {
                var nextActiveIndex = nextActiveSlide.index();
                $(".dots span").removeClass("active");
                $($(".dots").children()[nextActiveIndex]).addClass("active");

                updateSlides(nextActiveSlide);
            }
        });

        var updateSlides = function(nextActiveSlide) {
            var nextActiveSlideIndex = $(nextActiveSlide).index();

            $(".slider-card").removeClass("prev-1");
            $(".slider-card").removeClass("next-1");
            $(".slider-card").removeClass("active");
            $(".slider-card").removeClass("prev-2");
            $(".slider-card").removeClass("next-2");

            nextActiveSlide.addClass("active");

            nextActiveSlide.prev().addClass("prev-1");
            nextActiveSlide.prev().prev().addClass("prev-2");
            nextActiveSlide.addClass("active");
            nextActiveSlide.next().addClass("next-1");
            nextActiveSlide.next().next().addClass("next-2");
        }

        var updateToNextSlide = function(nextActiveSlide)
        {
            
        }
    }
    return {
        init: function() {
            initSlider();
        }
    }
})();

$(function() {
    Slider.init();
});
})