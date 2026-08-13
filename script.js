var displayDiv = document.getElementById('image-display');
var previewPics = document.querySelectorAll('.preview-pic');
var originalText = 'Di chuột qua một hình ảnh bên dưới để hiển thị ở đây.';
var undoButton = document.getElementById('undo-button');

function updateImage(element) {
    var fullImageUrl = element.getAttribute('data-full');
    var altText = element.getAttribute('alt');
    displayDiv.innerHTML = '<img src="' + fullImageUrl + '" alt="' + altText + '">';
    displayDiv.style.backgroundImage = 'none';
}

function resetDisplay() {
    displayDiv.innerHTML = '<h2>' + originalText + '</h2>';
    displayDiv.style.backgroundImage = '';
}

previewPics.forEach(function(img) {
    img.addEventListener('mouseenter', function() {
        updateImage(this);
    });
});

undoButton.addEventListener('click', function() {
    resetDisplay();
});