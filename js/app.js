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
  $('main').append('<section class="clone"></section>'); // appends html to the main element
  let imgClone = $('section[class="clone"]'); //

  let imgHtml = $('#photo-template').html(); //

  imgClone.html(imgHtml);

  imgClone.find('h2').text(this.title);
  imgClone.find('img').attr('src', this.image_url);
  imgClone.find('p').text(this.description);
  imgClone.removeClass('clone');
  imgClone.attr('class', this.keyword);
  $('select').append(`<option value="${this.keyword}">${this.keyword}</option>`);
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

/* -----event handler----- */

// function hide() {
//   var divEl = document.getElementsByTagName('div');
//   for(var i = 0; i < Img.allImgs.length; i ++) {
//     if(event.target.value !== Img.allImgs[i].keyword) {
//       divEl[i].className = 'hide';
//     } else if(event.target.value === Img.allImgs[i].keyword) {
//       divEl[i].className = event.target.value;
//     }
//   }
// }

/* -----event listener ----- */

// var selectEl = document.getElementById('select');
// selectEl.addEventListener('change', hide);

/* ----jquery event listener/handler----- */

/* -----executables----- */

$(() => Img.readJson());

$('select').on('change', function() {
  let $selection = $(this).val();
  $('section').hide();
  $(`section[class="${$selection}"]`).show();
});

// console.log(Img.allImgs);
