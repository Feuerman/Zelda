$(document).ready(function () {

    // Sticky menu

    $(window).on("scroll", function (e) {
        if ($(this).scrollTop() >= 1) {
            $(".section-header").removeClass("normal-menu").addClass("scrolling-menu");
        } else {
            $(".section-header").removeClass("scrolling-menu").addClass("normal-menu");
        }
    });

    // /Sticky menu

    // City select

    function citySelect() {

        var citySpan = $(".new2016 .section-header .phone-block .city > span");
        $(document).on("click", function(e){
            citySpan.removeClass("hover");
        });

        if( $(window).width() <= 768 ) {
            citySpan.removeClass("hover-reaction");
            citySpan.on("click", function(e){
                e.preventDefault();
                e.stopPropagation();

                if($(this).hasClass("hover")) {
                    $(this).removeClass("hover");
                } else {
                    $(this).addClass("hover");
                }
            })
        } else {
            citySpan.addClass("hover-reaction").unbind();
        }
    }

    citySelect();

    $(window).on("resize", function(e){
        citySelect();
    });


    // /City select

    $(document).on("change", ".form .file input, form .file input", function () {
        var par = $(this).closest(".file");
        var len = $(this).get(0).files.length;
        $(this).closest(".file").find(".fname").html("Выбрано: " + len);
    });

    $(document).on("change", ".resume-form .file input", function () {
        var par = $(this).closest(".file");
        var len = $(this).get(0).files[0].name;   
        $(this).closest(".file").find(".fname").html(len);
    });

    $(".section-header .nav-open").click(function () {
        open_nav();
    });

    $(".section-integration .tabs span").click(function () {
        var $this = $(this);
        if ($(this).hasClass("active"))
            return;
        $(this).parent().children().removeClass("active");
        $(this).addClass("active");
        $(".section-integration .blocks:visible").fadeOut(function () {
            $(".section-integration .blocks-" + ($this.index() + 1)).fadeIn();
        });
    });

    $(".section-map").each(function () {
        var sect = $(this);
        sect.find(".map .point").each(function () {
            if (typeof($(this).data("x")) == "undefined")
                return;
            $(this).css({"visibility": "visible"});
            $(this).css({
                left: $(this).data("x") - $(this).outerWidth() / 2,
                top: $(this).data("y") - $(this).outerHeight()
            });
        });
    });

    $(".section-map .numbers").each(function () {
        var sect = $(this);
        sect.find(".prev,.next").click(function () {
            sect.data("auto", 0);
            move_numbers(sect, $(this).hasClass("next") ? 1 : -1);
        });
        sect.data("auto", 1);
        setInterval(function () {
            if (sect.data("auto") != 1)
                return;
            if ($(window).width() < 768)
                return;
            move_numbers(sect, 1);
        }, 3000);
    });

    $(".section-services-home .item").each(function () {
        var txt = $(this).html();
        $(this).html("");
        var front = $("<div></div>").addClass("face3d face3d-front").html(txt);
        var bottom = $("<div></div>").addClass("face3d face3d-bottom").html(txt);
        var dv = $("<div></div>").addClass("box3d").append(front).append(bottom);
        $(this).append(dv);
    });

    $('.back-link').on('click', function(event) {
        event.preventDefault();
        history.back();
    });

    $('.category-dropdown-menu-mobile').on('click', function(event) {
        event.preventDefault();
        $(this).siblings('ul').toggleClass('active');           
    }); 
});

$(window).load(function () {
    $('.section-feedback .feeds-points').each(function () {
        var dv = $(this).children();
        var fitem = dv.children().eq(0);
        var px = parseInt(fitem.css("margin-left"), 10) + fitem.width() / 2;
        dv.css({"padding-left": $(this).width() / 2 - px, "padding-right": $(this).width() / 2 - px});
        $(this).jScrollPane({
            autoReinitialise: true,
            hideFocus: true,
            horizontalDragMaxWidth: 150,
            animateScroll: true
        });
        var api = $(this).data('jsp');

        dv.find(".item").click(function () {
            if ($(this).hasClass("active"))
                return;

            $(this).parent().find(".active").removeClass("active");
            $(this).addClass("active");
            api.scrollToX($(this).position().left + px - dv.parent().width() / 2, true);

            // меняем отзыв
            var textItemId = $(this).data("text-item");
            $(".section-feedback .feeds .item").addClass('hidden');
            $("#" + textItemId).removeClass('hidden');
        });

        var act = $(this).find(".active");
        api.scrollToX(act.position().left + px - $(this).width() / 2, false);
        $(this).swipe(function (dir) {
            var w = dv.parent().width() * 0.4;
            api.scrollByX(w * (dir == "left" ? 1 : -1), true);
        });
    });
});

function parse_text(el) {
    var el = el.get(0);
    var wordArray = el.innerHTML.split(' ');
    while (el.scrollHeight > el.offsetHeight) {
        wordArray.pop();
        el.innerHTML = wordArray.join(' ') + ' ...';
    }
}

function move_numbers(sect, dir) {
    var len = sect.find(".block").length;
    var cur = sect.find(".block:visible");
    var next_pos = cur.index() + dir;
    if (next_pos < 0)
        next_pos = len - 1;
    if (next_pos > (len - 1))
        next_pos = 0;
    var next = sect.find(".block").eq(next_pos);
    cur.fadeOut(function () {
        next.fadeIn();
    });
}
function open_nav() {
    $(document.body).css({overflow: "hidden"});
    var dv = $("<div><div><div class='header'></div></div></div>").addClass("nav-open-layer").appendTo($("#hamburger-menu-holder"));
    dv.css({left: -dv.outerWidth()});
    var dv1 = dv.children();
    var hd = dv.find(".header");
    $(".section-header .logo").clone().appendTo(hd);
    $(".section-header .nav-open").clone().appendTo(hd);
    $(".section-header .make-app").clone().appendTo(dv1);
    $(".section-header .city").eq(0).clone().appendTo(dv1);
    $(".section-header .nav").clone().appendTo(dv1);
    $(".section-header .phone").eq(0).clone().appendTo(dv1);
    $(".section-header .our-sites").clone().appendTo(dv1);

    var sel = $("<select>");
    dv1.find(".city ul li").each(function () {
        var $li = $(this);
        sel.get(0).options[sel.get(0).options.length] = new Option(
            $li.text(),
            $li.data("geoid"),
            $li.hasClass("hidden"),
            $li.hasClass("hidden")
        );
    });

    dv1.find(".city ul").replaceWith(sel);

    sel.change(function () {
        var $selectedOption = $(this).find("option:selected");
        if ($selectedOption.length) {
            dv1.find(".city b").html($selectedOption.html());
            var $variants = window.citySelector.getPopupAEls();
            if ($variants.length > 0) {
                var pos = $variants.index($("li[data-geoid=\"" + $selectedOption.val() + "\"]"));
                if (pos > -1) {
                    $variants[pos].click();
                }
            }
        }
    });

    dv.find(".nav > li > a").click(function (e) {
        if (!$(this).hasClass("has-children"))
            return;
        e.stopPropagation();
        e.preventDefault();
        $(this).toggleClass("opened");
        $(this).parent().find("ul").toggleClass("opened");
    });
    dv.find(".nav-open").click(function () {
        dv.animate({left: -dv.outerWidth()}, function () {
            $(this).remove();
        });
        $(document.body).css({overflow: "auto"});
    });
    dv.animate({left: 0});
}