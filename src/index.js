import './styles.css';

const navBtn = document.querySelector('.navBtn');
const navDropDown = document.querySelector('.dropDown');

function displayMenu() {
  navBtn.addEventListener('click', () => {
    navDropDown.classList.toggle('display');
  });
}

displayMenu();
