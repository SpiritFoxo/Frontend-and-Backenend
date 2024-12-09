

const paragraph = document.getElementById('animatedParagraph');
  paragraph.addEventListener('click', () => {
    paragraph.style.transition = 'background-color 0.5s ease';
    paragraph.style.backgroundColor =
      paragraph.style.backgroundColor === 'lightblue' ? 'white' : 'lightblue';
  });


const button = document.getElementById('showLecturesBtn');
  const table = document.getElementById('lectureTable');
  button.addEventListener('click', () => {
    table.classList.toggle('show');
  });




const form = document.getElementById('studentForm');
  const message = document.getElementById('formMessage');
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Предотвращаем стандартное поведение
    message.classList.add('show');
  });