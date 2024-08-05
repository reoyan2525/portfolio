/*TOPへスクロールするボタンの処理 */
$(function () {
    const $pageTop = $("#js-pagetop");

    $(window).scroll(function () {
        if ($(window).scrollTop() > 1) {
            $pageTop.fadeIn(300).css('display', 'flex');
        } else {
            $pageTop.fadeOut(300);
        }
    });

    $pageTop.click(function () {
        $('html, body').animate({ scrollTop: 0 }, 300);
    });
});


/*ハンバーガーメニュー */
$(function () {
    var $header = $('header');
    var $hamburgerMenu = $('.hamburger-menu');
    var $overlay = $('.overlay');
    var headerHeight = $header.outerHeight();
    var isMenuOpen = false; // ハンバーガーメニューが開いているかどうか

    // スクロールイベントを監視
    $(window).on('scroll', function () {
        var scrollPosition = $(window).scrollTop();

        if (!isMenuOpen) {
            // スクロール位置が初期位置から10%を超えたら透明度を変更
            if (scrollPosition > headerHeight * 0.1) {
                $header.addClass('header-transparent');
            } else {
                $header.removeClass('header-transparent');
            }
        }
    });

    // ハンバーガーメニューボタンのクリックイベント
    $hamburgerMenu.on('click', function () {
        isMenuOpen = !isMenuOpen;
        $(this).toggleClass('open');
        $('.header-nav').stop().slideToggle(500);
        $overlay.toggle();

        if (isMenuOpen) {
            // メニューが開いているときは透明度を解除
            $header.removeClass('header-transparent');
            $('body').addClass('body-no-scroll');
            $overlay.css('opacity', 1).show();
        } else {
            // メニューが閉じた後に透明度を再設定
            $('body').removeClass('body-no-scroll');
            $overlay.css('opacity', 0).hide();

            var scrollPosition = $(window).scrollTop();
            if (scrollPosition > headerHeight * 0.1) {
                $header.addClass('header-transparent');
            }
        }
    });

    // オーバーレイクリック時にメニューを閉じる
    $overlay.on('click', function () {
        isMenuOpen = false;
        $hamburgerMenu.removeClass('open');
        $('.header-nav').slideUp(500);
        $('body').removeClass('body-no-scroll');
        $(this).css('opacity', 0).hide();

        var scrollPosition = $(window).scrollTop();
        if (scrollPosition > headerHeight * 0.1) {
            $header.addClass('header-transparent');
        }
    });
});


/*ブログ一覧のテキストはみだし対応 */
$(function textTrim() {
    $('.js-textTrim').each(function () {
        // テキストエリアの高さ取得
        var parentHeight = $(this).height();

        // テキスト自体の高さ取得
        var textHeight = $(this).find('p').height();

        // もしはみ出ていたら
        if (parentHeight < textHeight) {
            $(this).addClass('is-hidden');
        }

    });
});
textTrim();
