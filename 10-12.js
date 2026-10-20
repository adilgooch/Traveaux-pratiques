// 10. Ouvrir et fermer la modale.
    const modal = document.getElementById("modal");

    document.getElementById("open").addEventListener("click", function () {
      modal.hidden = false;
    });

    document.getElementById("close").addEventListener("click", function () {
      modal.hidden = true;
    });

    modal.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.hidden = true;
      }
    });

    // 11. Montrer seulement les produits qui correspondent à la recherche.
    const search = document.getElementById("search");
    const products = document.querySelectorAll("#products li");

    search.addEventListener("input", function () {
      const typedText = search.value.toLowerCase();

      products.forEach(function (product) {
        const productName = product.textContent.toLowerCase();
        if (productName.includes(typedText)) {
          product.hidden = false;
        } else {
          product.hidden = true;
        }
      });
    });

    // 12. Ajouter la classe "small" quand la fenêtre est étroite.
    const layout = document.getElementById("layout");
    const screenInfo = document.getElementById("screenInfo");

    function changeLayout() {
      if (window.innerWidth < 600) {
        layout.classList.add("small");
        screenInfo.textContent = "Écran étroit : les blocs sont empilés.";
      } else {
        layout.classList.remove("small");
        screenInfo.textContent = "Écran large : les blocs sont côte à côte.";
      }
    }
    window.addEventListener("resize", changeLayout);
    changeLayout();