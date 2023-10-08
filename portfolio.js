document.addEventListener("DOMContentLoaded", function () {
    // Get references to menu items
    const servicesItem = document.getElementById("services");
    const aboutItem = document.getElementById("about");
    const contactItem = document.getElementById("contact");

    // Function to handle item selection
    function selectMenuItem(item) {
        // Remove the "selected" class from all items
        servicesItem.classList.remove("selected");
        aboutItem.classList.remove("selected");
        contactItem.classList.remove("selected");

        // Add the "selected" class to the clicked item
        item.classList.add("selected");
    }

    // Add click event listeners to menu items
    servicesItem.addEventListener("click", () => {
        selectMenuItem(servicesItem);
        // Add your code to handle the "Services" click here
    });

    aboutItem.addEventListener("click", () => {
        selectMenuItem(aboutItem);
        // Add your code to handle the "About Me" click here
    });

    contactItem.addEventListener("click", () => {
        selectMenuItem(contactItem);
        // Add your code to handle the "Contact" click here
    });

    // Set "Services" as the default selected item
    selectMenuItem(servicesItem);
});

document.addEventListener("DOMContentLoaded", function () {
    // Get references to skill boxes
    const frontEndBox = document.getElementById("front-end-box");
    const ccppCodingBox = document.getElementById("ccpp-coding-box");
    const videoEditingBox = document.getElementById("video-editing-box");

    // Function to handle skill box selection and animate the level bar
    function selectSkillBox(box, percentage) {
        // Remove the "selected" class from all skill boxes
        frontEndBox.classList.remove("selected");
        ccppCodingBox.classList.remove("selected");
        videoEditingBox.classList.remove("selected");

        // Add the "selected" class to the clicked skill box
        box.classList.add("selected");

        const levelSection = box.querySelector(".level-section");

        levelSection.style.width = percentage + "%";
    }

    frontEndBox.addEventListener("click", () => {
        selectSkillBox(frontEndBox, 85);
    });

    ccppCodingBox.addEventListener("click", () => {
        selectSkillBox(ccppCodingBox, 90);
    });

    videoEditingBox.addEventListener("click", () => {
        selectSkillBox(videoEditingBox, 70);
    });

    selectSkillBox(frontEndBox, 0);
});
