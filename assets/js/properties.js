const propertiesList = [
  {
    _id: 1,
    title: "Mayoora",
    address:
      "Sy.No:117 & 118 of Suchitra & Sy.No:63 of Petbasheerbad village, Near Godavari Home Medchal(Dist)MalkajgiriDist, T.S",
    category: "commercial",
    projectHighlights: {
      amenities: "reddy",
      squarefeet:
        "GR Mayoora, nestled in the highly sought-after location of Suchitra, stands as a testament to the rapid growth and development",
      highlights: "",
    },
    propertyLink: "property1.html",
    img1: "https://rightkeyrealty.in/images/mayoora-1.jpg",
    img2: "https://rightkeyrealty.in/images/mayoora-2.jpg",
    img3: "https://rightkeyrealty.in/images/mayoora-3.jpg",
  },
  {
    _id: 2,
    title: "Mayoora",
    address:
      "Sy.No:117 & 118 of Suchitra & Sy.No:63 of Petbasheerbad village, Near Godavari Home Medchal(Dist)MalkajgiriDist, T.S",
    category: "commercial",
    projectHighlights: {
      amenities:
        "GR Mayoora, nestled in the highly sought-after location of Suchitra, stands as a testament to the rapid growth and development",
      squarefeet:
        "GR Mayoora, nestled in the highly sought-after location of Suchitra, stands as a testament to the rapid growth and development",
      highlights: "GR Mayoora, nestled in the highly sought-after",
    },
    propertyLink: "property2.html",
    img1: "",
    img2: "",
    img3: "",
  },
  {
    _id: 3,
    title: "Mayoora",
    address: "SR nagar",
    category: "commercial",
    projectHighlights: {
      amenities: "",
      squarefeet: "",
      highlights: "",
    },
    propertyLink: "property3.html",
    img1: "",
    img2: "",
    img3: "",
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
                                  <i class="fa-light fa-building"></i>
                              </div>
                              <div 
                                  class="property-card__highlight-tab-icon" 
                                  data-property-id="${products._id}"
                                  data-title="Square Feet" 
                                  data-description="${
                                    products.projectHighlights.squarefeet ||
                                    "N/A"
                                  }"
                                  onclick="showHighlight(this)">
                                  <i class="fa-light fa-building"></i>
                              </div>
                              <div 
                                  class="property-card__highlight-tab-icon" 
                                  data-property-id="${products._id}"
                                  data-title="Highlights" 
                                  data-description="${
                                    products.projectHighlights.highlights ||
                                    "N/A"
                                  }"
                                  onclick="showHighlight(this)">
                                  <i class="fa-light fa-building"></i>
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

document.getElementById("share-button").addEventListener("click", async () => {
  const shareData = {
    title: "Beautiful Villa",
    text: "Check out this amazing property!",
    url: window.location.href, // Adjust to your property's URL
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
      alert("Property shared successfully!");
    } else {
      alert("Share feature is not supported in this browser.");
    }
  } catch (error) {
    console.error("Error sharing:", error);
  }
});
