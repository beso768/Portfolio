    // section titles 
$('#projectTitle').text("<Projects>");
$('#aboutTitle').text("<About>");
$('#contactTitle').text("<Contact>");


const projectsArr = [
    {
        images:['./images/iliauni1.png','./images/iliauni2.png','./images/iliauni3.png','./images/iliauni4.png'],
        title:'Online Iliauni',
        text:"",
        tools:'Html,Css(Bootrstrap),Javascript',
        duration: '4 Months',
        link:'https://nokak.github.io/Online-IliaUni/',
        code:'https://github.com/beso768/Online-IliaUni'

    },
    {
        images:['./images/book3.png','./images/book2.png'],
        title:'Interactive Books Library',
        text:"",
        tools:'Html,Css(Bootstrap),Javascript',
        duration: '1 Months',
        link:'https://iel.iliauni.edu.ge/index.html',
        code:'https://github.com/beso768/Interactive-books-library'

    },
    {
        images:['./images/motorcycle-website3.png','./images/motorcycle-website1.png','./images/motorcycle-website2.png','./images/motorcycle-website5.png','./images/motorcycle-website4.png'],
        title:'Motorcycle Service',
        text:"",
        tools:'Html,Css,Javascript',
        duration: '1 Month',
        link:'https://beso768.github.io/Final-project/',
        code:'https://github.com/beso768/Final-project',

    },
    {
        images:['./images/promodoro.png'],
        title:'Promodoro clock',
        text:"",
        tools:'Html,Css(Bootstrap),React',
        duration: '1 day',
        link:'https://codepen.io/beso123/pen/WNpxdzQ',
        code:'https://codepen.io/beso123/pen/WNpxdzQ'

    },
    {
        images:['./images/drum-machine.png'],
        title:'Interactive Books Library',
        text:"",
        tools:'Html,Css(Bootstrap),React',
        duration: '1 Months',
        link:'https://codepen.io/beso123/pen/gOmbWjE',
        code:'https://codepen.io/beso123/pen/gOmbWjE'

    },
    {
        images:['./images/markdown.png'],
        title:'Markdown Previewer',
        text:"",
        tools:'Html,Css(SCSS),React',
        link:'https://codepen.io/beso123/pen/rNyaLLp',
        code:'https://codepen.io/beso123/pen/rNyaLLp'
    },

]

// ..popup
const projects = $('.project');
const popup = $('#popup-wrapper');
const popupCloseBtn = $('.fa-times'); 
const popupTitle = $('#popupTitle');
// const popupText = $('#popupText');
const popupDuration = $('#popupDuration');
const popupTools = $('#popupTools');
const webLink = $('#webLink');
const gitLink = $('#gitLink');
const popupImage = $('#img-wrapper')
const leftArrow = $('.fa-chevron-left');
const rightArrow = $('.fa-chevron-right');

function showPopup(e){
    changeContent(e.target.parentNode.parentNode)
    popup.fadeIn( "fast", () => {
        popupCloseBtn.click(() => popup.fadeOut('fast'))
        popup.click((e) => {
            e.target.id === popup[0].id ? popup.fadeOut('fast'):null;
        })
  });
}
for(let i = 0 ; i < projects.length ; i++ ){
    projects[i].addEventListener('click',showPopup)
}
function changeContent(project){
    let count = 0
    let id = Number(project.id)
    let img = project.children[0].children[0]
    popupImage.css('background-image', `url(${projectsArr[id-1].images[count]})`);
    popupTitle.text(`${projectsArr[id-1].title}`);
    // popupText.text(`${projectsArr[id-1].text}`);
    popupTools.text(`${projectsArr[id-1].tools}`);
    popupDuration.text(`${projectsArr[id-1].duration}`);
    webLink.attr('href',`${projectsArr[id-1].link}`)
    gitLink.attr('href',`${projectsArr[id-1].code}`)
    // image slider 
    rightArrow.click(() => {
        count < projectsArr[id-1].images.length-1 ? count++: count = 0;
        changeImage();
    })
    leftArrow.click(() => {
        count > 0 ? count-- : count = projectsArr[id-1].images.length-1;
        console.log(count);
        changeImage();
    })
    function changeImage(){
        popupImage.css('background-image', `url(${projectsArr[id-1].images[count]})`);
    }  
}

//burgerMenu
const burgerIcon = $('.burgerIcon');
const navbar = $('#navbar');
const list = $('#list');
function openMenu(){
    navbar.toggleClass(() => 'navChange')
    list.toggleClass(() => 'liChange')
    $('.line1').toggleClass(() => 'line1Change')
    $('.line2').toggleClass(() => 'line2Change')
    $('.line3').toggleClass(() => 'line3Change')
}

burgerIcon.click(() => {
    openMenu()
})
// on list click toggle menu 
for(let i = 0 ; i < list.children().length ; i++ ){
    list.children()[i].addEventListener('click',() => openMenu())
}