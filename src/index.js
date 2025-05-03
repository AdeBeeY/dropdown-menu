import "./styles.css";

const toggleViewTask = document.querySelector('.view-tasks-btn');
const menuItems = document.querySelector('.js-menu-item');
const toggleViewTask2 = document.querySelector('.view-tasks-btn2');
const menuItems2 = document.querySelector('.js-menu-item2');

function toggleMenu(menuClassName, className) {
  menuClassName.classList.toggle(className);

  if (menuClassName.classList.contains(className)) {
    menuClassName.style = 'display: none';
  } else {
    menuClassName.style = 'display: block';
  }
}

toggleViewTask.addEventListener('click' , () => {
  toggleMenu(menuItems, 'hide')
})

toggleViewTask2.addEventListener('click' , () => {
  toggleMenu(menuItems2, 'hidden')
})
