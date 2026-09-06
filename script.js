const projects =
  document.querySelectorAll(
    ".index-project[data-image]"
  );

const preview =
  document.getElementById(
    "projectPreview"
  );

const previewImage =
  document.getElementById(
    "previewImage"
  );


projects.forEach((project) => {

  project.addEventListener(
    "mouseenter",
    () => {

      const image =
        project.dataset.image;

      previewImage.src = image;

      preview.classList.add(
        "visible"
      );

    }
  );


  project.addEventListener(
    "mouseleave",
    () => {

      preview.classList.remove(
        "visible"
      );

    }
  );

});
