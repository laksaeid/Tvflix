"use strict";


const addEventOnElements = function (elements, eventType, callback) {
  for(const elem of elements) elem.addEventListener(eventType, callback);
}


// toggle search box in small screens

const searchBox = document.querySelector('[search-box]');
const searchTogglers = document.querySelectorAll('[search-toggler]');
addEventOnElements(searchTogglers, 'click', () => {
  searchBox.classList.toggle('active')
})