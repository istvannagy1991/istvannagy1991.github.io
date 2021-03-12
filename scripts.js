let data1 = {
    photo: 'images/atom.jpg',
    title: 'Atom',
    description: 'Megmutatja hogyan nez ki egy atom'
  };
let data2 = {
    photo: 'images/gyorsito.jpg',
    title: 'Gyorsító',
    description: 'Gyorsító belülről'
  };
let data3 = {
    photo: 'images/fenyo.jpg',
    title: 'Fenyő',
    description: 'Néhány fenyőfa'
  }; 
let data4 = {
    photo: 'images/hegy.jpg',
    title: 'Hegy',
    description: 'Ez egy hegy'
  };
let data5 = {
    photo: 'images/part.jpg',
    title: 'Part',
    description: 'Egy napos tengerpart'
  };
let array = [data1,data2,data3,data4,data5]
let currentPhoto = 0;

let loadPhoto = (currentPhoto) => {
    $('#photo').attr('src', array[currentPhoto].photo);
    // ...
  }
loadPhoto(currentPhoto);


$('#right').click(() => {
    if(currentPhoto< array.length){currentPhoto++;}
    loadPhoto(currentPhoto);
    $('#small').css('width',$('#big').css('width'))
  })
  $('#left').click(() => {
    if(currentPhoto>1){currentPhoto--;}
    loadPhoto(currentPhoto);
    $('#small').css('width',$('#big').css('width'))
  })

  array.forEach(element => {
    $('#small').append(`<li>${array[element].photo}</li>`)
    
  });
