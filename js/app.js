'use-strict'

/* -----TODO:-----
Create a <select> element which contains unique <option> elements extracted dynamically from the JSON file, one for each keyword.
Use an event handler to respond when the user chooses an option from the select menu. Hide all of the images, then show those whose keyword matches the option chosen.

/* -----global variables----- */

/* -----objects----- */

function Img(img) {
  this.image_url = img.image_url;
  this.title = img.title;
  this.description = img.description;
  this.keyword = img.keyword;
  this.horns = img.horns;
}

Img.allImgs = [];

Img.prototype.render = function() {
  $('main').append('<div class="clone"></div>'); // appends html to the main element
  let imgClone = $('div[class="clone"]'); //

  let imgHtml = $('#photo-template').html(); //

  imgClone.html(imgHtml);

  imgClone.find('h2').text(this.title);
  imgClone.find('img').attr('src', this.image_url);
  imgClone.find('p').text(this.description);
  imgClone.removeClass('clone');
  imgClone.attr('class', this.keyword);
}

Img.readJson = () => {
  $.get('https://elijah-dungan.github.io/data/page-1.json', 'json') // gets json data
    .then(data => { // data is the parameter of the function
      data.forEach(item => { // creates array from the data and uses forEach
        Img.allImgs.push(new Img(item)); // a new instance based on the array is created
      })
    })
    .then(Img.loadImgs);
}

Img.loadImgs = () => {
  Img.allImgs.forEach(img => img.render());
}

/* -----executables----- */

$(() => Img.readJson());
console.log(Img.allImgs);
