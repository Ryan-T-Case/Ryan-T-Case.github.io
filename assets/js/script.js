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
}, {
    projectName: "SSB React Memory Game",
    imageURL: "assets/img/smashbros-logo.JPG",
    githubURL: "https://github.com/Ryan-T-Case/react-memory-game",
    liveAppURL: "https://ryan-t-case.github.io/react-memory-game/",
    description: "This project was my first experience with React. I am a huge Nintendo fan, hence the theme of the game. How does the game work? The user clicks on an image and will continue to earn points until they click an image they have already clicked. Once this happens, the game is reset. The high score of the user is kept track of once the first game is finished."
}, {
    projectName: "Bamazon",
    imageURL: "assets/img/bamazon-logo.png",
    githubURL: "https://github.com/Ryan-T-Case/bamazon",
    liveAppURL: "https://drive.google.com/file/d/1xolRxPlPXogj0xnMIHE8aBtzhF_mZT5U/view",
    description: "Bamazon is a CLI app that resembles an Amazon-like storefront. The app takes in orders from customers and depletes stock from the store's inventory. Inventory data is managed with MySQL and Node.js. The app allows the user to interact with the data by going through prompts created with the inquirer node package. Click the live app button for a demo video."
}, {
    projectName: "Food·ie",
    imageURL: "assets/img/foodie-logo.png",
    githubURL: "https://github.com/Ryan-T-Case/project-1",
    liveAppURL: "https://ryan-t-case.github.io/project-1/",
    description: "Food·ie is an application designed to simplify finding and cooking recipes. It was developed using the Spoonacular and Google Maps API's to populate data. Bootstrap was used for styling. For the main logic behind the app, jQuery and Javascript were used. Print.js was used to add a printing functionlity for the recipes."
}, {
    projectName: "Train Scheduler",
    imageURL: "assets/img/train-logo.png",
    githubURL: "https://github.com/Ryan-T-Case/train-scheduler",
    liveAppURL: "https://ryan-t-case.github.io/train-scheduler/",
    description: "An application styled with Bootstrap, and programmed with jQuery and JavaScript. Firebase Realtime Database is used to store the train data in the scheduler. The application is designed to present the user with data regarding train arrivals, and allow them to add additional trains to the table."
}, {
    projectName: "NFL GifTastic",
    imageURL: "assets/img/nfl-logo.JPG",
    githubURL: "https://github.com/Ryan-T-Case/GifTastic",
    liveAppURL: "https://ryan-t-case.github.io/GifTastic/",
    description: "GifTastic - NFL Edition is an app developed using Giphy's API, along with Bootstrap for styling, and JavaScript and jQuery for the logic and DOM manipulation. All gifs are obtained using an AJAX GET method to obtain properties of the objects in the Giphy API."
}, {
    projectName: "Riddlers Batman Trivia",
    imageURL: "assets/img/riddler-logo.png",
    githubURL: "https://github.com/Ryan-T-Case/TriviaGame",
    liveAppURL: "https://ryan-t-case.github.io/TriviaGame/",
    description: "The Riddler's Batman Trivia is a timed quiz game styled with Bootstrap, and programmed with JavaScript and jQuery. Timing events were written in JavaScript, and jQuery was written to manipulate the DOM. The game is a timed Batman-themed trivia quiz with 10 questions. One question is displayed on the screen at a time, along with the timer, which is set to 20 seconds on each question."
}]

// Handle these functions once the page loads
$(document).ready(function () {
    heading1();
    $('.parallax').parallax();
    collapsibleExpandable();
    $('.tooltipped').tooltip();
    renderProjects();
    responsiveParallaxFix();
});

// Materialize JS Component Functions

const collapsibleExpandable = () => {
    var elem = document.querySelector('.collapsible.expandable');
    var instance = M.Collapsible.init(elem, {
        accordion: false
    });
}

// Typed.js Functions

const heading1 = () => {
    var options = {
        strings: ["Hi, my name is Ryan Case."],
        typeSpeed: 70
    }

    var typed = new Typed(".heading1", options);
    $('.typed-cursor').hide();
    setTimeout(function(){ heading2(); }, 3000);
}

const heading2 = () => {
    var options = {
        strings: ["I am a Full-Stack Web Developer."],
        typeSpeed: 70
    }

    var typed = new Typed(".heading2", options);
    $('.typed-cursor').hide();
}

// Change parallax image source on mobile

const checkScreenSize = () => {
    var newWindowWidth = $(window).width();
    if (newWindowWidth < 481) {
        $(".banner").attr("src", "./assets/img/banner_smaller.jpeg")
    }
    else
    {
        $(".banner").attr("src", "./assets/img/banner.jpeg")
    }
}

const responsiveParallaxFix = () => {
    $(window).on("resize", function (e) {
        checkScreenSize();
    });

    checkScreenSize();

}


const renderProjects = () => {
    projects.forEach(function (project) {
        $(".card-container").append(`
        <div class="col s12 l6">
            <div class="card red lighten-5">
                <div class="card-image">
                    <img src="${project.imageURL}" class="responsive-img"
                        alt="Project Screenshot">
                    <span class="card-title red-text">${project.projectName}</span>
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
                <div class="card-content red lighten-5">
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