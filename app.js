// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - removes class
// toggle - toggles class

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');


navToggle.addEventListener('click', function(){
    //if (links.classList.contains('show-link')){
    //    links.classList.remove('show-links');
    //} else {
    //    links.classList.add('show-links');
    //}
    
    links.classList.toggle('show-links');
});