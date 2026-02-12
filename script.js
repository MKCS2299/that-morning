let step = 0;
const text = document.getElementById("text");
const btn = document.getElementById("btn");
const sun = document.getElementById("sun");

/* SUN RISE */
function riseSun() {
    sun.style.bottom = "120px";
}

/* ADD BIRDS */
function addBird() {
    const bird = document.createElement("div");
    bird.className = "bird";
    bird.style.top = (10 + Math.random() * 30) + "vh";
    bird.style.animationDuration = (8 + Math.random() * 4) + "s";
    bird.style.animationDelay = Math.random() * 2 + "s";
    document.body.appendChild(bird);
    setTimeout(() => bird.remove(), 12000);
}

/* KISS BUBBLES */
function showKiss() {
    for (let i = 0; i < 12; i++) {
        const k = document.createElement("div");
        k.className = "kiss";
        k.innerHTML = "💋";
        k.style.left = Math.random() * 100 + "vw";
        k.style.top = "60%";
        document.body.appendChild(k);

        setTimeout(() => k.remove(), 3000);
    }
}

/* FIREWORKS */
function fireworks() {
    for (let i = 0; i < 18; i++) {
        let f = document.createElement("div");
        f.className = "firework";
        f.style.left = Math.random() * 100 + "vw";
        f.style.top = Math.random() * 60 + "vh";
        document.body.appendChild(f);

        setTimeout(() => f.remove(), 1000);
    }
}

function fadeChange(content) {
    text.style.opacity = 0;
    setTimeout(() => {
        text.innerHTML = content;
        text.style.opacity = 1;
    }, 500);
}

function nextScene() {
    step++;

    if (step === 1) {
        riseSun();
        addBird();
        addBird();
        fadeChange(`
            Even the peacock showed up<br>
            &nbsp;like the universe approved.
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
        showKiss();
        fireworks();
        fadeChange(`
            So I tried again.<br><br>
            A little better.<br>
            A little braver.<br><br>
            The sun rose with us.
        `);
        btn.innerText = "Finish it";
    }
    else if (step === 4) {
        fadeChange(`
            <span class="final-text">
            Are you ready for round<br>
            "I don’t remember the count"?
            </span>
        `);
        btn.style.display = "none";
    }
}
