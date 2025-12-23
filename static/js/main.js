document.addEventListener("DOMContentLoaded", function () {

  /* ================================
     SKILL TOOLTIP (HOVER)
  ================================= */
  document.querySelectorAll(".skill-item").forEach(skill => {

    // Prevent duplicate tooltip
    if (skill.querySelector(".skill-tooltip")) return;

    const tooltip = document.createElement("div");
    tooltip.className = "skill-tooltip";

    tooltip.innerHTML = `
      <h4>${skill.dataset.name}</h4>
      <p>${skill.dataset.desc}</p>
    `;

    skill.appendChild(tooltip);
  });


  /* ================================
     SKILL MODAL (CLICK)
  ================================= */
  const modal = document.getElementById("skill-modal");
  const modalImg = document.getElementById("modal-img");
  const modalTitle = document.getElementById("modal-title");
  const modalDesc = document.getElementById("modal-desc");

  document.querySelectorAll(".skill-item").forEach(item => {
    item.addEventListener("click", function (e) {
      e.stopPropagation();

      modalImg.src = item.querySelector("img").src;
      modalTitle.textContent = item.dataset.name;
      modalDesc.textContent = item.dataset.desc;

      modal.style.display = "flex";
    });
  });

  if (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  }


  /* ================================
     SMOOTH SCROLL
  ================================= */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });


  /* ================================
     TYPING ANIMATION (RESTORED)
  ================================= */
  const texts = [
    "Full Stack Web Developer",
    "Software Developer",
    "Designer"
  ];

  let textIndex = 0;
  let charIndex = 0;
  const typingElement = document.getElementById("typing");

  function typeText() {
    if (!typingElement) return;

    if (charIndex < texts[textIndex].length) {
      typingElement.textContent += texts[textIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeText, 120);
    } else {
      setTimeout(eraseText, 1000);
    }
  }

  function eraseText() {
    if (charIndex > 0) {
      typingElement.textContent =
        texts[textIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseText, 60);
    } else {
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(typeText, 400);
    }
  }

  typeText();
});

/* ================================
   CONTACT FORM 
================================= */
document.addEventListener("DOMContentLoaded", function () {

  const contactForm = document.getElementById("contact-form");
  const successMsg = document.getElementById("form-success");

  if (!contactForm) return;

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const messageData = {
      name: this.name.value,
      email: this.email.value,
      message: this.message.value,
      time: new Date().toLocaleString()
    };

    // Store message in localStorage
    localStorage.setItem("contactMessage", JSON.stringify(messageData));

    successMsg.style.display = "block";
    contactForm.reset();
  });

});

