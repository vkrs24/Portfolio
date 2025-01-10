const view_data = [
  {
    image: "images/youtube.png",
    link: "",
    title: "YouTube Clone Website",
    desc: "This is one of my favourite project that it helps me to understand HTML5 and CSS with responsive design.",
  },
  {
    image: "images/amazon.png",
    link: "",
    title: "Amazon ECommerce Website",
    desc: "This project helps me to understand the javascript concepts that is required for a basic websites to generate the content dynamically and making webpages intreactive.",
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
    image: "images/rps.png",
    link: "",
    title: "Rock Paper Scissors Game",
    desc: "This one helps me to understand the frontend technologies like Javascript, HTML5 and CSS with responsive design.",
  },
  {
    image: "images/todo.png",
    link: "",
    title: "Todo List Webpage",
    desc: "It provides me understanding of how to create and delete an item in a webpage.",
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
