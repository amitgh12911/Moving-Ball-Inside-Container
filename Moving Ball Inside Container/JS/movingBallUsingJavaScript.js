let BoundryElement = document.getElementById("Boundry");
let ballElement = document.getElementById("ball");
let t = true;
let l = true;

// let harryBhaiSnakeGameAudio = new Audio(
//     "../../Harry Bhai Projects/Harry SnakeGame/music/gameover.mp3"
// );

setInterval(() => {
    ballTop = parseInt(getComputedStyle(ballElement).getPropertyValue("top"));
    ballLeft = parseInt(getComputedStyle(ballElement).getPropertyValue("left"));
    if (t) {
        ballElement.style.top = ballTop + 1 + "px";
        if (ballTop >= 463) {
            // harryBhaiSnakeGameAudio.play();
            t = false;
        }
    } else {
        ballElement.style.top = ballTop - 1 + "px";
        if (ballTop <= 0) {
            // harryBhaiSnakeGameAudio.play();
            t = true;
        }
    }
    if (l) {
        ballElement.style.left = ballLeft + 1 + "px";
        if (ballLeft >= 994) {
            // harryBhaiSnakeGameAudio.play();
            l = false;
        }
    } else {
        ballElement.style.left = ballLeft - 1 + "px";
        if (ballLeft <= 0) {
            // harryBhaiSnakeGameAudio.play();
            l = true;
        }
    }
}, 1);
