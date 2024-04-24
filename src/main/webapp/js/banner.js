$(document).ready(function () {
    var currentIndex = 0;
    var slideCount = $(".mainPage_banners li").length;
    var slideWidth = 1280;

    function goToSlide(index) {
        if (index < 0) {
            index = slideCount - 1;
        } else if (index >= slideCount) {
            index = 0;
        }
        
        $(".slider-nav-dot").css("background-color", "");
        // 이전 슬라이드의 배경색 제거
        $(".mainPage_banners li.white").removeClass("white");
        currentIndex = index;

        // 현재 슬라이드의 배경색 설정
        $(".mainPage_banners li").eq(currentIndex).addClass("white");

        var offset = -currentIndex * slideWidth;
        $(".mainPage_banners").css("left", offset);
        updateNavDots();
    }

    function updateNavDots() {
        $(".slider-nav-dot").removeClass("active");
        $(".slider-nav-dot:eq(" + currentIndex + ")").addClass("active");
    }

    // 이전
    $("#slider-nav-prv").click(function () {
        goToSlide(currentIndex - 1);
        $(".slider-nav-dot").removeClass("white");
    });

    // 다음
    $("#slider-nav-nxt").click(function () {
        goToSlide(currentIndex + 1);
        $(".slider-nav-dot").removeClass("white");
    });

    // 도트
    $(".slider-nav-dot").click(function () {
        var index = $(this).index();
        goToSlide(index);
        $(".slider-nav-dot").removeClass("white");
    });

    updateNavDots();

    var autoSlideInterval = setInterval(function () {
        goToSlide(currentIndex + 1);
    }, 5000);

    // 마우스가 슬라이드 위에 있는 경우, autoSlideInterval 일시 중지
    $(".mainPage_con").mouseenter(function () {
        clearInterval(autoSlideInterval);
    });

    // 마우스가 슬라이드 위에서 벗어난 경우, autoSlideInterval 다시 시작
    $(".mainPage_con").mouseleave(function () {
        autoSlideInterval = setInterval(function () {
            goToSlide(currentIndex + 1);
        }, 5000);
    });
});
