//Projects
let projects = [{
    projectName: "demoDay",
    imageURL: "assets/img/demoDay-logo.JPG",
    githubURL: "https://github.com/Ryan-T-Case/Demo",
    liveAppURL: "https://demoday-richmond.herokuapp.com/",
    description: "A MERN stack app designed specifically for use with job fairs and project fairs. This app is optimized for managing an event and allowing users to view and interact with the event and its presenters. Utilizing the Nexmo API, users can send SMS messages to presenters they wish to contact for an interview. Users with an admin sign on have access to adding projects, and viewing data visualization showing how successful the event is."
}, {
    projectName: "take.note",
    imageURL: "assets/img/takenote-logo.png",
    githubURL: "https://github.com/LandrumTrev/book-reporter",
    liveAppURL: "https://book-reporter.herokuapp.com/",
    description: "A Project-based note organizer web app with multiple User accounts. An MVC-structured responsive web app, take.note utilizes a MySQL database accessed with the Sequelize ORM, Handlebars for data-based page templating, and Bootstrap front-end elements modified with custom CSS. The web-based Quill.js word processor allows the main document of each Project various formatting options."
}]

// Handle these functions once the page loads
$(document).ready(function () {
    collapsibleExpandable();
    $('.tooltipped').tooltip();
    renderProjects();
});

// Materialize JS Component Functions

const collapsibleExpandable = () => {
    var elem = document.querySelector('.collapsible.expandable');
    var instance = M.Collapsible.init(elem, {
        accordion: false
    });
}

const renderProjects = () => {
    projects.forEach(function (project) {
        $(".card-container").append(`
        <div class="col s12 l6">
            <div class="card">
                <div class="card-image">
                    <img src="${project.imageURL}" class="responsive-img"
                        alt="Project Screenshot">
                    <span class="card-title">${project.projectName}</span>
                    <div class="fixed-action-btn toolbar direction-top">
                        <a class="btn-floating btn-large red">
                            <i class="large material-icons">link</i>
                        </a>
                        <ul>
                            <li class="waves-effect waves-light tooltipped" data-position="top"
                                data-tooltip="GitHub Repository"><a href="${project.githubURL}"><i class="devicon-github-plain toolbar-icon"></i>
                                </a></li>
                            <li class="waves-effect waves-light tooltipped" data-position="top"
                                data-tooltip="Live App"><a href="${project.liveAppURL}"><i class="material-icons">exit_to_app
                                    </i></a></li>
                            <li class="waves-effect waves-light tooltipped" data-position="top"
                                data-tooltip="Close"><a href="#!"><i class="material-icons">close
                                    </i></a></li>
                        </ul>
                    </div>
                </div>
                <div class="card-content">
                    <p class="paragraph">${project.description}</p>
                </div>
            </div>
        </div>
        `)
        $('.fixed-action-btn').floatingActionButton({
            toolbarEnabled: true
        });
        $('.tooltipped').tooltip();
    });

}