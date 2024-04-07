const heroParallax = () => {
  const title = document.querySelector('.hero__title');
  const image = document.querySelector('.image');
  const hero = document.querySelector('.hero__image');

  const moveTitle = () => {
    title && (title.style.transform = `translateY(${Math.floor(-scrollY * 0.1)}px)`);
  };

  const parallaxImage = () => {
    image && (image.style.transform = `translateY(${Math.floor(scrollY * 0.1)}px)`);
  };

  const handleScroll = () => {
    moveTitle();
    parallaxImage();
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.addEventListener('scroll', handleScroll);
      } else {
        document.removeEventListener('scroll', handleScroll);
      }
    });
  });

  observer.observe(hero);
};

const buttonAnimation = () => {
  const button = document.querySelector('.button');
  const dot = document.querySelector('.button__cursor');
  const dotSize = 80;

  const buttonTop = button.getBoundingClientRect().top;
  const buttonLeft = button.getBoundingClientRect().left;

  const animation = () => {
    button.addEventListener('mousemove', (e) => {
      dot.style.transform = `translate(${e.clientX - buttonLeft - dotSize / 2}px, ${e.clientY - buttonTop - dotSize / 2}px) scale(2)`;
    });
    button.addEventListener('mouseout', (e) => {
      dot.style.transform = `translate(${e.clientX - buttonLeft - dotSize / 2}px, ${e.clientY - buttonTop - dotSize / 2}px) scale(1)`;
    });
    requestAnimationFrame(animation);
  };
  dot && button && requestAnimationFrame(animation);
};

document.addEventListener('DOMContentLoaded', () => {
  heroParallax();
  buttonAnimation();
});
