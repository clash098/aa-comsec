// elements go here
const logo = document.getElementById("logo");
const mission_text = document.getElementById("mission-text");
const main_box = document.querySelector(".main-box");

// the different mission texts go here
const originalMission = "Supporting Another Axiom's games by identifying and addressing security vulnerabilities, promoting best practices, and working collaboratively to help maintain the security and reliability of their games.";
const catMission = "to be cats and go meow :3";

// this is the best part :D
let cat_mode = false;
let click_count = 0;

// functional part here
logo.addEventListener("click", function() {
    click_count++;

    // 3 clicks = toggle cat mode
    if (click_count >= 3) {
        // sad cat mode disable
        if (cat_mode) {
            mission_text.textContent = originalMission;
            cat_mode = false;
            main_box.classList.remove("cat-mode");
        }
        // happy cat mode enable
        else {
            mission_text.textContent = catMission;
            cat_mode = true;
            main_box.classList.add("cat-mode");
        }

        click_count = 0;
    }
});