const proj_data = [
  {
    image: "images/University.png",
    title: "University Website",
  },
  {
    image: "images/youtube.png",
    title: "YouTube Clone Website",
  },
  {
    image: "images/prime.png",
    title: "Amazon Prime Clone Website",
  },
];

function handleDownload() {
  const link = document.createElement("a");
  link.href = "Files/Vasanthakumar_Durai_Resume.pdf";
  link.download = "Vasanthakumar_D_Resume";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

let home_project_html = "";

proj_data.forEach((data) => {
  home_project_html += `
    <div class="box">
          <div class="projext_image_box">
            <img src="${data.image}" class="s3_project_image">
          </div>
          <div class="project_name">
            ${data.title}
          </div>
        </div>
    `;
});

document.querySelector(".project_boxes").innerHTML = home_project_html;

const blog_data = [
  {
    image: "",
    title: "",
    read_time: "",
    desc: "",
  },
  {
    image: "",
    title: "",
    read_time: "",
    desc: "",
  },
  {
    image: "",
    title: "",
    read_time: "",
    desc: "",
  },
];

let blog_html = "";

blog_data.forEach((data) => {
  blog_html += `
<div class="blog_box">
        <div class="blog_image_box">
          <img src="${data.image}" alt="blogs" class="blog_img">
        </div>
        <div class="blog_botttom">
          <div class="vertical_section">
            <div class="blog_category">
              ${data.title}
            </div>
            <div class="time_to_read">
              ${data.read_time}min read
            </div>
          </div>
          <div class="horizontal_section">
            <div class="blog_title">
              ${data.desc}
            </div>
          </div>
        </div>
      </div>
`;
});

const blog = (document.querySelector(".blog_container").innerHTML = blog_data);
document.querySelector(".section_4").style.display = "none";
