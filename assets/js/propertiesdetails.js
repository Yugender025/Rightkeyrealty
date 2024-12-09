const propertiesDetails = [
  {
    id: 1,
    locationLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.9720356264497!2d78.46000507369244!3d17.508848299297643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91c420d0b055%3A0xfa2c0b6d5571fc61!2sG%20R%20Mayoora!5e0!3m2!1sen!2sin!4v1733224910037!5m2!1sen!2sin&center=17.508848299297643,78.46500507369244",
    img1: "https://rightkeyrealty.in/images/mayoora-1.jpg",
    img2: "https://rightkeyrealty.in/images/mayoora-1.jpg",
    img3: "https://rightkeyrealty.in/images/mayoora-1.jpg",
    contactlink: "",
    projectTitle: "GR Mayoora",
    projectDescrp:
      "Sy.No:117 & 118 of Suchitra & Sy.No:63 of Petbasheerbad village, Near Godavari Homes, Medchal-Malkajgiri(Dist), T.S",
    mainHeader: "GR MAYOORA Near Godavari Homes, Medchal-Malkajgiri(Dist), T.S",
    mainDescrp: "Ready to move in 2&3 BHK Gated Community Apartments",
    mainCaption: "GR MAYOORA",
    acers: "X Acres",
    blocks: "X Blocks",
    bhk2sqrFT: "X sq.ft",
    bhk3sqrFT: "X sq.ft",
    floorsFlat: "X Floors",
    flatFacing: "X Facing",
    possesion: "Ready to Move",
    clubHouse: "Available",
    loanFacility: "Available",
    nearbySchools: "Schools nearby",
    nearbyColleges: "Colleges nearby",
    nearbyHospitals: "Hospitals nearby",
    nearbySupermarkets: "Supermarkets nearby",
    aboutProject: "About the project description goes here.",
  },
  {
    id: 2,
    locationLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.9720356264497!2d78.46000507369244!3d17.508848299297643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91c420d0b055%3A0xfa2c0b6d5571fc61!2sG%20R%20Mayoora!5e0!3m2!1sen!2sin!4v1733224910037!5m2!1sen!2sin&center=17.508848299297643,78.46500507369244",
    img1: "https://rightkeyrealty.in/images/mayoora-1.jpg",
    img2: "https://rightkeyrealty.in/images/mayoora-1.jpg",
    img3: "https://rightkeyrealty.in/images/mayoora-1.jpg",
    contactlink: "",
    projectTitle: "GR Mayoora",
    projectDescrp:
      "Sy.No:117 & 118 of Suchitra & Sy.No:63 of Petbasheerbad village, Near Godavari Homes, Medchal-Malkajgiri(Dist), T.S",
    mainHeader: "GR MAYOORA Near Godavari Homes, Medchal-Malkajgiri(Dist), T.S",
    mainDescrp: "Ready to move in 2&3 BHK Gated Community Apartments",
    mainCaption: "GR MAYOORA",
    // Added missing properties
    acers: "X Acres",
    blocks: "X Blocks",
    bhk2sqrFT: "X sq.ft",
    bhk3sqrFT: "X sq.ft",
    floorsFlat: "X Floors",
    flatFacing: "X Facing",
    possesion: "Ready to Move",
    clubHouse: "Available",
    loanFacility: "Available",
    nearbySchools: "Schools nearby",
    nearbyColleges: "Colleges nearby",
    nearbyHospitals: "Hospitals nearby",
    nearbySupermarkets: "Supermarkets nearby",
    aboutProject: "About the project description goes here.",
  },
];

// Ensure this is a valid container element in your HTML
const propertiesListContainer = document.querySelector(".propertyDetail_info");

// Function to create the property details HTML
function createPropertiesDetails(details) {
  return `
    <div class="mainProjectcontainer" data-property-id="${details.id}">
      <div class="locationContainer">
        <div class="mapContainer">
          <div id="map-container" style="width: 100%; height: 400px; border-radius: 12px; margin-bottom: 2rem;">
            <iframe 
              style="width: 100%; height: 100%; border-radius: 12px; border: none;" 
              src="${details.locationLink}" 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
        <div class="container_info">
          For sale
        </div>
        <div class="projectContainer">
          <div class="imgsContainer">
            <div class="mainImgcontainer">
              <img src="${details.img1}" alt="${details.projectTitle}" srcset="">  
            </div>
            <div class="seeAllcontainer">
              <p>See all</p>
            </div>
          </div>
          <div class="projectInfoContainer">
            <div class="infoHeadercontainer">
              <h3>${details.projectTitle}</h3>
              <p class="descrp">
                ${details.projectDescrp}
              </p>
            </div>
            <div class="secondaryImgs">
              <div class="imgsecContainer">
                <img src="${details.img2}" alt="${details.projectTitle}" srcset="">  
              </div>
              <div class="imgsecContainer">
                <img src="${details.img3}" alt="${details.projectTitle}" srcset="">  
              </div>
            </div>
            <div class="property-card__cta-button">
              <div class="property-card__cta-text">Contact</div>
              <div class="property-card__cta-icon"><i class="fa-regular fa-arrow-right"></i></div>
            </div>
          </div>
        </div>
      </div>
      <div class="projectdetails_Container">
        <div class="projectheader_Container">
          <div class="main_headerContainer">
            <h2>${details.mainHeader}</h2>
            <div class="property-card__share-section">
              <div class="property-card__share-text">Share</div>
              <div id="share-button" class="property-card__share-icon">
                <i style="cursor:pointer;" class="fa-light fa-share-nodes"></i>
              </div>
            </div>
          </div>
          <div class="caption_headerContainer">
            <h3 class="highlight">${details.mainDescrp}</h3>
            <p>Luxury Living at GR ${details.mainCaption}</p>
          </div>
        </div>
        <hr style="margin-top: 0.8rem;">
        <div class="projectflex_details">
          <div onclick="updateContent('Overview')" class="Overview active">
            Overview
          </div>
          <div onclick="updateContent('Amenities')" class="amientiesContainer">
            Amenities
          </div>
          <div onclick="updateContent('Location')" class="Locationhighlights">
            Location
          </div>
          <div onclick="updateContent('About')" class="aboutprojectContainer">
            About
          </div>
          <div class="property-card__cta-button">
            <div class="property-card__cta-text">Contact</div>
            <div class="property-card__cta-icon"><i class="fa-regular fa-arrow-right"></i></div>
          </div>
        </div>
        <hr>
        <div class="content_projectDetails">
          <!-- Content will be dynamically loaded here -->
        </div>
        <hr>
        <div class="projectmanager_contact">
          <div class="manager_heroContainer">
            <img src="assets/images/aravind_hero.jpg" alt="manager" srcset="">
          </div>
          <div class="manager_detailsContainer">
            <div class="manager_socail_icons">
              <i class="fa-brands fa-linkedin"></i>
            </div>
            <div class="manager_infoMaincontainer">
              <div class="manager_info">
                <h4>Aravind Reddy</h4>
                <p>Sales Manager</p>
              </div>
              <div class="contacts_container">
                <div class="contact_container">
                  <i class="fa-regular fa-phone"></i>
                  <a href="tel:+918885554050">8885554050</a>
                </div>
                <div class="contact_container">
                  <i class="fa-regular fa-envelope"></i>
                  <a href="mailto:aravind@digitalwin.in">aravind@digitalwin.in</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="nearby_properties">
          <div class="properties_headerContainer">
            <h2>Near By Properties</h2>
            <div class="properties_list">
              <!-- Placeholder for nearby properties -->
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Loop through all properties and append their details to the propertiesListContainer
propertiesDetails.forEach((property) => {
  const propertyCard = createPropertiesDetails(property);
  propertiesListContainer.innerHTML += propertyCard;
});

// On page load, display the first tab content and highlight it
window.onload = function () {
  updateContent("Overview"); // Ensure the string "Overview" is passed
};

// Function to update the content and highlight the active tab
function updateContent(section) {
  const contentDetails = document.querySelector(".content_projectDetails");
  const property = propertiesDetails[0]; // Assuming the first property

  const contentMap = {
    Overview: `
          <div class="overview_flex-col">
            <div class="flex-row">
              <h4>Project Name</h4>
              <p>${property.projectTitle}</p>
            </div>
            <div class="flex-row">
              <h4>Total AREA</h4>
              <p>${property.acers}</p>
            </div>
            <div class="flex-row">
              <h4>Total Blocks</h4>
              <p>${property.blocks}</p>
            </div>
            <div class="flex-row">
              <h4>2 BHK Size</h4>
              <p>${property.bhk2sqrFT}</p>
            </div>
            <div class="flex-row">
              <h4>3 BHK Size</h4>
              <p>${property.bhk3sqrFT}</p>
            </div>
            <div class="flex-row">
              <h4>Floors</h4>
              <p>${property.floorsFlat}</p>
            </div>
            <div class="flex-row">
              <h4>Facing</h4>
              <p>${property.flatFacing}</p>
            </div>
            <div class="flex-row">
              <h4>Possession</h4>
              <p>${property.possesion}</p>
            </div>
            <div class="flex-row">
              <h4>Club House</h4>
              <p>${property.clubHouse}</p>
            </div>
            <div class="flex-row">
              <h4>Loan Facility</h4>
              <p>${property.loanFacility}</p>
            </div>
          </div>`,
    Amenities: `<div class="amienties_flex-col">
            <div class="flex-col">
              <div class="flex-row">
                <i class="fa-solid fa-car"></i>
                <p>Car parking</p>
              </div>
              <div class="flex-row">
                <i class="fa-solid fa-transformer-bolt"></i>
                <p>TSSPDCL (Transformer, Electrical Panel Board and 3-Phase Energy meters)</p>
              </div>
              <div class="flex-row">
                <i class="fa-solid fa-house-window"></i>
                <p>Associate office rooms</p>
              </div>
              <div class="flex-row">
                <i class="fa-solid fa-child-reaching"></i>
                <p>Children's play area</p>
              </div>
              <div class="flex-row">
                <i class="fa-solid fa-table-tennis-paddle-ball"></i>
                <p>Table tennis</p>
              </div>
              <div class="flex-row">
                <i class="fa-solid fa-elevator"></i>
                <p>Two Lifts</p>
              </div>
              <div class="flex-row">
                <i class="fa-solid fa-road"></i>
                <p>14 feet entire building setback area can be utilized for walking</p>
              </div>
              <div class="flex-row">
                <i class="fa-solid fa-refrigerator"></i>
                <p>Generator</p>
              </div>
              <div class="flex-row">
                <i class="fa-solid fa-dumbbell"></i>
                <p>GYM area</p>
              </div>
            </div>
          </div>`,
    Location: `<div class="Location_highlightscontainer">
            <div class="flex-row">
              <div class="imgContainerLocation">
                <img src="https://cdn-icons-png.freepik.com/256/8074/8074788.png?semt=ais_hybrid" alt="schools" srcset="">
              </div>
              <div class="flex-cl">
                <h4>NEAR BY SCHOOLS</h4>
                <p>${property.nearbySchools}</p>
              </div>
            </div>
            <div class="flex-row">
              <div class="imgContainerLocation">
                <img src="https://cdn-icons-png.flaticon.com/256/4345/4345672.png" alt="colleges" srcset="">
              </div>
              <div class="flex-cl">
                <h4>NEAR BY COLLEGES</h4>
                <p>${property.nearbyColleges}</p>
              </div>
            </div>
            <div class="flex-row">
              <div class="imgContainerLocation">
                <img src="https://cdn-icons-png.freepik.com/256/4521/4521422.png?semt=ais_hybrid" alt="hospitals" srcset="">
              </div>
              <div class="flex-cl">
                <h4>NEAR BY HOSPITALS</h4>
                <p>${property.nearbyHospitals}</p>
              </div>
            </div>
            <div class="flex-row">
              <div class="imgContainerLocation">
                <img src="https://cdn-icons-png.freepik.com/512/7835/7835563.png" alt="supermarkets" srcset="">
              </div>
              <div class="flex-cl">
                <h4>NEAR BY SUPERMARKETS</h4>
                <p>${property.nearbySupermarkets}</p>
              </div>
            </div>
          </div>`,
    About: `<p id="about">
            ${property.aboutProject}
          </p>`,
  };

  // Set the content based on the section clicked
  contentDetails.innerHTML =
    contentMap[section] || "<p>Content not available.</p>";

  // Highlight the active section
  document.querySelectorAll(".projectflex_details > div").forEach((div) => {
    div.classList.remove("active"); // Remove the 'active' class
  });

  // Dynamically find the corresponding div by matching its class name
  const sectionClassMap = {
    Overview: "Overview",
    Amenities: "amientiesContainer",
    Location: "Locationhighlights",
    About: "aboutprojectContainer",
  };

  const targetClass = sectionClassMap[section]; // Get the mapped class name
  const activeDiv = document.querySelector(
    `.projectflex_details > .${targetClass}`
  );

  if (activeDiv) {
    activeDiv.classList.add("active"); // Add the 'active' class
  }

  // Find the corresponding div to highlight based on the section name
}
