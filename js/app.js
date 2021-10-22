var Sections = Array.from(document.querySelectorAll('section'));
var ListItem = document.getElementById("navbar__list");

// creat a lits item in Html file
function CreateListItem() {
    for (section of Sections){
        NameItem = section.getAttribute("data-nav");
        LinkSection = section.getAttribute("id");
        fItem = document.createElement("li");
        fItem.innerHTML = `<a class='menu__link' href='#${LinkSection}' data-nav='${LinkSection}'>${NameItem}</a>`; // creating link in list item
        ListItem.appendChild(fItem);
    }
}
// this function is adding a style states to the navbar items
window.onscroll = function() {
	document.querySelectorAll("section").forEach(function(activeItem) {
  var activeLink = ListItem.querySelector(`[data-nav=${activeItem.id}]`);
  // geting and check the area of the section
	if(activeItem.getBoundingClientRect().top >= -400 && activeItem.getBoundingClientRect().top <= 150){

    activeItem.classList.add("your-active-class");
    activeLink.classList.add("active-link");

    } else {
      activeItem.classList.remove("your-active-class");
      activeLink.classList.remove("active-link");
    }
	});
}

// this code make the page smooth
ListItem.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.dataset.nav) {
    document
      .getElementById(`${event.target.dataset.nav}`)
      .scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      location.hash = `${event.target.dataset.nav}`;
    }, 200);
  }
});
CreateListItem();