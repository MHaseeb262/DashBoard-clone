// Side Menu 
const collapse_icon = document.querySelector('.left-arrow');
const menu_collapse = document.querySelector('.menu-collapse');

const dashboard_container = document.querySelector('.dashboard-container');
const dashboars_side_menu = document.querySelector('.dashboars-side-menu');
const side_container = document.querySelector('.side-container');

const brand_name = document.querySelector('.brand-name');
const dashboard_menu = document.querySelector('.dashBoard-menu');

const create_project = document.querySelector('.create-new-project');
const create_project_img = document.querySelector('.add-project-btn-icon');
const create_project_btn_txt = document.querySelector('.create-project-btn-txt');

// DashBoard Page 
const head_section = document.getElementById('head-section');
const overview_section = document.getElementById('overview-section');
const progress_section = document.getElementById('progress-section');
const remaining_work_section = document.getElementById('remaining-work-section');

// Side menu collapse/Expand section 
collapse_icon.addEventListener("click", () => {

    dashboars_side_menu.classList.toggle('collapse-side-container');
    side_container.classList.toggle('side-menu');

    collapse_icon.classList.toggle('side-arr-position');
    menu_collapse.classList.toggle('rotation');

    brand_name.classList.toggle('disable');
    create_project.classList.toggle('collapse-create-project');
    create_project_img.classList.toggle('icon-size');
    create_project_btn_txt.classList.toggle('hide');
    dashboard_menu.classList.toggle('collapse-dashboard-menu');

    // Dash board width set 
    head_section.classList.toggle('set-width');
    overview_section.classList.toggle('set-width');
    progress_section.classList.toggle('set-width');
    remaining_work_section.classList.toggle('set-width');
});

if (window.innerWidth <= 1024 && window.innerWidth >= 600) {

    dashboars_side_menu.classList.toggle('collapse-side-container');
    side_container.classList.toggle('side-menu');

    menu_collapse.classList.toggle('rotation');
    brand_name.classList.toggle('disable');

    create_project.classList.toggle('collapse-create-project');
    create_project_img.classList.toggle('icon-size');
    create_project_btn_txt.classList.toggle('hide');
    dashboard_menu.classList.toggle('collapse-dashboard-menu');

    // Dash board width set 
    head_section.classList.toggle('set-width');
    overview_section.classList.toggle('set-width');
    progress_section.classList.toggle('set-width');
    remaining_work_section.classList.toggle('set-width');

    collapse_icon.addEventListener('click', () => {
        dashboard_container.classList.toggle('position');
        dashboars_side_menu.classList.toggle('set-height');

        head_section.classList.toggle('small-devices-width');
        overview_section.classList.toggle('small-devices-width');
        progress_section.classList.toggle('small-devices-width');
        remaining_work_section.classList.toggle('small-devices-width');
    });
}

if (window.innerWidth <= 599) {
    collapse_icon.addEventListener('click', () => {

        dashboard_container.classList.toggle('position');
        dashboars_side_menu.classList.toggle('set-height');
        dashboars_side_menu.classList.remove('collapse-side-container');

        brand_name.classList.remove('disable');
        create_project.classList.remove('collapse-create-project');
        create_project_img.classList.remove('icon-size');
        create_project_btn_txt.classList.remove('hide');

        dashboard_menu.classList.toggle('collapse-dashboard-menu');
        head_section.classList.toggle('small-devices-width');
        overview_section.classList.toggle('small-devices-width');
        progress_section.classList.toggle('small-devices-width');
        remaining_work_section.classList.toggle('small-devices-width');
    });
}

// Dropdown boxes
let open_dropdown = null;

document.addEventListener('click', (event) => {
    const target = event.target;
    const targetId = target.dataset.target;
    console.log(targetId);

    if (targetId) {
        const dropdownBox = document.getElementById(targetId);
        const icon = document.querySelector(`.dropdown-icon[data-target="${targetId}"]`);

        if (open_dropdown && open_dropdown !== dropdownBox) {
            close_dropdown(open_dropdown);
        }

        if (dropdownBox.style.opacity == 0) {
            open_dropdown = dropdownBox;
            open_dropdown.style.opacity = 1;
            open_dropdown.style.top = "40px";
            open_dropdown.style.zIndex = 1;
            icon.style.transform = "rotate(-180deg)";
        } else {
            close_dropdown(dropdownBox);
            open_dropdown = null;
        }
        event.stopPropagation();
    } else if (!event.target.closest('.dropdown-box')) {
        if (open_dropdown) {
            close_dropdown(open_dropdown);
            open_dropdown = null;
        }
    }
});

// Function for Close Dropdown 
function close_dropdown(dropdownBox) {
    const icon = document.querySelector(`.dropdown-icon[data-target ="${dropdownBox.id}"]`);
    dropdownBox.style.opacity = 0;
    dropdownBox.style.top = "22px";
    open_dropdown.style.zIndex = -1;
    if (icon) icon.style.transform = "rotate(0deg)";
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

// Overall progress tracker
document.addEventListener('DOMContentLoaded', () => {
    const progressPath = document.querySelector('.actual-progress');
    const progressText = document.querySelector('.percentage-value');
    const percentage = 72; // Example: Change this value dynamically  

    const radius = 40; // Radius of the arc
    const circumference = 2 * Math.PI * radius;
    const offset = 100 - percentage;

    progressPath.style.strokeDasharray = `${circumference / 2}`;
    progressPath.style.strokeDashoffset = offset;

    // Update text
    progressText.textContent = `${percentage}%`;
});
