// 13. Ajouter 10 % à chaque clic.
    let progress = 0;
    const fill = document.getElementById("fill");
    const percent = document.getElementById("percent");

    document.getElementById("advance").addEventListener("click", function () {
      if (progress < 100) {
        progress = progress + 10;
      }

      fill.style.width = progress + "%";
      percent.textContent = progress + " %";
    });

    // 14. Déplacer l'élément vers la zone où il est déposé.
    const item = document.getElementById("item");
    const zones = document.querySelectorAll(".zone");

    item.addEventListener("dragstart", function (event) {
      event.dataTransfer.setData("text", item.id);
    });

    zones.forEach(function (zone) {
      zone.addEventListener("dragover", function (event) {
        event.preventDefault();
      });

      zone.addEventListener("drop", function (event) {
        event.preventDefault();
        const itemId = event.dataTransfer.getData("text");
        zone.appendChild(document.getElementById(itemId));
      });
    });

    // 15. Charger puis mémoriser le thème choisi.
    const themeBtn = document.getElementById("themeBtn");

    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark");
    }

    themeBtn.addEventListener("click", function () {
      const isDark = document.body.classList.toggle("dark");

      if (isDark) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    });