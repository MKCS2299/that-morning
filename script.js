let step = 0;
const text = document.getElementById("text");
const btn = document.getElementById("btn");
const sun = document.getElementById("sun");

function fadeChange(content) {
    text.style.opacity = 0;
    setTimeout(() => {
        text.innerHTML = content;
        text.style.opacity = 1;
    }, 500);
}

function riseSun() {
    sun.style.bottom = "120px";
}

function createKissBubbles() {
    for (let i = 0; i < 15; i++) {
        let kiss = document.createElement("div");
        kiss.className = "kiss";
        kiss.innerHTML = "💋";
        kiss.style.left = Math.random() * 100 + "vw";
        kiss.style.top = "60%";
        document.body.appendChild(kiss);

        setTimeout(() => kiss.remove(), 3000);
    }
}

function fireworks() {
    for (let i = 0; i < 20; i++) {
        let fw = document.createElement("div");
        fw.className = "firework";
        fw.style.left = Math.random() * 100 + "vw";
        fw.style.top = Math.random() * 60 + "vh";
        document.body.appendChild(fw);

        setTimeout(() => fw.remove(), 1000);
    }
}

function nextScene() {
    step++;

    if (step === 1) {
        riseSun();
        fadeChange(`
            Even the peacock showed up.<br><br>
            Like the universe approved.
        `);
        btn.innerText = "And then…";
    }

    else if (step === 2) {
        fadeChange(`
            And then I tried to kiss you.<br><br>
            I was… not very good. 😅<br><br>
            But you stayed.
        `);
        btn.innerText = "Try again?";
    }

    else if (step === 3) {
        createKissBubbles();
        fireworks();

        fadeChange(`
            So I tried again.<br><br>
            A little better.<br>
            A little braver.<br><br>
            And the sun rose with us.
        `);
        btn.innerText = "Finish it";
    }

    else if (step === 4) {
        fadeChange(`
            This website ends here.<br><br>
            But I don’t want the kiss to.<br><br>
            <span class="final-text">
            Are you ready for round<br>
            "I don’t remember the count"?
            </span>
        `);
        btn.style.display = "none";
    }
}
