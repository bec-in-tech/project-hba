document.addEventListener("DOMContentLoaded", () => {

  const pika = document.querySelector(".pika");
  const balloons = document.querySelectorAll(".balloon");
  const confettiBox = document.getElementById("confetti-behind");
  const birthdayText = document.getElementById("birthday-text");
  const sound = document.getElementById("pikachu-sound"); // audio element

  let released = false;

  function burstConfetti() {
    const amount = 40;

    for (let i = 0; i < amount; i++) {
      const piece = document.createElement("div");
      piece.classList.add("confetti");

      piece.style.backgroundColor = `hsl(${Math.random() * 360}, 90%, 60%)`;

      const angle = Math.random() * Math.PI * 2;
      const distance = 10 + Math.random() * 10;

      const x = Math.cos(angle) * distance + "rem";
      const y = Math.sin(angle) * distance + "rem";

      piece.style.setProperty("--x", x);
      piece.style.setProperty("--y", y);

      piece.style.left = "50%";
      piece.style.top = "50%";
      piece.style.transform = "translate(-50%, -50%)";

      confettiBox.appendChild(piece);

      setTimeout(() => piece.remove(), 1200);
    }
  }

  pika.addEventListener("click", () => {

    if (!released) {
      balloons.forEach(balloon => balloon.classList.add("released"));
      burstConfetti();

      // play the sound
      sound.currentTime = 0; // restart if clicked multiple times
      sound.play();

      setTimeout(() => {
        birthdayText.classList.add("show");
      }, 800);

      released = true;

    } else {
      balloons.forEach(balloon => balloon.classList.remove("released"));
      confettiBox.innerHTML = "";
      birthdayText.classList.remove("show");
      released = false;
    }
  });
});
