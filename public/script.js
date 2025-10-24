ScrollReveal().reveal('.headline', {
  duration: 1000,
  distance: '50px',
  origin: 'bottom',
  easing: 'ease-in-out',
  reset: true
});
ScrollReveal().reveal('.revealLeft', {
  duration: 750,
  distance: '50px',
  origin: 'left',
  easing: 'ease-in-out',
  reset: true
});
ScrollReveal().reveal('.revealRight', {
  duration: 750,
  distance: '50px',
  origin: 'right',
  easing: 'ease-in-out',
  reset: true
});
document.querySelectorAll('.faq-question').forEach((question) => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const icon = question.querySelector('.faq-icon');
      document.querySelectorAll('.faq-answer').forEach((el) => {
        if (el !== answer) {
          el.style.maxHeight = null;
          el.previousElementSibling.querySelector('.faq-icon').style.transform = 'rotate(0deg)';
        }
      });
      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
        icon.style.transform = 'rotate(0deg)';
      } else {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        icon.style.transform = 'rotate(45deg)';
      }
    });
  });

