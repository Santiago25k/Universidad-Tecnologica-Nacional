export const acordeon = () => {
    document.querySelectorAll(".accordion-header").forEach((button) => {
        button.addEventListener("click", () => {
          // Cierra todos los contenidos abiertos excepto el clicado
          document.querySelectorAll(".accordion-content").forEach((content) => {
            if (content !== button.nextElementSibling) {
              // Cierra el contenido con una transición suave
              content.style.maxHeight = null;
              content.previousElementSibling.querySelector(
                ".plus"
              ).textContent = "+";
              // Remueve la clase 'open' de otros botones
              content.previousElementSibling.classList.remove("open");
            }
          });

          // Alterna el contenido del módulo clicado
          const content = button.nextElementSibling;
          const isOpen = content.style.maxHeight;

          if (isOpen) {
            // Si está abierto, cierra el acordeón
            content.style.maxHeight = null;
            button.querySelector(".plus").textContent = "+";
            // Remueve la clase 'open' para que no rote cuando se cierra
            button.classList.remove("open");
          } else {
            // Si está cerrado, abre el acordeón
            content.style.maxHeight = content.scrollHeight + "px"; // Se ajusta al contenido
            button.querySelector(".plus").textContent = "-";
            // Añade la clase 'open' para aplicar la rotación al abrir
            button.classList.add("open");
          }
        });
      });

  };
  