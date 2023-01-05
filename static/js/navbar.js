var element_hidden = true;
function toggle_dropdown() {
    var dropdown_element = document.getElementById("dropdown");
    var bg_colour_element = document.getElementById("navbar_bg_colour");
    if (dropdown_element === null) {
        console.error("Could not retreive the html element with the id: 'dropdown'.");
        return;
    }
    if (bg_colour_element === null) {
        console.error("Could not retreive the html element with the id: 'navbar_bg_colour'.");
        return;
    }
    if (element_hidden) {
        dropdown_element.hidden = false;
        bg_colour_element.className = "navbar bg_clolour_show";
    }
    else {
        dropdown_element.hidden = true;
        bg_colour_element.className = " navbar bg_clolour_hide";
    }
    element_hidden = !element_hidden;
}
