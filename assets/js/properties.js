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
    propertyLink: "",
    img1: "https://rightkeyrealty.in/images/mayoora-1.jpg",
    img2: "https://rightkeyrealty.in/images/mayoora-2.jpg",
    img3: "https://rightkeyrealty.in/images/mayoora-3.jpg",
  },
  {
    _id: 2,
    title: "Mayoora",
    address: "SR nagar",
    category: "commercial",
    projectHighlights: {
      amenities: "",
      squarefeet: "",
      highlights: "",
    },
    propertyLink: "",
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
    propertyLink: "",
    img1: "",
    img2: "",
    img3: "",
  },
];

function createPropertylist(products) {
  return `
     <div class="property_cardContainer">
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
                             <div class="property-card__share-icon"><i class="fa-light fa-share-nodes"></i></div>
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
                             <div class="property-card__highlight-tab-icon"><i class="fa-light fa-building"></i></div>
                             <div class="property-card__highlight-tab-icon"><i class="fa-light fa-building"></i></div>
                             <div class="property-card__highlight-tab-active">
                                 <div class="property-card__highlight-tab-active-text"><i class="fa-light fa-building"></i></div>
                             </div>
                         </div>
                         
                         <div class="property-card__description-section">
                             <div class="property-card__description-title">Square feet</div>
                             <p class="property-card__description-text">
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
const propertiesListContainer = document.querySelector(".properties_list");

propertiesList.forEach((property) => {
  const propertyCard = createPropertylist(property);
  propertiesListContainer.innerHTML += propertyCard;
});
