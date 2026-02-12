let step = 0;

const text = document.getElementById("text");
const btn = document.getElementById("btn");
const heartbeat = document.getElementById("heartbeat");

function fadeChange(newContent) {
    text.style.opacity = 0;

    setTimeout(() => {
        text.innerHTML = newContent;
        text.style.opacity = 1;
    }, 600);
}

function nextScene() {
    step++;

    if (step === 1) {
        fadeChange(`
            Even the peacock showed up.<br><br>
            Like nature signed a permission slip.<br>
            The birds were witnesses.
        `);
        btn.innerText = "And then…";
    }

    else if (step === 2) {
        heartbeat.play();

        fadeChange(`
            And then I tried to kiss you.<br><br>
            …and I was not very good. 😅<br><br>
            But you didn’t move away.<br>
            You just smiled.
        `);
        btn.innerText = "Round two?";
    }

    else if (step === 3) {
        fadeChange(`
            So I tried again.<br><br>
            A little less nervous.<br>
            A little more sure.<br>
            A little more yours.<br><br>
            And that’s when the sun fully rose.
        `);
        btn.innerText = "Finish the story";
    }

    else if (step === 4) {
        heartbeat.pause();
        heartbeat.currentTime = 0;

        fadeChange(`
            This website ends here.<br><br>
            But I don’t want the kiss to.<br><br>
            So when you finish reading this…<br><br>
            <span class="final-text">Look up.</span>
        `);

        btn.style.display = "none";
    }
}

/* Create floating particles */
for (let i = 0; i < 35; i++) {
    let particle = document.createElement("div");
    particle.classList.add("particle");
    particle.style.left = Math.random() * 100 + "vw";
    particle.style.animationDuration = (8 + Math.random() * 6) + "s";
    particle.style.animationDelay = Math.random() * 5 + "s";
    document.body.appendChild(particle);
}
