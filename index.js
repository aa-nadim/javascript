// Get modal, open button, and close button
const modal = document.getElementById("myModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.querySelector(".close-modal-btn");

// Open modal when button is clicked
openModalBtn.onclick = function() {
    modal.style.display = "block";
};

// Close modal when close button is clicked
closeModalBtn.onclick = function() {
    modal.style.display = "none";
};

// Close modal when clicking outside of the modal content
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};




// Get both desktop and mobile buttons and their icons
const heartButton = document.getElementById('heartButton');
const heartIcon = heartButton.querySelector('.heart-icon');
const heartButtonMobile = document.getElementById('heartButtonMobile');
const heartIconMobile = heartButtonMobile.querySelector('.heart-icon');

// Function to update both heart buttons based on 'isLiked' state in localStorage
function updateHeartButtons() {
  const isLiked = localStorage.getItem('isLiked') === 'true';

  // Update icons and classes for both buttons
  heartIcon.textContent = isLiked ? '❤' : '♡';
  heartButton.classList.toggle('active', isLiked);

  heartIconMobile.textContent = isLiked ? '❤' : '♡';
  heartButtonMobile.classList.toggle('active', isLiked);
}

// Function to handle click event for toggling like state
function toggleHeartState() {
  const isLiked = localStorage.getItem('isLiked') !== 'true';
  localStorage.setItem('isLiked', isLiked.toString());

  // Update both heart buttons after toggling the state
  updateHeartButtons();
}

// Add event listeners for both buttons
heartButton.onclick = toggleHeartState;
heartButtonMobile.onclick = toggleHeartState;

// Initial setup
updateHeartButtons();


