const first_page = document.querySelector('.first-page');
const main_page = document.querySelector('.main-page');
const getin_button = document.querySelector('.getin-button');
const toggle = document.querySelector('.toggle');
const tabs = document.querySelectorAll('.tab');
const detail_button = document.querySelector('.detail-button');
const main_content = document.querySelector('.main-content');
const sub_content = document.querySelector('.sub-content');
const previous_button = document.querySelector('.previous-button');

getin_button.addEventListener('click', () => {
    first_page.classList.toggle('active');
    main_page.classList.toggle('active');
    main_content.classList.toggle('active');
})

toggle.addEventListener('click', () => {
    first_page.classList.toggle('active');
    main_page.classList.toggle('active');
    main_content.classList.toggle('active');
})

function removeTabs() {
    tabs.forEach((e) => {
        e.classList.remove('active');
    })
}

tabs.forEach((e) => {
    e.addEventListener('click', () => {
        removeTabs();
        e.classList.toggle('active');
    })
})

detail_button.addEventListener('click', () => {
    main_content.classList.toggle('active');
    sub_content.classList.toggle('active');
})

previous_button.addEventListener('click', () => {
    main_content.classList.toggle('active');
    sub_content.classList.toggle('active');
})