const view_data = [
  {
    image: "images/card.png",
    link: "https://vkrs24.github.io/Blog-Card/",
    title: "Blog Card - Jul 2025",
    desc: "This one is my web design using HTML, CSS and Gained experience in responsive design.",
  },
  {
    image: "images/credit.png",
    link: "https://vkrs24.github.io/Smart-Credit-Card-Website/",
    title: "Smart Credit Website- Jul 2025",
    desc: "Designed a Web page, a exercise to showcase my front-end skills with its technology like HTML, CSS, JavaScript. Gained experience in responsive design.",
  },
  {
    image: "images/ListenX.png",
    link: "https://vkrs24.github.io/ListenX/index.html",
    title: "ListenX - Mar 2025",
    desc: "Built ListenX, a music streaming web app with HTML, CSS, JavaScript, and FastAPI. Gained experience in responsive design and the Fetch API.",
  },
  {
    image: "images/weather.png",
    link: "https://vkrs24.github.io/Weather_App/",
    title: "Weather Website - Feb 2025",
    desc: "It provides me understanding of how to create an responsive design and how to use fetch API in javascript.",
  },
  {
    image: "images/notes.png",
    link: "https://vkrs24.github.io/Web-Notes/",
    title: "Web Notes - Jan 2025",
    desc: "It provides me understanding of how to create an responsive design and use javascript event listeners concepts.",
  },
  {
    image: "images/age_cal.png",
    link: "https://vkrs24.github.io/Age_Calculator/",
    title: "Age Calculator - Jan 2025",
    desc: "It provides me understanding of how to create an responsive design and use javascript basic concepts.",
  },
  {
    image: "images/amazon.png",
    link: "https://vkrs24.github.io/Amazon-e-commerce-Website/amazon.html",
    title: "Amazon ecommerce website - Dec 2024",
    desc: "This project helps me to understand the javascript concepts that is required for a basic websites to generate the content dynamically and making webpages intreactive.",
  },
  {
    image: "images/todo.png",
    link: "https://vkrs24.github.io/Todo-list/",
    title: "Todo List Webpage - Dec 2024",
    desc: "It provides me understanding of how to create and delete an item in a webpage.",
  },
  {
    image: "images/rps.png",
    link: "https://vkrs24.github.io/Rock_Paper_Scissors_Game/",
    title: "Rock Paper Scissors Game - Dec 2024",
    desc: "This one helps me to understand the frontend technologies like Javascript, HTML5 and CSS with responsive design.",
  },
  {
    image: "images/University.png",
    link: "https://vkrs24.github.io/University_website/University_Website/index.html",
    title: "University Portal Website - May 2024",
    desc: "This project provides me the basic understanding of HTML5 and CSS with responsive design for a website.",
  },
  {
    image: "images/prime.png",
    link: "https://vkrs24.github.io/Amazon_PimeVideo_Clone/",
    title: "Amazon Prime Clone Website - May 2024",
    desc: "This project is an intreasting one that it helps me to understand the javascript validations during Login and SignUp.",
  },
  {
    image: "images/youtube.png",
    link: "https://vkrs24.github.io/YouTube-Clone/youtube.html",
    title: "YouTube Clone Website - May 2024",
    desc: "This is one of my favourite project that it helps me to understand HTML5 and CSS with responsive design.",
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
