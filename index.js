const regionCurrencyMap = {
    "Portugal": ["EUR", "UKD"],
    "United States": ["USD"],
    "United Kingdom": ["GBP"],
    "Canada": ["CAD"],
    "Japan": ["JPY"],
    "Australia": ["AUD"],
    "Switzerland": ["CHF"],
    "China": ["CNY"],
    "India": ["INR"],
    "Brazil": ["BRL"],
    "South Africa": ["ZAR"],
    "Russia": ["RUB"],
    "South Korea": ["KRW"],
    "Mexico": ["MXN"],
    "Singapore": ["SGD"],
    "Sweden": ["SEK"],
    "Norway": ["NOK"],
    "New Zealand": ["NZD"],
    "Turkey": ["TRY"],
    "Saudi Arabia": ["SAR"],
    "Argentina": ["ARS"],
    "Thailand": ["THB"],
    "Malaysia": ["MYR"],
    "United Arab Emirates": ["AED"],
};
const modal = document.getElementById("myModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.querySelector(".close-modal-btn");
const regionButton = document.getElementById('regionButton');
const selectedRegion = document.getElementById('selectedRegion');
const selectedCurrency = document.querySelector('.selectedCurrency');
const regionOptions = document.getElementById('regionOptions');
const currencyOptions = document.getElementById('currencyOptions');
const heartButton = document.getElementById('heartButton');
const heartIcon = heartButton.querySelector('.heart-icon');
const heartButtonMobile = document.getElementById('heartButtonMobile');
const heartIconMobile = heartButtonMobile.querySelector('.heart-icon');
const adultCountElement = document.getElementById("adult-count");
const childrenCountElement = document.getElementById("children-count");
const incrementButtons = document.querySelectorAll(".increment-button");
const decrementButtons = document.querySelectorAll(".decrement-button");
const travelersSection = document.querySelector('.travelers-section-position-relative');
const travelersFormSection = document.querySelector('.travelers-count-section-absolute');
const shareContainerSection = document.querySelector('.share-container-section-position-relative');
const shareContainerUpSection = document.querySelector('.share-container-section-position-absolute');
const closeButton = document.querySelector('.share-container-close-btn');

openModalBtn.onclick = function() {
    modal.style.display = "block";
};

closeModalBtn.onclick = function() {
    modal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// Populate the region dropdown options based on regionCurrencyMap
Object.keys(regionCurrencyMap).forEach(region => {
    const optionDiv = document.createElement('div');
    optionDiv.classList.add('form-dropdown-option');
    optionDiv.setAttribute('data-region', region);
    optionDiv.textContent = region;
    regionOptions.appendChild(optionDiv);
});


document.querySelectorAll('.form-dropdown-button').forEach((button) => {
    button.addEventListener('click', (event) => {
        event.stopPropagation();
        button.nextElementSibling.classList.toggle('show');
    });
});

// Update the currency options when a region is selected
regionOptions.addEventListener('click', (event) => {
    const selectedRegionText = event.target.getAttribute('data-region');
    if (selectedRegionText) {
        selectedRegion.textContent = selectedRegionText;
        const currencies = regionCurrencyMap[selectedRegionText];

        // Clear and update currency dropdown options
        currencyOptions.innerHTML = '';
        currencies.forEach(currency => {
            const optionDiv = document.createElement('div');
            optionDiv.classList.add('form-dropdown-option');
            optionDiv.textContent = currency;
            currencyOptions.appendChild(optionDiv);
        });

        // Set the first currency as the default selected currency
        selectedCurrency.textContent = currencies[0];
    }
});

// Update the displayed currency when a currency option is clicked
currencyOptions.addEventListener('click', (event) => {
    const selectedCurrencyText = event.target.textContent;
    if (selectedCurrencyText) {
        selectedCurrency.textContent = selectedCurrencyText;
    }
});

// Close dropdowns when clicking outside
window.addEventListener('click', () => {
    document.querySelectorAll('.form-dropdown-options').forEach(options => {
        options.classList.remove('show');
    });
});


// Get both desktop and mobile buttons and their icons


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


// Initialize slide index
let slideIndex = 1;
showSlides(slideIndex);


document.getElementById("openSlideshowModalBtn").onclick = function() {
  document.getElementById("openSlideshowModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("openSlideshowModal").style.display = "none";
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let totalSlides = slides.length;

    if (n > totalSlides) { slideIndex = 1; }
    if (n < 1) { slideIndex = totalSlides; }
    for (let i = 0; i < totalSlides; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";

    document.getElementById("slideImageCount").innerText = `${slideIndex}/${totalSlides}`;
}

window.onclick = function(event) {
  const modal = document.getElementById("openSlideshowModal");
  if (event.target === modal) {
    closeModal();
  }
}

const incrementAdultCount = () => {
    const currentCount = parseInt(adultCountElement.textContent);
    adultCountElement.textContent = currentCount + 1;
};

const decrementAdultCount = () => {
    const currentCount = parseInt(adultCountElement.textContent);
    if (currentCount > 0) {
        adultCountElement.textContent = currentCount - 1;
    }
};

const incrementChildrenCount = () => {
    const currentCount = parseInt(childrenCountElement.textContent);
    childrenCountElement.textContent = currentCount + 1;
};

const decrementChildrenCount = () => {
    const currentCount = parseInt(childrenCountElement.textContent);
    if (currentCount > 0) {
        childrenCountElement.textContent = currentCount - 1;
    }
};



incrementButtons.forEach(button => {
    button.addEventListener("click", () => {
    if (button.parentElement.querySelector("#adult-count")) {
        incrementAdultCount();
        if (adultCountElement.textContent > 0) {
        button.parentElement.querySelector(".decrement-button").disabled = false;
        }
    } else {
        incrementChildrenCount();
        if (childrenCountElement.textContent > 0) {
        button.parentElement.querySelector(".decrement-button").disabled = false;
        }
    }
    });
});

decrementButtons.forEach(button => {
    button.addEventListener("click", () => {
    if (button.parentElement.querySelector("#adult-count")) {
        decrementAdultCount();
        if (adultCountElement.textContent === "0") {
        button.disabled = true;
        }
    } else {
        decrementChildrenCount();
        if (childrenCountElement.textContent === "0") {
        button.disabled = true;
        }
    }
    });
});


travelersSection.addEventListener('click', () => {
    travelersFormSection.style.display = 'block';  // Show the form
});


window.addEventListener('click', (event) => {
    if (!travelersFormSection.contains(event.target) && !travelersSection.contains(event.target)) {
    travelersFormSection.style.display = 'none';  // Hide the form
    }
});

shareContainerSection.addEventListener('click', () => {
    shareContainerUpSection.style.display = 'block';
});

closeButton.addEventListener('click', () => {
    shareContainerUpSection.style.display = 'none'; 
});

window.addEventListener('click', (event) => {
    if (!shareContainerUpSection.contains(event.target) && !shareContainerSection.contains(event.target)) {
        shareContainerUpSection.style.display = 'none';
    }
});

// JavaScript to copy link to clipboard
function copyLinkToClipboard() {
    const propertyLink = "https://example.com/property/juneau-vacation-home";

    navigator.clipboard.writeText(propertyLink)
        .then(() => {
            alert("Link copied to clipboard!");
        })
        .catch(err => {
            console.error("Failed to copy: ", err);
        });
}

document.querySelectorAll(".faq-question").forEach((question) => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;

        // Toggle active class for arrow rotation
        question.classList.toggle("active");

        // Toggle answer visibility
        answer.style.display = answer.style.display === "block" ? "none" : "block";
    });
});
  
  