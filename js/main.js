// Get all elements with the class "accordion"
const acc = document.getElementsByClassName("accordion");

// Loop through each accordion element and add a click event listener
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    // Get the corresponding panel element for this accordion
    const panel = this.nextElementSibling;

    // Toggle the "active" class to expand or collapse the panel
    panel.classList.toggle("active");
  });
}

