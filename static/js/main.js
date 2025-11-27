// small enhancements: smooth scroll and simple interaction
document.addEventListener('DOMContentLoaded', function () {
  // Smooth scroll for nav anchors
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({behavior: 'smooth', block: 'start'});
    });
  });
});
document.addEventListener("DOMContentLoaded", function() {
    const texts = ["Full Stack Web Developer", "Software Developer", "Designer"];
    let count = 0;
    let index = 0;
    let currentText = "";
    let letter = "";
    const typingElement = document.getElementById("typing");

    function type() {
        if (count === texts.length) {
            count = 0;
        }

        currentText = texts[count];
        letter = currentText.slice(0, ++index);

        typingElement.textContent = letter;

        if (letter.length === currentText.length) {
            setTimeout(() => {
                erase();
            }, 1000);
        } else {
            setTimeout(type, 120);
        }
    }

    function erase() {
        letter = currentText.slice(0, --index);
        typingElement.textContent = letter;

        if (letter.length === 0) {
            count++;
            setTimeout(type, 400);
        } else {
            setTimeout(erase, 60);
        }
    }

    type();
});
const modal = document.getElementById("skill-modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");

document.querySelectorAll(".skill-item").forEach(item => {
  item.addEventListener("click", () => {
    const name = item.getAttribute("data-name");
    const desc = item.getAttribute("data-desc");
    const imgSrc = item.querySelector("img").src;

    modalImg.src = imgSrc;
    modalTitle.textContent = name;
    modalDesc.textContent = desc;

    modal.style.display = "flex";
  });
});

// Close popup when clicking outside content
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
