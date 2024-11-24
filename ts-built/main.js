document.addEventListener("DOMContentLoaded", function () {
    var gifElement = document.querySelector('img[alt="construction"]');
    var targetClickCount = 7;
    var clickCount = 0;
    if (gifElement) {
        gifElement.addEventListener("click", function () {
            clickCount++;
            if (clickCount === targetClickCount) {
                // user has clicked enough. Do whatever
            }
        });
    }
    else {
        console.error("construction GIF element missing");
    }
});
