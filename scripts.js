// 此處可添加需要的JavaScript功能，目前為預留
document.addEventListener("DOMContentLoaded", function() {
    // 定義圖片來源陣列（請依需求替換圖片檔案路徑）
    const images = [
        "iu-placeholder.jpg",
        "iu-placeholder1.jpg",
        "iu-placeholder2.jpg",
        "iu-placeholder3.jpg",
        "iu-placeholder4.jpg",
        "iu-placeholder5.jpg"
    ];

    let currentIndex = 0;
    const heroImage = document.getElementById("hero-image");

    // 更新圖片
    function updateImage(index) {
        heroImage.src = images[index];
    }

    // 自動切換圖片 (每 2 秒切換一次)
    let slideInterval = setInterval(function() {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage(currentIndex);
    }, 2000);

    // 手動切換按鈕
    const nextBtn = document.getElementById("slider-next");
    const prevBtn = document.getElementById("slider-prev");

    nextBtn.addEventListener("click", function() {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage(currentIndex);
        resetAutoSlide();
    });

    prevBtn.addEventListener("click", function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage(currentIndex);
        resetAutoSlide();
    });

    // 重置自動切換計時器
    function resetAutoSlide() {
        clearInterval(slideInterval);
        slideInterval = setInterval(function() {
            currentIndex = (currentIndex + 1) % images.length;
            updateImage(currentIndex);
        }, 5000);
    }
});
