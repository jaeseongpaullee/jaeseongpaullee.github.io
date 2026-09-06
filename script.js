document.documentElement.classList.add("js");


/* =========================================================
   이미지가 아직 없을 때 깨진 이미지 아이콘을 숨깁니다.
   나중에 images 폴더에 이미지를 넣으면 자동으로 나타납니다.
   ========================================================= */

const portfolioImages =
  document.querySelectorAll(".image-frame img");


portfolioImages.forEach((img) => {

  const frame =
    img.closest(".image-frame");


  const showFallback = () => {

    if (frame) {
      frame.classList.add("is-missing");
    }

    img.style.display = "none";

  };


  if (
    img.complete &&
    img.naturalWidth === 0
  ) {

    showFallback();

  } else {

    img.addEventListener(
      "error",
      showFallback
    );

  }

});


/* =========================================================
   스크롤할 때 요소가 부드럽게 나타나는 효과
   ========================================================= */

const revealItems =
  document.querySelectorAll(".reveal");


if (
  "IntersectionObserver" in window
) {

  const observer =
    new IntersectionObserver(

      (entries) => {

        entries.forEach(
          (entry) => {

            if (
              entry.isIntersecting
            ) {

              entry.target
                .classList
                .add("is-visible");

              observer.unobserve(
                entry.target
              );

            }

          }
        );

      },

      {
        threshold: 0.08
      }

    );


  revealItems.forEach(
    (item) => {

      observer.observe(item);

    }
  );

} else {

  revealItems.forEach(
    (item) => {

      item.classList.add(
        "is-visible"
      );

    }
  );

}
