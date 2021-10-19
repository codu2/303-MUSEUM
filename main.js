const first_page = document.querySelector('.first-page');
const main_page = document.querySelector('.main-page');
const getin_button = document.querySelector('.getin-button');
const toggle = document.querySelector('.toggle');

const main_content = document.querySelector('.main-content');
const sub_content = document.querySelector('.sub-content');
const previous_button = document.querySelector('.previous-button');
const event_button = document.querySelector('.event-button');
const event_close = document.querySelector('.event-close');
const event_up = document.querySelector('.display .desc a');
const painting_content = document.querySelector('.painting-content');
const artist_content = document.querySelector('.artist-content');

const painting_tab = document.querySelector('.painting-box');
const previous_tab = document.querySelector('.previous-tab');
const next_tab = document.querySelector('.next-tab');
const artist_tab = document.querySelector('.artist-box');
const previous_tab2 = document.querySelector('.previous-tab2');
const next_tab2 = document.querySelector('.next-tab2');

previous_tab.addEventListener('click', () => {
    painting_tab.classList.add('move');
})

next_tab.addEventListener('click', () => {
    painting_tab.classList.remove('move');
})

previous_tab2.addEventListener('click', () => {
    artist_tab.classList.add('move');
})

next_tab2.addEventListener('click', () => {
    artist_tab.classList.remove('move');
})

const paintings = [
    {
        art: 'realism',
        paint1: 'img/courbet1.jpeg',
        paint2: 'img/millet1.jpeg',
        paint3: 'img/gogh4.jpeg',
        paint4: 'img/isaak1.jpeg',
        title1: "The Painter's Studio",
        title2: 'The Gleaners',
        title3: 'The potato eaters',
        title4: 'The Silent Monastery',
        year1: '1844~1845',
        year2: '1857',
        year3: '1885',
        year4: '1890',
        artist1: 'Gustave Courbet',
        artist2: 'Jean-François Millet',
        artist3: 'Vincent van Gogh',
        artist4: 'Isaak Levitan Tihaya',
    },
    {
        art: 'impressionism',
        paint1: 'img/monet1.jpeg',
        paint2: 'img/renoir4.jpeg',
        paint3: 'img/serov1.jpeg',
        paint4: 'img/pissarro1.jpeg',
        title1: 'Woman with a Parasol',
        title2: 'Portrait of Jeanne Samary',
        title3: 'The girl with peaches',
        title4: 'The Boulevard Montmartre at Night',
        year1: '1875',
        year2: '1877',
        year3: '1887',
        year4: '1897',
        artist1: 'Oscar-Claude Monet',
        artist2: 'Pierre-Auguste Renoir',
        artist3: 'Valentin Aleksandrovich Serov',
        artist4: 'Camille Pissarro',
    },
    {
        art: 'surrealisme',
        paint1: 'img/ernst1.jpeg',
        paint2: 'img/miro1.jpeg',
        paint3: 'img/dali1.jpeg',
        paint4: 'img/magritte1.jpeg',
        title1: 'The Elephant Celebes',
        title2: 'Catalan Landscape (The Hunter)',
        title3: 'The Persistence of Memory',
        title4: 'The Son of Man',
        year1: '1921',
        year2: '1923',
        year3: '1931',
        year4: '1964',
        artist1: 'Max Ernst',
        artist2: 'Joan Miró',
        artist3: 'Salvador Dalí',
        artist4: 'René Magritte',
    },
    {
        art: 'expressionism',
        paint1: 'img/munch1.jpeg',
        paint2: 'img/marc1.jpeg',
        paint3: 'img/kandinsky1.jpeg',
        paint4: 'img/klee1.jpeg',
        title1: 'Evening on Karl Johan Street',
        title2: 'Blue Horse I',
        title3: 'Small Worlds',
        title4: 'Castle and Sun',
        year1: '1892',
        year2: '1911',
        year3: '1922',
        year4: '1928',
        artist1: 'Edvard Munch',
        artist2: 'Franz Marc',
        artist3: 'Vasily Kandinsky',
        artist4: 'Paul Klee',
    },
    {
        art: 'abstract-art',
        paint1: 'img/doesburg1.jpeg',
        paint2: 'img/klee2.jpeg',
        paint3: 'img/pauljackson1.jpeg',
        paint4: 'img/twombly1.jpeg',
        title1: 'Composition VII (The Three Graces)',
        title2: 'Senecio',
        title3: 'Number 5',
        title4: 'Leda and the Swan',
        year1: '1917',
        year2: '1922',
        year3: '1948',
        year4: '1962',
        artist1: 'Theo van Doesburg',
        artist2: 'Paul Klee',
        artist3: 'Paul Jackson Pollock',
        artist4: 'Edwin Parker "Cy" Twombly, Jr',
    }
]

for(let i = 1; i < paintings.length; i++) {
    let painting = `
                    <div class="tab-content tab${i+1}" id="${paintings[i].art}">
                        <div class="content">
                            <img src="${paintings[i].paint1}" alt="">
                            <p>${paintings[i].title1} <span>(${paintings[i].year1})</span><br>${paintings[i].artist1}</p>
                        </div>
                        <div class="content">
                            <img src="${paintings[i].paint2}" alt="">
                            <p>${paintings[i].title2} <span>(${paintings[i].year2})</span><br>${paintings[i].artist2}</p>
                        </div>
                        <div class="content">
                            <img src="${paintings[i].paint3}" alt="">
                            <p>${paintings[i].title3} <span>(${paintings[i].year3})</span><br>${paintings[i].artist3}</p>
                        </div>
                        <div class="content">
                            <img src="${paintings[i].paint4}" alt="">
                            <p>${paintings[i].title4} <span>(${paintings[i].year4})</span><br>${paintings[i].artist4}</p>
                        </div>
                    </div>
    `;
    painting_content.insertAdjacentHTML('beforebegin', painting);
}

const artists = [
    {
        artist: 'Édouard Manet',
        nickname: 'manet',
        main_img: 'img/manet.jpeg',
        desc: 'He was a French modernist painter. He was one of the first 19th-century artists to paint modern life, and a pivotal figure in the transition from Realism to Impressionism.',
        sub_img1: 'img/manet1.jpeg',
        sub_img2: 'img/manet2.jpeg',
        sub_img3: 'img/manet3.jpeg',
    },
    {
        artist: 'Pierre-Auguste Renoir',
        nickname: 'renoir',
        main_img: 'img/renoir.jpeg',
        desc: 'He was a French artist who was a leading painter in the development of the Impressionist style. As a celebrator of beauty and especially feminine sensuality, it has been said that "Renoir is the final representative of a tradition which runs directly from Rubens to Watteau.',
        sub_img1: 'img/renoir1.jpeg',
        sub_img2: 'img/renoir2.jpeg',
        sub_img3: 'img/renoir3.jpeg',
    },
    {
        artist: 'Oscar-Claude Monet',
        nickname: 'monet',
        main_img: 'img/monet.jpeg',
        desc: 'He was a French painter and founder of impressionist painting who is seen as a key precursor to modernism, especially in his attempts to paint nature as he perceived it.',
        sub_img1: 'img/monet1.jpeg',
        sub_img2: 'img/monet2.jpeg',
        sub_img3: 'img/monet3.jpeg',
    },
    {
        artist: 'Vincent van Gogh',
        nickname: 'gogh',
        main_img: 'img/gogh.jpeg',
        desc: 'He was a Dutch Post-Impressionist painter who posthumously became one of the most famous and influential figures in Western art history. His artworks are characterised by bold colours and dramatic, impulsive and expressive brushwork that contributed to the foundations of modern art.',
        sub_img1: 'img/gogh1.jpeg',
        sub_img2: 'img/gogh2.jpeg',
        sub_img3: 'img/gogh3.jpeg',
    },
    {
        artist: 'Pablo Ruiz Picasso',
        nickname: 'picasso',
        main_img: 'img/picasso.jpeg',
        desc: 'He was a Spanish painter, sculptor, printmaker, ceramicist and theatre designer who spent most of his adult life in France. Regarded as one of the most influential artists of the 20th century, he is known for co-founding the Cubist movement, the invention of constructed sculpture, the co-invention of collage, and for the wide variety of styles that he helped develop and explore.',
        sub_img1: 'img/picasso1.jpeg',
        sub_img2: 'img/picasso2.jpeg',
        sub_img3: 'img/picasso3.jpeg',
    },
    {
        artist: 'Piet Mondrian',
        nickname: 'mondrian',
        main_img: 'img/mondrian.jpeg',
        desc: 'He was a Dutch painter and art theoretician who is regarded as one of the greatest artists of the 20th century. He is known for being one of the pioneers of 20th-century abstract art, as he changed his artistic direction from figurative painting to an increasingly abstract style, until he reached a point where his artistic vocabulary was reduced to simple geometric elements.',
        sub_img1: 'img/mondrian1.jpeg',
        sub_img2: 'img/mondrian2.jpeg',
        sub_img3: 'img/mondrian3.jpeg',
    },
]

//artist_content.innerHTML = '';

for(let i = 1; i < artists.length; i++) {
    let artist = `
            <div class="artist-content-box" id="${artists[i].nickname}">
                <div class="artist-photo">
                    <img src="${artists[i].main_img}" alt="">
                </div>
                <div class="artist-desc">
                    <h5>${artists[i].artist}</h5>
                    <p>${artists[i].desc}</p>
                </div>
                <div class="artist-painting">
                    <div class="content">
                        <img src="${artists[i].sub_img1}" alt="">
                    </div>
                    <div class="content">
                        <img src="${artists[i].sub_img2}" alt="">
                    </div>
                    <div class="content">
                        <img src="${artists[i].sub_img3}" alt="">
                    </div>
                </div>
            </div>
    `;
    artist_content.insertAdjacentHTML('afterbegin', artist);
}

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

const tabs_1 = document.querySelectorAll('.tab-1');
const tab_content1 = document.querySelectorAll('.tab-content');

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

const tabs_2 = document.querySelectorAll('.tab-2');
const artist_contents = document.querySelectorAll('.artist-content-box');

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

const detail_button = document.querySelector('.detail-button');

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
