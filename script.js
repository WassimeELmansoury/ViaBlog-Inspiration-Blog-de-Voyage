// get data by id 
let titre = document.getElementById("titre");
let Destination = document.getElementById("des");
let auteur = document.getElementById("auteur");
let time = document.getElementById("time");
let views = document.getElementById("views");
let image = document.getElementById("image");
let submit = document.getElementById("submit");
let form = document.getElementById('Destination_page');
let array=[];

form.addEventListener("submit",function (e){
    e.preventDefault();
    
    let obj = {
        title :titre.value,
        Destination : Destination.value,
        auteur : auteur.value,
        time : time.value,
        views : views.value,
        image : image.value,

    }
    array.push(obj);
    showData();
    clearData();
});

function showData() {
    let tableau = '';
    for (let i =0 ; i< array.length ; i++){
        tableau +=`
        <section class="d-flex justify-content-center mt-3">
            <div class="card w-[90%] w-md-75  overflow-hidden ">
                <img  src=${array[i].image} alt="StockCake-Mountain_Explorer_Ascending-3520515-standard" class="card-img-top  lg:h-[300px] w-full object-cover">
                <div class="card-body bg-secondary bg-opacity-10 d-flex flex-md-row justify-content-between">
                <div>
                    <h6>${array[i].title}</h6>
                    <p><em>${array[i].auteur}</em></p>
                </div>
                <div class="d-flex gap-3 gap-md-6 ">
                    <div class="d-flex gap-1 gap-md-2">
                        <img src="./icons/location.png" alt="location" style="width: 15px; height: 18px;">
                        <p><em>${array[i].Destination}</em></p>
                    </div>
                    <div class="d-flex gap-1">
                        <img src="./icons/time.png" alt="time" style="width: 15px; height: 18px;">
                        <p><em>${array[i].time}</em></p>
                    </div>
                    <div class="d-flex gap-1">
                        <img src="./icons/vue.png" alt="vue" style="width: 15px; height: 18px;">
                        <p><em>${array[i].views}</em></p>
                    </div>
                </div>
            </div>
        </div>
    </section>

        `

    }
    document.getElementById("content").innerHTML= tableau;
   
}
function clearData(){
    titre.value='';
    auteur.value='';
    Destination.value='';
    time.value='';
    views.value='';
    image.value='';
}

