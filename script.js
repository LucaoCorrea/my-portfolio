      const themeToggle = document.getElementById("theme-toggle");
      const body = document.body;
      const fadeClass = "fade";

      function setTheme(theme) {
        body.classList.add(fadeClass);
        setTimeout(() => {
          body.classList.remove("dark", "light");
          body.classList.add(theme);
          themeToggle.className =
            theme === "dark"
              ? "fas fa-moon theme-icon"
              : "fas fa-sun theme-icon";
          localStorage.setItem("theme", theme);
          body.classList.remove(fadeClass);
        }, 300);
      }

      themeToggle.addEventListener("click", () => {
        const currentTheme = body.classList.contains("dark") ? "dark" : "light";
        setTheme(currentTheme === "dark" ? "light" : "dark");
      });

      const savedTheme = localStorage.getItem("theme") || "dark";
      setTheme(savedTheme);

      function toggleLang(lang) {
        document.querySelectorAll("[data-pt]").forEach((el) => {
          el.innerText =
            lang === "pt"
              ? el.getAttribute("data-pt")
              : el.getAttribute("data-en");
        });
        const flag = document.getElementById("flag-current");
        if (lang === "pt") {
          flag.src = "./assets/brazil-.png";
          flag.alt = "Português";
        } else {
          flag.src = "https://cdn-icons-png.flaticon.com/512/323/323310.png";
          flag.alt = "English";
        }
        localStorage.setItem("lang", lang);
      }

      const savedLang = localStorage.getItem("lang") || "pt";
      toggleLang(savedLang);

      particlesJS("particles-js", {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: "#00bfff" },
          shape: { type: "circle" },
          opacity: { value: 0.1, random: true },
          size: { value: 3, random: true },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#00bfff",
            opacity: 0.2,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            bounce: false,
            attract: { enable: false },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            grab: { distance: 200, line_linked: { opacity: 0.3 } },
            push: { particles_nb: 4 },
          },
        },
        retina_detect: true,
      });