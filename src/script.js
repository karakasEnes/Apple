//global VARS
const cube = document.querySelector('.cube');
let y = 20;
let x = 0;
let z = 0;
let interval;
let boolVar = true;

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

// workin on cube

function playPauseCube() {
  if (boolVar) {
    interval = setInterval(() => {
      cube.style.transform = `rotateX(${x}deg) rotateY(${y++}deg) rotateZ(${z}deg)`;
    }, 100);
  } else {
    clearInterval(interval);
  }
}

function allControls() {
  //top
  document.querySelector('.top-x-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${(x += 20)}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
  });

  //bttm
  document.querySelector('.bottom-x-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${(x -= 20)}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
  });

  //left
  document.querySelector('.left-y-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${(y -= 20)}deg) rotateZ(${z}deg)`;
  });

  document.querySelector('.right-y-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${(y += 20)}deg) rotateZ(${z}deg) `;
  });

  document.querySelector('.top-z-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${(z -= 20)}deg) `;
  });

  document.querySelector('.bottom-z-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${(z += 20)}deg) `;
  });
}

function hoverOnCube() {
  document.querySelector('.controls').addEventListener('mouseover', () => {
    boolVar = false;
    playPauseCube();
  });

  document.querySelector('.controls').addEventListener('mouseout', () => {
    boolVar = true;
    playPauseCube();
  });
}

// slideShowDivs();
// infiniteBackgroundSlide();

// allControls();
// playPauseCube();
// hoverOnCube();
