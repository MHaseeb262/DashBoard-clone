// Side Menu 
const collapse_icon = document.getElementById('collapse-icon');
const menu_collapse = document.getElementById('menu-collapse');
const side_container = document.getElementById('side-container');
const brand_name = document.getElementById('brand-name');
const dashboard_menu = document.getElementById('dashBoard-menu');
const create_project = document.getElementById('create-new-project');
const create_btn = document.getElementById('create-project-btn-icon');

// Page header 
const manager_dropdown_icon = document.getElementById('dropdown-manager-icon');
const dropdown_box = document.getElementById('dropdown-box');


let rotation = 0;

// DashBoard Page 
const head_section = document.getElementById('head-section');
const overview_section = document.getElementById('overview-section');
const progress_section = document.getElementById('progress-section');
const remaining_work_section = document.getElementById('remaining-work-section');



collapse_icon.addEventListener("click", () => {
    rotation += 180;
    menu_collapse.style.transform = `rotate(${rotation}deg)`;

    if (side_container.style.width === "108px") {

        side_container.style.width = "260px";
        side_container.style.padding = "35px";
        side_container.style.alignItems = "flex-start";
        brand_name.style.opacity = 1;
        dashboard_menu.style.width = "184px";
        create_project.style.display = "flex";
        create_btn.style.display = "none";

        // Dash board width set 
        head_section.style.width = "calc(100vw - 260px - 17px)";
        overview_section.style.width = "calc(100vw - 260px - 17px)";
        progress_section.style.width = "calc(100vw - 260px - 17px)";
        remaining_work_section.style.width = "calc(100vw - 260px - 17px)";

    } else {

        side_container.style.width = "108px";
        side_container.style.padding = "35px 0px";
        side_container.style.alignItems = "center";
        brand_name.style.opacity = 0;
        dashboard_menu.style.width = "48px";
        create_project.style.display = "none";
        create_btn.style.display = "flex";

        // Dash board width set 
        head_section.style.width = "calc(100vw - 108px - 17px)";
        overview_section.style.width = "calc(100vw - 108px - 17px)";
        progress_section.style.width = "calc(100vw - 108px - 17px)";
        remaining_work_section.style.width = "calc(100vw - 108px - 17px)";
        

    }
});

manager_dropdown_icon.addEventListener('click', () => {
    rotation += 180;
    manager_dropdown_icon.style.transform = `rotate(${rotation}deg)`;

    console.log(rotation);

    display_dropdown(rotation);
});

function display_dropdown(rotate) {
    if (rotate === 180) {
        dropdown_box.style.top = "40px";
        dropdown_box.style.opacity = 1;
    } else {
        dropdown_box.style.top = "22px";
        dropdown_box.style.opacity = 0;
        rotation = 0;
    }
}

// progress calculation 
const progress_circles = document.querySelectorAll('.progress-circle');

progress_circles.forEach(circle => {
    const percent = circle.dataset.percent;
    const color = circle.dataset.color;
    const progressCircle = circle.querySelector('.progress');
    const text = circle.querySelector('.progress-txt');
    const radius = progressCircle.getAttribute('r');
    const circumference = 2 * Math.PI * radius;

    progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
    progressCircle.style.strokeDashoffset = circumference;
    progressCircle.style.stroke = color;

    setTimeout(() => {
        progressCircle.style.strokeDashoffset = circumference - (percent / 100) * circumference;
    }, 100);

    //dynamically update the text
    text.textContent = `${percent}%`;
});
