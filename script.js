const romanticGif = document.getElementById("romanticGif");
const question = document.getElementById("question");
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const finalContent = document.getElementById("finalContent");
const backgroundMusic = document.getElementById("backgroundMusic");

let noButtonTexts = [
  "Are you sure?",
  "Really sure?",
  "Think again!",
  "Last chance!",
  "Surely not?",
  "You sure you don't wanna rethink?",
  "Give it another thought!",
  "Are you absolutely certain?",
  "I'm not taking NO for an answer!",
  "I know you wanna click YES!",
  "Wrong button!",
  "Change of heart?",
  "Wouldn't you reconsider?",
  "Is that your final answer?",
  "You're breaking my heart ;(",
];
let noButtonClickCount = 0;

noButton.addEventListener("click", () => {
  noButtonClickCount++;
  yesButton.style.transform = `scale(${1 + noButtonClickCount * 0.2})`;
  noButton.textContent =
    noButtonTexts[noButtonClickCount % noButtonTexts.length];
});

yesButton.addEventListener("click", () => {
  romanticGif.src =
    "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif";
  question.classList.add("hidden");
  yesButton.classList.add("hidden");
  noButton.classList.add("hidden");
  finalContent.classList.remove("hidden");
  backgroundMusic.play();
});

function celebrate() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
  document.getElementById("message").innerHTML =
    "You just made my heart dance! Can’t wait for our special Valentine’s Day! ❤️";
}

function updateCountdown() {
  let eventDate = new Date("February 14, 2025 00:00:00").getTime();
  let now = new Date().getTime();
  let timeLeft = eventDate - now;

  let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById(
    "countdown"
  ).innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

//   let herName = "Your Babe's Name"; // Change this
// document.getElementById("message").innerHTML = ⁠ Yay, ${herName}! You just made my Valentine’s dream come true! 💖 ⁠;

setInterval(updateCountdown, 1000);
updateCountdown();

function showHearts() {
  for (let i = 0; i < 10; i++) {
    let heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.animationDuration = Math.random() * 2 + 2 + "s";
    document.body.appendChild(heart);
    setTimeout(() => {
      heart.remove();
    }, 3000);
  }
  document.getElementById("message").innerHTML =
    "You said YES! My heart is floating with joy! 💕";
}
