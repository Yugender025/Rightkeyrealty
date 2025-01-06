const propertiesList = [
  {
    _id: 1,
    title: "Mayoora",
    address:
      "Sy.No:117 & 118 of Suchitra & Sy.No:63 of Petbasheerbad village, Near Godavari Home Medchal(Dist)MalkajgiriDist, T.S",
    category: "commercial",
    projectHighlights: {
      amenities:
        "GR Mayoora, nestled in the highly sought-after location of Suchitra, stands as a testament to the rapid growth and development",
      squarefeet:
        "GR Mayoora, nestled in the highly sought-after location of Suchitra, stands as a testament to the rapid growth and development",
      highlights: "East and west",
    },
    propertyLink: "property1.html",
    img1: "https://rightkeyrealty.in/images/mayoora-1.jpg",
    img2: "https://rightkeyrealty.in/images/mayoora-2.jpg",
    img3: "https://rightkeyrealty.in/images/mayoora-3.jpg",
  },
  {
    _id: 2,
    title: "Kapil Business park",
    address:
      "Sy.No:117 & 118 of Suchitra & Sy.No:63 of Petbasheerbad village, Near Godavari Home Medchal(Dist)MalkajgiriDist, T.S",
    category: "commercial",
    projectHighlights: {
      amenities:
        "GR Mayoora, nestled in the highly sought-after location of Suchitra, stands as a testament to the rapid growth and development",
      squarefeet:
        "GR Mayoora, nestled in the highly sought-after location of Suchitra, stands as a testament to the rapid growth and development",
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
    address:
      "Sy.No:117 & 118 of Suchitra & Sy.No:63 of Petbasheerbad village, Near Godavari Home Medchal(Dist)MalkajgiriDist, T.S",
    category: "Residential",
    projectHighlights: {
      amenities:
        "GR Mayoora, nestled in the highly sought-after location of Suchitra, stands as a testament to the rapid growth and development",
      squarefeet:
        "GR Mayoora, nestled in the highly sought-after location of Suchitra, stands as a testament to the rapid growth and development",
      highlights: "GR Mayoora, nestled in the highly sought-after",
    },
    propertyLink: "property3.html",
    img1: "assets/images/vrinfra1.jpeg",
    img2: "assets/images/vrinfra2.jpeg",
    img3: "assets/images/vrinfra1.jpeg",
  },
  {
    _id: 4,
    title: "Urbanrise",
    address:
      "Sy.No:117 & 118 of Suchitra & Sy.No:63 of Petbasheerbad village, Near Godavari Home Medchal(Dist)MalkajgiriDist, T.S",
    category: "Residential",
    projectHighlights: {
      amenities:
        "GR Mayoora, nestled in the highly sought-after location of Suchitra, stands as a testament to the rapid growth and development",
      squarefeet:
        "GR Mayoora, nestled in the highly sought-after location of Suchitra, stands as a testament to the rapid growth and development",
      highlights: "GR Mayoora, nestled in the highly sought-after",
    },
    propertyLink: "property4.html",
    img1: "assets/images/urbanrise1.webp",
    img2: "assets/images/urbanrise2.webp",
    img3: "assets/images/urbanrise3.webp",
  },
  {
    _id: 5,
    title: "Myfair",
    address:
      "Sy.No:117 & 118 of Suchitra & Sy.No:63 of Petbasheerbad village, Near Godavari Home Medchal(Dist)MalkajgiriDist, T.S",
    category: "Residential",
    projectHighlights: {
      amenities:
        "GR Mayoora, nestled in the highly sought-after location of Suchitra, stands as a testament to the rapid growth and development",
      squarefeet:
        "GR Mayoora, nestled in the highly sought-after location of Suchitra, stands as a testament to the rapid growth and development",
      highlights: "GR Mayoora, nestled in the highly sought-after",
    },
    propertyLink: "property5.html",
    img1: "assets/images/Villa.jpg",
    img2: "assets/images/Villa.jpg",
    img3: "assets/images/Villa.jpg",
  },
  {
    _id: 6,
    title: "Hallmark",
    address:
      "Sy.No:117 & 118 of Suchitra & Sy.No:63 of Petbasheerbad village, Near Godavari Home Medchal(Dist)MalkajgiriDist, T.S",
    category: "Residental",
    projectHighlights: {
      amenities:
        "GR Mayoora, nestled in the highly sought-after location of Suchitra, stands as a testament to the rapid growth and development",
      squarefeet:
        "GR Mayoora, nestled in the highly sought-after location of Suchitra, stands as a testament to the rapid growth and development",
      highlights: "GR Mayoora, nestled in the highly sought-after",
    },
    propertyLink: "property6.html",
    img1: "assets/images/Asset 1.png",
    img2: "assets/images/Asset 2.png",
    img3: "assets/images/Asset 3.png",
  },
  {
    _id: 7,
    title: "Jewel park",
    address:
      "Sy.No:117 & 118 of Suchitra & Sy.No:63 of Petbasheerbad village, Near Godavari Home Medchal(Dist)MalkajgiriDist, T.S",
    category: "Residential",
    projectHighlights: {
      amenities:
        "GR Mayoora, nestled in the highly sought-after location of Suchitra, stands as a testament to the rapid growth and development",
      squarefeet:
        "GR Mayoora, nestled in the highly sought-after location of Suchitra, stands as a testament to the rapid growth and development",
      highlights: "GR Mayoora, nestled in the highly sought-after",
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
                                  data-title="Amenities" 
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
