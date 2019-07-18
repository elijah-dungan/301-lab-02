'use-strict'

/**-----global variables */

/** -----objects----- */

function Img(imageUrl, title, description, keyword, horns) {
  this.imageUrl = imageUrl;
  this.title = title;
  this.description = description;
  this.keyword = keyword;
  this.horns = horns;
}

// TODO:
// Use AJAX, specifically $.get(), to read the provided JSON file.
// Each object should become a new instance of a constructor function. Refer to the data to determine the necessary properties.
// Use jQuery to make a copy of the HTML template of the photo component. For each object, fill in the duplicated template with its properties, then append the copy to the DOM.

$.get();