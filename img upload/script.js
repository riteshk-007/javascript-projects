const picture = document.getElementById('pic');
const inputFile = document.getElementById('input-file');

inputFile.onchange = function(){
    picture.src = URL.createObjectURL(inputFile.files[0]);
};
