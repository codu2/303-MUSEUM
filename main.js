const first_page = document.querySelector('.first-page');
const main_page = document.querySelector('.main-page');
const getin_button = document.querySelector('.getin-button');
const toggle = document.querySelector('.toggle');
const tabs_1 = document.querySelectorAll('.tab-1');
const tabs_2 = document.querySelectorAll('.tab-2');
const detail_button = document.querySelector('.detail-button');
const main_content = document.querySelector('.main-content');
const sub_content = document.querySelector('.sub-content');
const previous_button = document.querySelector('.previous-button');
const event_button = document.querySelector('.event-button');
const event_close = document.querySelector('.event-close');
const event_up = document.querySelector('.display .desc a');
const tab_content1 = document.querySelectorAll('.tab-content');
const artist_contents = document.querySelectorAll('.artist-content-box');

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

function removeTabs1() {
    tabs_1.forEach((e) => {
        e.classList.remove('active');
    })
}

tabs_1.forEach((e) => {
    e.addEventListener('click', () => {
        removeTabs1();
        e.classList.add('active');
        if(e.classList.contains('active')) {
            for(let i = 0; i < tabs_1.length; i++) {
                if(e.id === tab_content1[i].id) {
                    tab_content1[i].classList.add('show');
                } else {
                    tab_content1[i].classList.remove('show');
                }
            }
        }
    })
})

function removeTabs2() {
    tabs_2.forEach((e) => {
        e.classList.remove('active');
    })
}

tabs_2.forEach((e) => {
    e.addEventListener('click', () => {
        removeTabs2();
        e.classList.add('active');
        if(e.classList.contains('active')) {
            for(let i = 0; i < tabs_2.length; i++) {
                if(e.id === artist_contents[i].id) {
                    artist_contents[i].classList.add('show');
                } else {
                    artist_contents[i].classList.remove('show');
                }
            }
        }
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

event_button.addEventListener('click', (e) => {
    //console.log(e.target)
    e.target.parentElement.classList.add('active');
})

event_close.addEventListener('click', (e) => {
    //console.log(e.target.parentElement)
    e.target.parentElement.parentElement.classList.remove('active');
})

if(event_close.parentElement.classList.contains('active')) {
    event_close.addEventListener('click', (e) => {
        e.target.parentElement.classList.add('active');
    })
} else {
    event_close.addEventListener('click', (e) => {
        e.target.parentElement.parentElement.style.display = 'none';
    })
}

event_up.addEventListener('click', () => {
    event_button.parentElement.style.display = 'block';
})
