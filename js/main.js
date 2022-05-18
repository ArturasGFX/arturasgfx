const dovydaiLink = document.getElementById("dovydai-link");
if (dovydaiLink) {
  dovydaiLink.addEventListener("click", (e) => {
    e.preventDefault();
    var url = "https://www.facebook.com/dovydas.psemeneckas";
    window.open(url, "_blank");
  });
}

const spauskLinks = document.getElementsByClassName("spausk-page-link");

for (const link of spauskLinks) {
  link.addEventListener("click", (event) => {
    let spauskAmount = localStorage.getItem("spauskAmount");

    if (spauskAmount) {
      spauskAmount = parseInt(spauskAmount);
      spauskAmount++;
    }

    localStorage.setItem("spauskAmount", spauskAmount || 1);

    if (spauskAmount >= 8) {
      localStorage.setItem("spauskAmount", 1);
      event.preventDefault();
      window.location.href = "./contact.html";
    }
  });
}

const startAnimationButton = document.getElementById("start-animation-button");
if (startAnimationButton) {
  startAnimationButton.addEventListener("click", () => {
    if (startConfetti) {
      startConfetti();
    }

    const confettiCanvas = document.getElementById("confetti-canvas");
    confettiCanvas.remove();

    const sectionContact = document.getElementById("section-contact");
    sectionContact.appendChild(confettiCanvas);

    var happyBirthDaySong = document.getElementById("happy-birthday-song");
    if (happyBirthDaySong) happyBirthDaySong.play();
  });
}
