document.addEventListener("DOMContentLoaded", () => {
    const gifElement = document.querySelector('img[alt="construction"]') as HTMLImageElement | null;
    const targetClickCount = 7;
    let clickCount = 0;

    if (gifElement) {
        gifElement.addEventListener("click", () => {
            clickCount++;
            if (clickCount === targetClickCount) {
                // user has clicked enough. Do whatever
            }
        });
    } else {
        console.error("construction GIF element missing");
    }
});
