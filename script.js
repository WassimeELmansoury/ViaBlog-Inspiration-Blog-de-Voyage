// get data by id 
let titre = document.getElementById("titre");
let description = document.getElementById("des");
let note = document.getElementById("note");
let category = document.getElementById("cat");
let image = document.getElementById("img");

let array=[];

function addDATA(){
    let obj = {
        title :titre.valule,
        description : description.valule,
        note : note.valule,
        category : category.valule,
        image : image.valule,

    }
    array.push(obj);

}

