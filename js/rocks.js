

var y = document.getElementsByClassName('phonemask');


var i;
for (i = 0; i < y.length; i++) {
    y[i].addEventListener('input', function (e) {
        var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
        e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
    });
}

var closeDropdownTimeout;
function openMenu(ele) {
    var cBox = "#" + $(ele).attr("data-menu-target");

    $(".sdrop-container").each(function () {
        if (!$(this).hasClass("active"))
            $(this).hide(20);
    });

    if (cBox == "#aboutdrop") {
        $(".sdrop-container").css("width", "250px");
    }
    else {
        $(".sdrop-container").css("width", "600px");
    }
    $(".sdrop-box").css("left", ($(ele).offset().left).toString() + "px");    
    $(".sdrop-box").css("top", ($(ele).offset().top + 50).toString() + "px");
    
    $(".sdrop-carrot").css("top", ($(ele).offset().top - 25).toString() + "px");
    $(".sdrop-carrot").css("left", ($(ele).width() / 2 - 10).toString() + "px");
    $(".sdrop-carrot-border").css("top", ($(ele).offset().top - 26).toString() + "px");
    $(".sdrop-carrot-border").css("left", ($(ele).width() / 2 - 10).toString() + "px");
    
    $(".sdrop-container").each(function () {
        if (!$(this).hasClass("active"))
            $(this).hide(20);
    });

    $(cBox).show(40);
    $(cBox).addClass("active");
    $(".sdrop-box").fadeIn(100);
}

function closeMenu() {
    $(".sdrop-box").fadeOut(100);
}

function stopCloseTimeout() {
    clearTimeout(closeDropdownTimeout);
}

function startCloseTimeout(ele) {
    var cBox = "#" + $(ele).attr("data-menu-target");
    $(cBox).removeClass("active");
    closeDropdownTimeout = setTimeout(function () {
        return closeMenu();
    }, 70);
}

$(".sdrop").mouseenter(function () {
    stopCloseTimeout();
    openMenu(this);
});

$(".sdrop").mouseleave(function () {
    startCloseTimeout(this);
});

$(".sdrop-box").mouseenter(function () {
    stopCloseTimeout();
});

$(".sdrop-box").mouseleave(function () {
    startCloseTimeout();
});


$("#bMobileTest").click(function () {
    event.preventDefault();
    var web = $("#tWebURL").val();
    var r = "https://search.google.com/test/mobile-friendly?url=" + encodeURIComponent(web);
    window.location = r;
});

