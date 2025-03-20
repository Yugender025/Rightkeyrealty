const propertiesList = [
  {
    _id: 1,
    title: "GR Mayoora",
    address:
      "Sy.No:117 & 118 of Suchitra & Sy.No:63 of Petbasheerbad village, Near Godavari Home Medchal(Dist)MalkajgiriDist, T.S",
    category: "Residential",
    projectHighlights: {
      amenities:
        "GR Mayoora, nestled in the highly sought-after location of Suchitra, stands as a testament to the rapid growth and development",
      squarefeet:
        "The property offers a spacious area ranging between 1435 SFT to 1565 SFT",
      highlights: "East and west",
    },
    propertyLink: "property1.html",
    img1: "assets/images/mayoora-1.jpg",
    img2: "assets/images/mayoora-2.jpg",
    img3: "assets/images/mayoora-3.jpg",
  },
  {
    _id: 2,
    title: "Kapil Business park",
    address:
      "sy.no.1/1 Plot no, CFC-1, opposite: HP petrol bunk, Airport Approach Road, Raviryal, Telangana 500069",
    category: "Commercial",
    projectHighlights: {
      amenities:
        "Kapil Business Park, near Hyderabad's international airport, is Shamshabad's top commercial real estate project.",
      squarefeet: "110,000 sq. ft. per floor",
      highlights: "East and west",
    },
    propertyLink: "property2.html",
    img1: "assets/images/kapil-1.png",
    img2: "assets/images/kapil-1.png",
    img3: "assets/images/kapil-2.jpg",
  },
  {
    _id: 3,
    title: "VR Infra",
    address: "Krishanaja Hills, Bachupally, Medchal-Malkajgiri(Dist), T.S",
    category: "Residential",
    projectHighlights: {
      amenities:
        "VR Vikyath Iconia, ituated in the highly sought-after area near Krishnaja Hills, Bachupally, stands as a testament to the rapid growth",
      squarefeet: "The property offers a spacious area ranging 1150SFT",
      highlights: "EAST-WEST facing",
    },
    propertyLink: "property3.html",
    img1: "assets/images/vrinfra1.jpeg",
    img2: "assets/images/vrinfra2.jpeg",
    img3: "assets/images/vrinfra1.jpeg",
  },
  {
    _id: 4,
    title: "Urbanrise",
    address: "Survey No. 178 to 181, Ameenpur, Miyapur, Hyderabad, T.S 502032",
    category: "Residential",
    projectHighlights: {
      amenities:
        " This expansive 12.1-acre development features five high-rise towers, each soaring to 42 floors, providing residents",
      squarefeet:
        "The property offers a spacious area ranging between 2BHK 1100SFT - 1195SFT AND 3BHK 1435SFT - 1565SFT",
      highlights: "EAST & WEST",
    },
    propertyLink: "property4.html",
    img1: "assets/images/urbanrise1.webp",
    img2: "assets/images/urbanrise2.webp",
    img3: "assets/images/urbanrise3.webp",
  },
  {
    _id: 5,
    title: "Myfair",
    address: "Kollur, Velimala, West Hyderabad, Hyderabad T.S",
    category: "Residential",
    projectHighlights: {
      amenities:
        "Greenmark Mayfair spans 63 acres with 2 blocks (A & B) offering spacious 2BHK (1100-1195 SFT) and 3BHK (1435-1565 SFT) units",
      squarefeet: "2BHK: 1100-1195 SFT and 3BHK: 1435-1565 SFT",
      highlights: "Available in East and West-facing options.",
    },
    propertyLink: "property5.html",
    img1: "assets/images/myfair.png",
    img2: "assets/images/myfair2.png",
    img3: "assets/images/myfair3.png",
  },
  {
    _id: 6,
    title: "Hallmark",
    address: "Velimela Rd, Velmala, Hyderabad, Telangana 502300",
    category: "Residental",
    projectHighlights: {
      amenities:
        "Hallmark 5A is spread across 5.35 acres, offering spacious 3BHK units (1435-1565 SFT) with G+5 floors and cellar parking. ",
      squarefeet: "3BHK: 1435-1565 SFT",
      highlights: "Available in East and West-facing options.",
    },
    propertyLink: "property6.html",
    img1: "assets/images/Asset 1.png",
    img2: "assets/images/Asset 2.png",
    img3: "assets/images/Asset 3.png",
  },
  {
    _id: 7,
    title: "Nirvana's Nandanavanam",
    address: "Bachupally, North Hyderabad, Hyderabad",
    category: "Residential",
    projectHighlights: {
      amenities:
        "Nirvana's Nandanavanam – C+G+5 floors, 84 premium 2 & 3 BHK units (1185-1770 sq. ft) on 2 acres with 40% open space, gardens & walking trails.",
      squarefeet:
        "2 BHK: 1185 - 1425 sq.ft, 3 BHK: 1600 - 1770 sq. ft.Premium Finishes",
      highlights:
        "Available in East Facing Units, West Facing Units,North Facing Units",
    },
    propertyLink: "property7.html",
    img1: "assets/images/jewelpark.jpeg",
    img2: "assets/images/jewelpark.jpeg",
    img3: "assets/images/jewelpark.jpeg",
  },
];

function createPropertylist(products) {
  // Create a unique identifier for this specific property card
  const uniqueId = `property-${products._id}`;

  return `
     <div class="property_cardContainer" data-property-id="${products._id}">
                <div class="property_imgContainer">
                    <div class="main_ImgContainer">
                        <img class="property-card__main-image" width="250" height="250" src="${
                          products.img1
                        }" />
                    </div>
                    <div class="property-card__thumbnails">
                        <div class="property-card__thumbnail">
                            <img class="property-card__thumbnail-image" width="120" height="120" src="${
                              products.img2
                            }" />
                        </div>
                        <div class="property-card__thumbnail">
                            <img class="property-card__thumbnail-image" width="120" height="120" src="${
                              products.img3
                            }" />
                        </div>
                    </div>
                </div>

                <div class="info_container_flex">
                    <div class="title_Container">
                        <h3>${products.title}</h3>
                         <div class="property-card__share-section">
                             <div class="property-card__share-text">Share</div>
                             <div id="share-button" class="property-card__share-icon"><i style="cursor:pointer;" class="fa-light fa-share-nodes"></i></div>
                         </div>     
                      </div>
                      <div class="property-card__location-section">
                         <div class="property-card__location-icon"><i class="fa-light fa-location-dot"></i></div>
                         <p class="property-card__location-details">
                            ${products.address}
                         </p>
                      </div> 
                      <div class="property-card__highlights">
                          <div class="property-card__highlight-tabs">
                              <div 
                                  class="property-card__highlight-tab-icon" 
                                  data-property-id="${products._id}"
                                  data-title="Overview" 
                                  data-description="${
                                    products.projectHighlights.amenities ||
                                    "N/A"
                                  }"
                                  onclick="showHighlight(this)">
                                  <i class="fa-regular fa-buildings"></i>
                              </div>
                              <div b 
                                  class="property-card__highlight-tab-icon" 
                                  data-property-id="${products._id}"
                                  data-title="Square Feet" 
                                  data-description="${
                                    products.projectHighlights.squarefeet ||
                                    "N/A"
                                  }"
                                  onclick="showHighlight(this)">
                                  <i class="fa-regular fa-square"></i>
                              </div>
                              <div 
                                  class="property-card__highlight-tab-icon" 
                                  data-property-id="${products._id}"
                                  data-title="Facing" 
                                  data-description="${
                                    products.projectHighlights.highlights ||
                                    "N/A"
                                  }"
                                  onclick="showHighlight(this)">
                                  <i class="fa-regular fa-thin fa-distribute-spacing-vertical"></i>
                              </div>
                          </div>
                          
                          <div class="property-card__description-section">
                              <div class="property-card__description-title" id="description-title-${
                                products._id
                              }">Square Feet</div>
                              <p class="property-card__description-text" id="description-text-${
                                products._id
                              }">
                                  ${
                                    products.projectHighlights.squarefeet ||
                                    "N/A"
                                  }
                              </p>
                          </div>
                      </div>
                      <div class="property-card__cta-button">
                         <div class="property-card__cta-text"><a href="${
                           products.propertyLink
                         }">View property</div>
                         <div class="property-card__cta-icon"><i class="fa-regular fa-arrow-right"></i></div>
                      </div></a>
                </div>
            </div>
  `;
}

function filterProperty(category) {
  const propertyGrid = document.getElementById("propertiesgrid");
  propertyGrid.innerHTML = "";

  const filteredProperties =
    category === "all"
      ? propertiesList
      : propertiesList.filter((products) => products.category === category);

  filteredProperties.forEach((products) => {
    propertyGrid.innerHTML += createPropertylist(products);
  });
}
// Add click event listeners to filter buttons
document.querySelectorAll(".filter-btn").forEach((button) => {
  button.addEventListener("click", () => {
    // Update active button
    document.querySelector(".filter-btn.active").classList.remove("active");
    button.classList.add("active");

    // Filter posts
    filterProperty(button.dataset.category);
  });
});

// //search functionality
// // Get the search input element
// const searchInput = document.querySelector(".search-bar input");

// // Function to filter properties based on search input
// function searchProperties(searchTerm) {
//   const propertyGrid = document.getElementById("propertiesgrid");
//   searchTerm = searchTerm.toLowerCase().trim();

//   // If search is empty, show all properties
//   if (searchTerm === "") {
//     propertyGrid.innerHTML = "";
//     propertiesList.forEach((property) => {
//       propertyGrid.innerHTML += createPropertylist(property);
//     });
//     return;
//   }

//   // Filter properties based on search criteria
//   const filteredProperties = propertiesList.filter((property) => {
//     return (
//       // Search in title
//       property.title.toLowerCase().includes(searchTerm) ||
//       // Search in address
//       property.address.toLowerCase().includes(searchTerm) ||
//       // Search in amenities
//       property.projectHighlights.amenities.toLowerCase().includes(searchTerm) ||
//       // Search in square feet
//       property.projectHighlights.squarefeet
//         .toLowerCase()
//         .includes(searchTerm) ||
//       // Search in highlights
//       property.projectHighlights.highlights.toLowerCase().includes(searchTerm)
//     );
//   });

//   // Update the display with filtered results
//   propertyGrid.innerHTML = "";
//   if (filteredProperties.length > 0) {
//     filteredProperties.forEach((property) => {
//       propertyGrid.innerHTML += createPropertylist(property);
//     });
//   } else {
//     propertyGrid.innerHTML = `
//       <div class="no-results">
//         <h3>No properties found matching "${searchTerm}"</h3>
//         <p>Try different search terms or browse all properties.</p>
//       </div>
//     `;
//   }
// }

// // Add event listener for real-time search with debounce
// searchInput.addEventListener(
//   "input",
//   debounce((e) => {
//     searchProperties(e.target.value);
//   }, 300)
// );

// // Debounce function to prevent excessive updates during search
// function debounce(func, wait) {
//   let timeout;
//   return function executedFunction(...args) {
//     const later = () => {
//       clearTimeout(timeout);
//       func(...args);
//     };
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//   };
// }

function showHighlight(tabElement) {
  // Get the property ID and details from data attributes
  const propertyId = tabElement.getAttribute("data-property-id");
  const title = tabElement.getAttribute("data-title");
  const description = tabElement.getAttribute("data-description");

  // Find the specific description elements for this property
  const descriptionTitleElement = document.getElementById(
    `description-title-${propertyId}`
  );
  const descriptionTextElement = document.getElementById(
    `description-text-${propertyId}`
  );

  // Update the content dynamically
  if (descriptionTitleElement && descriptionTextElement) {
    descriptionTitleElement.innerHTML = `<h4>${title}</h4>`;
    descriptionTextElement.innerText = description;
  }

  // Remove active class from all tabs within this property card
  const propertyCard = tabElement.closest(".property_cardContainer");
  if (propertyCard) {
    const tabs = propertyCard.querySelectorAll(
      ".property-card__highlight-tab-icon"
    );
    tabs.forEach((tab) =>
      tab.classList.remove("property-card__highlight-tab-active")
    );

    tabElement.classList.add("property-card__highlight-tab-active");
  }
}

window.onload = function () {
  const propertyCards = document.querySelectorAll(".property_cardContainer");
  propertyCards.forEach((card) => {
    const defaultTab = card.querySelector(
      ".property-card__highlight-tab-icon:nth-child(1)"
    );
    if (defaultTab) {
      defaultTab.click(); // Simulate a click to initialize
    }
  });
};
const propertiesListContainer = document.querySelector(".properties_list");

propertiesList.forEach((property) => {
  const propertyCard = createPropertylist(property);
  propertiesListContainer.innerHTML += propertyCard;
});
//share-button

// Add this to your JavaScript file
document.addEventListener("DOMContentLoaded", () => {
  // Select all share sections
  const shareSections = document.querySelectorAll(
    ".property-card__share-section"
  );

  shareSections.forEach((section) => {
    const shareButton = section.querySelector(".property-card__share-icon");
    const propertyId = section.dataset.propertyId;

    const getShareData = (id) => ({
      title: `Beautiful Villa ${id}`,
      text: `Check out this amazing property! (Property #${id})`,
      url: `${window.location.href}?property=${id}`,
    });

    shareButton.addEventListener("click", async () => {
      const shareData = getShareData(propertyId);

      try {
        if (navigator.share) {
          await navigator.share(shareData);
          console.log(`Property ${propertyId} shared successfully!`);
        } else {
          // Fallback for browsers that don't support Web Share API
          const fallbackShare = () => {
            const tempInput = document.createElement("input");
            tempInput.value = shareData.url;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand("copy");
            document.body.removeChild(tempInput);

            alert("Link copied to clipboard!");
          };

          fallbackShare();
        }
      } catch (error) {
        console.error(`Error sharing property ${propertyId}:`, error);
        alert("Unable to share at this time. Please try again later.");
      }
    });
  });
});
// document.addEventListener("DOMContentLoaded", () => {
//   const shareSections = document.querySelectorAll(
//     ".property-card__share-section"
//   );

//   shareSections.forEach((section) => {
//     const shareButton = section.querySelector(".property-card__share-icon");
//     // Get the property ID from the parent container
//     const propertyContainer = section.closest(".property_cardContainer");
//     const propertyId = propertyContainer
//       ? propertyContainer.dataset.propertyId
//       : null;

//     const getShareData = (id) => ({
//       title: `${
//         propertiesList.find((p) => p._id.toString() === id)?.title || "Property"
//       }`,
//       text: `Check out this amazing property!`,
//       url: `${window.location.href}?property=${id}`,
//     });

//     shareButton.addEventListener("click", async () => {
//       if (!propertyId) {
//         console.error("Missing property ID for section:", section.outerHTML);
//         alert("Unable to share: Missing property information");
//         return;
//       }

//       const shareData = getShareData(propertyId);

//       try {
//         if (navigator.share) {
//           await navigator.share(shareData);
//           console.log(`Property ${propertyId} shared successfully!`);
//         } else {
//           // Fallback for browsers that don't support Web Share API
//           const fallbackShare = () => {
//             const tempInput = document.createElement("input");
//             tempInput.value = shareData.url;
//             document.body.appendChild(tempInput);
//             tempInput.select();
//             document.execCommand("copy");
//             document.body.removeChild(tempInput);

//             alert("Link copied to clipboard!");
//           };

//           fallbackShare();
//         }
//       } catch (error) {
//         console.error(`Error sharing property ${propertyId}:`, error);
//         alert("Unable to share at this time. Please try again later.");
//       }
//     });
//   });
// });
