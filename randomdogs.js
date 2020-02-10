const DOG_URL_START = "https://dog.ceo/api/breed/";
const DOG_URL_END = "/images/random";


const dogs = document.querySelector(".dog-container");
function addNewDog(){
    var breed = document.getElementById('dog-breed').value;

    const promise = fetch(DOG_URL_START+breed+DOG_URL_END);

    promise
    .then(function(response){        
        const processingPromise= response.json();
        console.log(status);
        return processingPromise;

    })
    .then(function(processedResponse){
        //creates image element
        const img = document.createElement('img');

        //uses the message portion from JSON to grab img
        img.src = processedResponse.message;

        //adds alt text to image
        img.alt = "a cutie";
        //adds class name to image
        img.classList.add("dog-item");

        //appends img to element with class "dogs"
        dogs.appendChild(img);
    });

}

document.querySelector(".add-dog").addEventListener("click", addNewDog);

