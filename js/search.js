//клик по кнопке поиск
const searchForm = document.querySelector('.search');
const searchBtn = document.querySelector('.search__button');

searchBtn.addEventListener('click', function (e) {
    if (!searchForm.classList.contains('search--visible')) {
        e.preventDefault();
        searchForm.classList.toggle('search--visible');
    }
});