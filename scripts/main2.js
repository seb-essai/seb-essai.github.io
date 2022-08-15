



let myImage = document.querySelector('img');

myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/im1.jpg') {
      myImage.setAttribute('src', 'images/im2.jpg');
    } else {
      myImage.setAttribute('src', 'images/im1.jpg');
    }
});