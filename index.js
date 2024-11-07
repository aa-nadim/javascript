// Get modal, open button, and close button
// const modal = document.getElementById("myModal");
// const openModalBtn = document.getElementById("openModalBtn");
// const closeModalBtn = document.querySelector(".close-modal-btn");

// // Open modal when button is clicked
// openModalBtn.onclick = function() {
//     modal.style.display = "block";
// };

// // Close modal when close button is clicked
// closeModalBtn.onclick = function() {
//     modal.style.display = "none";
// };

// // Close modal when clicking outside of the modal content
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// };


// // Mapping of regions (countries) to their official currencies
// const regionCurrencyMap = {
//     "Portugal": ["EUR", "UKD"],
//     "United States": ["USD"],
//     "United Kingdom": ["GBP"],
//     "Canada": ["CAD"],
//     "Japan": ["JPY"],
//     "Australia": ["AUD"],
//     "Switzerland": ["CHF"],
//     "China": ["CNY"],
//     "India": ["INR"],
//     "Brazil": ["BRL"],
//     "South Africa": ["ZAR"],
//     "Russia": ["RUB"],
//     "South Korea": ["KRW"],
//     "Mexico": ["MXN"],
//     "Singapore": ["SGD"],
//     "Sweden": ["SEK"],
//     "Norway": ["NOK"],
//     "New Zealand": ["NZD"],
//     "Turkey": ["TRY"],
//     "Saudi Arabia": ["SAR"],
//     "Argentina": ["ARS"],
//     "Thailand": ["THB"],
//     "Malaysia": ["MYR"],
//     "United Arab Emirates": ["AED"],
//     // Add more regions and currencies as needed
//   };
  
//   const regionButton = document.getElementById('regionButton');
//   const currencyButton = document.getElementById('currencyButton');
//   const selectedRegion = document.getElementById('selectedRegion');
//   const selectedCurrency = document.getElementById('selectedCurrency');
//   const regionOptions = document.getElementById('regionOptions');
//   const currencyOptions = document.getElementById('currencyOptions');
  
//   // Populate the region dropdown options based on regionCurrencyMap
//   Object.keys(regionCurrencyMap).forEach(region => {
//     const optionDiv = document.createElement('div');
//     optionDiv.classList.add('form-dropdown-option');
//     optionDiv.setAttribute('data-region', region);
//     optionDiv.textContent = region;
//     regionOptions.appendChild(optionDiv);
//   });
  
//   // Show/Hide dropdown options
//   document.querySelectorAll('.form-dropdown-button').forEach((button) => {
//     button.addEventListener('click', (event) => {
//       event.stopPropagation();
//       button.nextElementSibling.classList.toggle('show');
//     });
//   });
  
//   // Update the currency options when a region is selected
//   regionOptions.addEventListener('click', (event) => {
//     const selectedRegionText = event.target.getAttribute('data-region');
//     console.log('selectedRegion', selectedRegionText);
//     if (selectedRegionText) {
//       // Update selected region text
//       selectedRegion.textContent = selectedRegionText;
  
//       // Get currency options for the selected region
//       const currencies = regionCurrencyMap[selectedRegionText];
  
//       // Clear and update currency dropdown options
//       currencyOptions.innerHTML = '';
//       currencies.forEach(currency => {
//         const optionDiv = document.createElement('div');
//         optionDiv.classList.add('form-dropdown-option');
//         optionDiv.textContent = currency;
//         currencyOptions.appendChild(optionDiv);
//       });
  
//       // Set the first currency as the default selected currency
//       console.log(selectedCurrency, currencies);
//       selectedCurrency.textContent = currencies[0].textContent;
//     }
//   });
  
//   // Update the displayed currency when a currency option is clicked
//   currencyOptions.addEventListener('click', (event) => {
//     selectedCurrency.textContent = event.target.value;
//   });
  
//   // Close dropdowns when clicking outside
//   window.addEventListener('click', () => {
//     document.querySelectorAll('.form-dropdown-options').forEach(options => {
//       options.classList.remove('show');
//     });
//   });
  

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

// Mapping of regions (countries) to their official currencies
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
    // Add more regions and currencies as needed
};

const regionButton = document.getElementById('regionButton');
const selectedRegion = document.getElementById('selectedRegion');
const selectedCurrency = document.querySelector('.selectedCurrency');
const regionOptions = document.getElementById('regionOptions');
const currencyOptions = document.getElementById('currencyOptions');

// Populate the region dropdown options based on regionCurrencyMap
Object.keys(regionCurrencyMap).forEach(region => {
    const optionDiv = document.createElement('div');
    optionDiv.classList.add('form-dropdown-option');
    optionDiv.setAttribute('data-region', region);
    optionDiv.textContent = region;
    regionOptions.appendChild(optionDiv);
});

// Show/Hide dropdown options
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
        // Update selected region text
        selectedRegion.textContent = selectedRegionText;

        // Get currency options for the selected region
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




// Initialize slide index
let slideIndex = 1;
showSlides(slideIndex);

// Open modal
document.getElementById("openSlideshowModalBtn").onclick = function() {
  document.getElementById("openSlideshowModal").style.display = "flex";
}

// Close modal
function closeModal() {
  document.getElementById("openSlideshowModal").style.display = "none";
}

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Display current slide
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Show the slides
function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

// Close modal when clicking outside of the modal content
window.onclick = function(event) {
  const modal = document.getElementById("openSlideshowModal");
  if (event.target === modal) {
    closeModal();
  }
}