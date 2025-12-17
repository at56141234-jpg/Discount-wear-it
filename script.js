const revealBtn = document.getElementById("revealBtn");
const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const typingText = document.getElementById("typingText");
const music = document.getElementById("bgMusic");

const message = 
`🎶 Congratulations!
You have won 20% discount vouncer on shopping from wearit valid for 15days.
along with discount you will get animated interactive proposal codes.. 💖`;

let index = 0;

// Reveal action
revealBtn.addEventListener("click", () => {
    step1.classList.add("hidden");
    step2.classList.remove("hidden");

    music.play().catch(()=>{});
    startTyping();
    startConfetti();
});

// Typing effect
function startTyping() {
    if (index < message.length) {
        typingText.textContent += message.charAt(index);
        index++;
        setTimeout(startTyping, 40);
    }
}

// CONFETTI
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

for (let i = 0; i < 150; i++) {
    confetti.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 6 + 2,
        d: Math.random() * 1 + 0.5,
        color: 'hsl(${Math.random() * 360}, 100%, 50%)'
    });
}

function startConfetti() {
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        confetti.forEach(c => {
            ctx.beginPath();
            ctx.fillStyle = c.color;
            ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
            ctx.fill();
        });

        update();
        requestAnimationFrame(draw);
    }

    function update() {
        confetti.forEach(c => {
            c.y += c.d * 3;
            if (c.y > canvas.height) {
                c.y = -10;
                c.x = Math.random() * canvas.width;
            }
        });
    }

    draw();
}

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});