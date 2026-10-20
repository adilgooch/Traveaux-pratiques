
    // 7. Le chronomètre démarre quand la page est chargée.
    const clock = document.getElementById("clock");
    const start = Date.now();

    function twoDigits(number) {
      if (number < 10) {
        return "0" + number;
      }
      return number;
    }

    setInterval(function () {
      const secondsPassed = Math.floor((Date.now() - start) / 1000);
      const hours = Math.floor(secondsPassed / 3600);
      const minutes = Math.floor((secondsPassed % 3600) / 60);
      const seconds = secondsPassed % 60;
      clock.textContent = twoDigits(hours) + ":" + twoDigits(minutes) + ":" + twoDigits(seconds);
    }, 1000);

    // 8. La classe change quand la souris entre ou sort du bloc.
    const box = document.getElementById("box");

    box.addEventListener("mouseenter", function () {
      box.classList.add("hovered");
    });

    box.addEventListener("mouseleave", function () {
      box.classList.remove("hovered");
    });

    // 9. Ajouter, terminer ou supprimer une tâche.
    const taskInput = document.getElementById("taskInput");
    const tasks = document.getElementById("tasks");

    function addOneTask() {
      const taskText = taskInput.value.trim();
      if (taskText === "") {
        return;
      }

      const item = document.createElement("li");
      const text = document.createElement("span");
      text.textContent = taskText;

      const doneButton = document.createElement("button");
      doneButton.textContent = "Fait";
      doneButton.addEventListener("click", function () {
        item.classList.toggle("done");
      });

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Supprimer";
      deleteButton.className = "delete";
      deleteButton.addEventListener("click", function () {
        item.remove();
      });

      item.appendChild(text);
      item.appendChild(doneButton);
      item.appendChild(deleteButton);
      tasks.appendChild(item);
      taskInput.value = "";
      taskInput.focus();
    }

    document.getElementById("addTask").addEventListener("click", addOneTask);
    taskInput.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        addOneTask();
      }
    });
