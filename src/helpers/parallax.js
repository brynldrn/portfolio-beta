const parallax = (selector, speed = 0.4) => {
  window.addEventListener('scroll', (e) => {
    let scrolled = window.pageYOffset;
    const bg = document.querySelector(selector);
    bg.style.top = `-${ scrolled * speed }px`;
  })
}

export default parallax;