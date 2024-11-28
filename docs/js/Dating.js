// Function to toggle visibility of the content in each tip card
function toggleContent(button) {
    const content = button.nextElementSibling;

    if (content.style.display === "block") {
        content.style.display = "none";
        button.textContent = "Show More";
    } else {
        content.style.display = "block";
        button.textContent = "Show Less";
    }
}