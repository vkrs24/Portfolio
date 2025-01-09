const view_data = [
  {
    image: "images/youtube.png",
    link: "",
    title: "YouTube Clone Website",
    desc: "This is one of my favourite project that it helps me to understand HTML5 and CSS with responsive design.",
  },
  {
    image: "images/prime.png",
    link: "",
    title: "Amazon Prime Clone Website",
    desc: "This project is an intreasting one that it helps me to understand the javascript validations during Login and SignUp.",
  },
  {
    image: "images/University.png",
    link: "",
    title: "University Portal Website",
    desc: "This project provides me the basic understanding of HTML5 and CSS with responsive design for a website.",
  },
  {
    image: "images/youtube.png",
    link: "",
    title: "YouTube Clone Website",
    desc: "This is one of my favourite project that it helps me to understand HTML5 and CSS with responsive design.",
  },
  {
    image: "images/prime.png",
    link: "",
    title: "Amazon Prime Clone Website",
    desc: "This project is an intreasting one that it helps me to understand the javascript validations during Login and SignUp.",
  },
  {
    image: "images/University.png",
    link: "",
    title: "University Portal Website",
    desc: "This project provides me the basic understanding of HTML5 and CSS with responsive design for a website.",
  },
];

let project_html = "";
view_data.forEach((data) => {
  project_html += `
    <div class="box">
                <div class="image">
                    <img src="${data.image}">
                </div>
                <div class="bottom_section">
                    <div class="link">
                        <a href="${data.link}">View website&#10138</a>
                    </div>
                    <div class="title">
                    ${data.title}
                    </div>
                    <div class="description">
                    ${data.desc}
                    </div>
                </div>
            </div>
    `;
});
document.querySelector(".grid_section").innerHTML = project_html;
