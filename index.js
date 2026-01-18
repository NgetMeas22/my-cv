
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  reveals.forEach(el => observer.observe(el));

  const texts = ["I'm Nget Meas", "Frontend Developer", "Welcome to my CV"];
  const typingSpeed = 100; // ms per letter
  const pause = 1500; // pause after each text
  let textIndex = 0;
  let charIndex = 0;
  const element = document.getElementById("auto-typing");

  function type() {
    if (charIndex < texts[textIndex].length) {
      element.innerHTML += texts[textIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(erase, pause);
    }
  }

  function erase() {
    if (charIndex > 0) {
      element.innerHTML = texts[textIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, typingSpeed / 2);
    } else {
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(type, typingSpeed);
    }
  }

  window.onload = type;