(function(){

    "use strict";

    const detailsForm = document.querySelector("#Destination_form");

detailsForm.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(e) {
  e.preventDefault();

  const destName = e.target.elements["name"].value;
  const destLocation = e.target.elements["Location"].value;
  const destPhoto = e.target.elements["Photos"].value;
  const destDescription = e.target.elements["Description"].value;

  for (var i = 0; i < detailsForm.elements.length; i++) {
    detailsForm.elements[i].value = "";
  }

  const destCard = createDestinationCard(destName, destLocation, destPhoto, destDescription);

  let wishlistItem = document.getElementById("Destination container");

  if (wishlistItem.children.length === 0) {
    document.getElementById("title").innerHTML = "My Wish List";
  }

  wishlistItem.appendChild(destCard);
}

function createDestinationCard(name, location, photo, description) {
  var card = document.createElement("div");
  card.className = "card";

  let img = document.createElement("img");
  img.setAttribute("alt", name);

  const constantPhotoUrl = "depositphotos_146980809-stock-photo-which-way-to-go-road.jpg";

  if (photo.length === 0) {
    img.setAttribute("src", constantPhotoUrl);
  } else {
    img.setAttribute("src", photo);
  }

  card.appendChild(img);

  const cardbody = document.createElement("div");
  cardbody.className = "card-body";

  const cardtitle = document.createElement("h3");
  cardtitle.innerHTML = name;
  cardbody.appendChild(cardtitle);

  const cardSubtitle = document.createElement("h4");
  cardSubtitle.innerHTML = location;
  cardbody.appendChild(cardSubtitle);

  if (description.length !== 0) {
    const cardDescription = document.createElement("p");
    cardDescription.className = "card-text";
    cardDescription.innerText = description;
    cardbody.appendChild(cardDescription);
  }

  const cardDeleteBtn = document.createElement("button");
  cardDeleteBtn.innerText = "remove";

  cardDeleteBtn.addEventListener("click", removeDestination);
  cardbody.appendChild(cardDeleteBtn);

  card.appendChild(cardbody);

  return card;
}

function removeDestination(e) {
  let card = e.target.parentElement.parentElement;
  card.remove();
}


var edit = document.createElement(button)
edit.innerHTML = "EDIT";
edit.addEventListener("click", editDestination)
card.appendChild(edit)

function editDestination(e){
    e.preventDefault()

    let card = e.target.parentElement.parentElement 
}

})();

