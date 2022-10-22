// section titles
$("#projectTitle").text("<Projects>");
$("#aboutTitle").text("<About>");
$("#contactTitle").text("<Contact>");

const allProjects = [
  {
    images: [
      "./images/feazy/feazy1.png",
      "./images/feazy/feazy2.png",
      "./images/feazy/feazy3.png",
      "./images/feazy/feazy4.png",
      "./images/feazy/feazy5.png",
      "./images/feazy/feazy6.png",
      "./images/feazy/feazy7.png",
      "./images/feazy/feazy8.png",
    ],
    title: "Feazy Dashboard",
    tools:
      "Feazy’s philosophy is to help academies scale faster by automating time-consuming manual tasks.Skills: Amazon Dynamodb · SQL · Express.js · React.js · Node.js · Nest.js",
    duration: "10 Months",
    category: ["all"],
    link: "https://app-test.feazy.io/",
  },
  {
    images: [
      "./images/argus/argus4.png",
      "./images/argus/argus2.png",
      "./images/argus/argus1.png",
      "./images/argus/argus3.png",
      "./images/argus/argus5.png",
      "./images/argus/argus6.png",
      "./images/argus/argus7.png",
      "./images/argus/argus8.png",
    ],
    title: "Argus",
    tools:
      "Argus is an electronic selection system, which was specially created for Iliauni students and helps them plan their learning process effectively and contributes to their awareness. Skills: TypeScript · Responsive Web Design · Tailwind CSS · React.js · SASS",
    duration: "12 Months",
    category: ["all"],
    link: "https://argus.iliauni.io/en",
  },
  {
    images: [
      "./images/wallypayL/1.png",
      "./images/wallypayL/2.png",
      "./images/wallypayL/3.png",
      "./images/wallypayL/4.png",
    ],
    title: "Wallypay Landing Page",
    tools:
      "Designed and developed user-friendly website, including optimized check-out page that increased user clicks, and subscequently customer purchases. Skills: · JavaScript · Jquery · CSS· HTML ",
    duration: "8 Months",
    category: ["all"],
    link: "https://wallypay.eu/?l=en",
  },
  {
    images: [
      "./images/feazyL/3.png",
      "./images/feazyL/1.png",
      "./images/feazyL/2.png",
      "./images/feazyL/4.png",
    ],
    title: "Feazy Landing",
    tools:
      "Feazy’s philosophy is to help academies scale faster by automating time-consuming manual tasks.Skills: Amazon AMP · Next.js · Tailwind CSS",
    duration: "4 Months",
    category: ["all"],
    link: "https://www.feazy.io/#Home",
  },
  {
    images: [
      "./images/wallypay/1.png",
      "./images/wallypay/2.png",
      "./images/wallypay/3.png",
      "./images/wallypay/4.png",
    ],
    title: "Wallypay Dashboard",
    tools:
      "The Wallypay dashboard page, which is used only by employees, helps them perform various operations,such as: checking users transactions,Wallypay's customers information, process of identomat and etc.Skills: Redux.js , React , Typescript",
    duration: "8 Months",
    category: ["all"],
    link: "https://joaty.wallypay.eu/?app=Common&cl=Login&do=login&back_url=",
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
