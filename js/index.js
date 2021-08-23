// section titles
$("#projectTitle").text("<Projects>");
$("#aboutTitle").text("<About>");
$("#contactTitle").text("<Contact>");

const allProjects = [
  {
    images: [
      "./images/iliauni/iliauni1.png",
      "./images/iliauni/iliauni2.png",
      "./images/iliauni/iliauni3.png",
      "./images/iliauni/iliauni4.png",
    ],
    title: "Online Iliauni",
    text: "",
    tools: "Html,Css(Bootrstrap),Javascript",
    duration: "4 Months",
    category: ["all"],
    link: "https://nokak.github.io/Online-IliaUni/",
    code: "https://github.com/beso768/Online-IliaUni",
  },
  {
    images: [
      "./images/charts/line.jpg",
      "./images/charts/pie.png",
      "./images/charts/table.jpg",
    ],
    title: "Chart js",
    text: "",
    tools: "Html,Css,Javascript(React , Redux , Node.js)",
    duration: "1 day",
    category: ["all", "react", "node"],
    link: "https://thawing-hamlet-99968.herokuapp.com/",
    code: "https://github.com/beso768/React-Charts",
  },
  {
    images: [
      "./images/blog/blog1.png",
      "./images/blog/blog2.png",
      "./images/blog/blog3.png",
    ],
    title: "News blog",
    text: "",
    tools: "Html,Css,Javascript",
    category: ["all"],
    duration: "1 week",
    link: "https://beso768.github.io/Unilab/",
    code: "https://github.com/beso768/Unilab",
  },
  {
    images: ["./images/books/book3.png", "./images/books/book2.png"],
    title: "Interactive Books Library",
    text: "",
    tools: "Html,Css(Bootstrap),Javascript",
    category: ["all"],
    duration: "1 Months",
    link: "https://iel.iliauni.edu.ge/index.html",
    code: "https://github.com/beso768/Interactive-books-library",
  },
  {
    images: [
      "./images/motorcycles/motorcycle-website3.png",
      "./images/motorcycles/motorcycle-website1.png",
      "./images/motorcycles/motorcycle-website2.png",
      "./images/motorcycles/motorcycle-website5.png",
      "./images/motorcycles/motorcycle-website4.png",
    ],
    title: "Motorcycle Service",
    text: "",
    category: ["all"],
    tools: "Html,Css,Javascript",
    duration: "1 Month",
    link: "https://beso768.github.io/Final-project/",
    code: "https://github.com/beso768/Final-project",
  },
  {
    images: ["./images/quiz/quiz.jpg", "./images/quiz/table.jpg"],
    title: "Quiz app",
    text: "",
    tools: "Html,Css,React",
    category: ["all", "react"],
    duration: "1 day",
    link: "https://codepen.io/beso123/pen/WNpxdzQ",
    code: "https://hidden-everglades-80267.herokuapp.com/",
  },
  {
    images: ["./images/codepen/promodoro.png"],
    title: "Pomodoro clock",
    text: "",
    tools: "Html,Css(Bootstrap),React",
    category: ["all", "react"],
    duration: "1 day",
    link: "https://codepen.io/beso123/pen/WNpxdzQ",
    code: "https://codepen.io/beso123/pen/WNpxdzQ",
  },
  {
    images: ["./images/codepen/drum-machine.png"],
    title: "Drum machine",
    text: "",
    tools: "Html,Css(Bootstrap),React",
    category: ["all", "react"],
    duration: "1 day",
    link: "https://codepen.io/beso123/pen/gOmbWjE",
    code: "https://codepen.io/beso123/pen/gOmbWjE",
  },
  {
    images: ["./images/codepen/markdown.png"],
    title: "Markdown Previewer",
    text: "",
    tools: "Html,Css(SCSS),React",
    category: ["all", "react"],
    duration: "2 days",
    link: "https://codepen.io/beso123/pen/rNyaLLp",
    code: "https://codepen.io/beso123/pen/rNyaLLp",
  },
  {
    images: ["./images/codepen/2350564e.png"],
    title: "User authentication",
    text: "",
    tools: "Node.js , express",
    category: ["all", "node"],
    duration: "1 week",
    link: "https://github.com/beso768/Node-Authentication",
    code: "https://github.com/beso768/Node-Authentication",
  },
];

let projectsArr = [...allProjects];

// ..popup
const projects = $(".project");
const popup = $("#popup-wrapper");
const popupCloseBtn = $(".fa-times");
const popupTitle = $("#popupTitle");
const popupDuration = $("#popupDuration");
const popupTools = $("#popupTools");
const webLink = $("#webLink");
const gitLink = $("#gitLink");
const popupImage = $("#img-wrapper");
const leftArrow = $(".fa-chevron-left");
const rightArrow = $(".fa-chevron-right");

// initialize projects
const initializeProjects = () => {
  projectsArr.map((item, ind) => {
    $(`<div class='project' 
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay='100'
          data-aos-duration='700'
          id=${ind}>
        <div class="image">
            <img src="${item.images[0]}" alt="${item.title}" />
            <div class="hoverBtn">View details</div>
        </div>
        <div class="description">
            <h4>${item.title}</h4>
        </div>
    </div>`).appendTo($(".projects-wrapper"));
  });
};
initializeProjects();

function showPopup({ target }) {
  let parent = target.closest(".project");
  changeContent(parent);
  popup.fadeIn("fast", () => {
    popupCloseBtn.click(() => popup.fadeOut("fast"));
    popup.click((e) => {
      e.target.id === popup[0].id ? popup.fadeOut("fast") : null;
    });
  });
}
// add event listeners on click
for (let i = 0; i < projectsArr.length; i++) {
  $(`#${i}`).click(showPopup);
}
function changeContent(project) {
  let count = 0;
  let id = Number(project.id);
  popupImage.css("background-image", `url(${projectsArr[id].images[count]})`);
  popupTitle.text(`${projectsArr[id].title}`);
  // popupText.text(`${projectsArr[id-1].text}`);
  popupTools.text(`${projectsArr[id].tools}`);
  popupDuration.text(`${projectsArr[id].duration}`);
  webLink.attr("href", `${projectsArr[id].link}`);
  gitLink.attr("href", `${projectsArr[id].code}`);
  // image slider
  rightArrow.click(() => {
    count < projectsArr[id].images.length - 1 ? count++ : (count = 0);
    changeImage();
  });
  leftArrow.click(() => {
    count > 0 ? count-- : (count = projectsArr[id].images.length - 1);
    changeImage();
  });
  function changeImage() {
    popupImage.css("background-image", `url(${projectsArr[id].images[count]})`);
  }
}

//burgerMenu
const burgerIcon = $(".burgerIcon");
const navbar = $("#navbar");
const list = $("#list");
function openMenu() {
  navbar.toggleClass(() => "navChange");
  list.toggleClass(() => "liChange");
  $(".line1").toggleClass(() => "line1Change");
  $(".line2").toggleClass(() => "line2Change");
  $(".line3").toggleClass(() => "line3Change");
}
burgerIcon.click(() => {
  openMenu();
});
// on list click toggle menu
for (let i = 0; i < list.children().length; i++) {
  list.children()[i].addEventListener("click", () => {
    navbar.hasClass("navChange") ? openMenu() : null;
  });
}

// filter

const filterByCategory = (category) => {
  // filter project by category
  projectsArr = allProjects.filter((item) => item.category.includes(category));
  $(".projects-wrapper").html(projectsArr);
  initializeProjects();
  for (let i = 0; i < 10; i++) {
    $(`#${i}`).click(showPopup);
  }
  $(".categories-header").find(".active").removeClass("active");
  $(`#${category}`).addClass("active");
};

$("#react").click(() => {
  filterByCategory("react");
});
$("#all").click(() => {
  filterByCategory("all");
});
$("#node").click(() => {
  filterByCategory("node");
});
