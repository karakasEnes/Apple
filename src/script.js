function slideShowDivs() {
  const slideShowEl = document.querySelector('.slideshow');
  for (let i = 0; i < 5; i++) {
    const emptyDiv = document.createElement('div');

    emptyDiv.style.backgroundImage = `url(images/slideshow/section-1-bg-${
      i + 1
    }.jpg)`;

    i === 0 && emptyDiv.classList.add('change');
    slideShowEl.appendChild(emptyDiv);
  }
}

function infiniteBackgroundSlide() {
  let c = 0;

  const images = document.querySelectorAll('.slideshow div');

  setInterval(() => {
    c++;

    const changeEl = document.querySelector('.slideshow div.change');
    changeEl.classList.remove('change');

    if (c < images.length) {
      changeEl.nextElementSibling.classList.add('change');
    } else {
      images[0].classList.add('change');
      c = 0;
    }
  }, 20000);
}

slideShowDivs();
infiniteBackgroundSlide();
