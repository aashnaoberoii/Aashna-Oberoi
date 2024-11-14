// JavaScript to handle opening and closing popups

// Open the popup and add the overlay effect
document.querySelectorAll('.project-item').forEach((item, index) => {
    item.addEventListener('click', function() {
        document.getElementById(`popup${index + 1}`).style.display = 'block'; // Corrected template literal
        document.body.classList.add('popup-active');
    });
});

// Close the popup when the close button is clicked
document.querySelectorAll('.close-btn').forEach((btn, index) => {
    btn.addEventListener('click', function() {
        document.getElementById(`popup${index + 1}`).style.display = 'none'; // Corrected template literal
        document.body.classList.remove('popup-active');
    });
});
// Get elements
const popup = document.getElementById("popup");
const backdrop = document.getElementById("backdrop");
const closeBtn = document.querySelector(".close-btn");

// Open popup (you can trigger this with a button click)
function openPopup() {
    popup.style.display = 'block';
    backdrop.style.visibility = 'visible';
    backdrop.style.opacity = '1';
}

// Close the popup (this will be triggered by clicking the close button)
function closePopup() {
    popup.style.display = 'none';
    backdrop.style.visibility = 'hidden';
    backdrop.style.opacity = '0';
}

// Close popup if clicked outside of the popup content
window.addEventListener("click", function (event) {
    if (event.target === backdrop) {
        closePopup();
    }
});

// Close popup when clicking on the close button
closeBtn.addEventListener("click", closePopup);