$(function () {
    const slickSelector = ".voice__container-customer-slick";

    // Slick初期化
    const initializeSlick = () => {
        $(slickSelector).slick({
            arrows: false,
            autoplay: false,
            adaptiveHeight: true,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: false,
            initialSlide: 1,
            centerMode: true,
            centerPadding: "0rem",
            draggable: false,
            swipe: false,
            responsive: [
                {
                    breakpoint: 767.9,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        draggable: true,
                        swipe: true,
                    },
                },
            ],
        });
    };

    // ドットの挙動をPC/モバイルで切り替え
    const toggleDotBehavior = () => {
        const windowWidth = $(window).width();

        if (windowWidth > 767.9) {
            // PC版: ドットをクリックでスライド移動無効化
            $(`${slickSelector} .slick-dots li button`)
                .off("click") // イベントを完全に解除
                .on("click", function (event) {
                    event.preventDefault(); // デフォルト動作を無効化
                    return false; // イベント伝播を防ぐ
                })
                .css("cursor", "default"); // ポインターを通常の矢印に
        } else {
            // モバイル版: ドットのデフォルト動作を有効化
            $(`${slickSelector} .slick-dots li button`)
                .off("click") // PC版のイベントをクリア
                .css("cursor", "pointer"); // ポインターを指アイコンに戻す
        }
    };

    // スライドを真ん中に移動させる
    const centerSlide = () => {
        const windowWidth = $(window).width();

        if (windowWidth > 767.9) {
            // PC版の場合、真ん中のスライドに移動
            const slickInstance = $(slickSelector).slick("getSlick");
            const centerIndex = Math.floor(slickInstance.slideCount / 2);
            $(slickSelector).slick("slickGoTo", centerIndex);
        }
    };

    // 初期化と挙動の設定
    initializeSlick();
    toggleDotBehavior();

    // リサイズ時の処理
    $(window).on("resize", function () {
        toggleDotBehavior(); // ドットの挙動をリセット
        centerSlide(); // スライドを真ん中に移動
    });

    // Slick再構築時にイベントを再設定
    $(slickSelector).on("setPosition", function () {
        toggleDotBehavior();
        centerSlide();
    });
});
