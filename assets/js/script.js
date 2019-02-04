// Handle these functions once the page loads
$(document).ready(function () {
    collapsibleExpandable();
});

// Materialize JS Component Functions

const collapsibleExpandable = () => {
    var elem = document.querySelector('.collapsible.expandable');
    var instance = M.Collapsible.init(elem, {
        accordion: false
    });
}