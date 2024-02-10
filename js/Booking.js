const carousel = document.getElementsByClassName("carousel")[0];
const leftArrow = document.getElementById("left");
const rightArrow = document.getElementById("right");

const width = screen.width;
const carouselWidth = width*0.8

leftArrow.addEventListener("click",()=>{
    carousel.scrollLeft -= carouselWidth+60;
   
});
rightArrow.addEventListener("click",()=>{
    carousel.scrollLeft += carouselWidth+60;
});
//  *******************************************************************************
//                             save form data at local storage 
//  *******************************************************************************

const username = document.getElementById("name");
const numberOfPeople = document.getElementById("numberOfPeople");
const time = document.getElementById("time");
const date = document.getElementById("date");
const anySpecialRequests = document.getElementById("anySpecialRequests");
const Reserve = document.getElementById("Reserve");
Reserve.addEventListener("click",()=>{
    let message="";
    username.value.length > 0 ? null : message+= "name is required \n";
    numberOfPeople.value.length > 0 ? null : message+= "Number Of People is required \n";
    time.value.length > 0 ? null : message+= "time is required \n";
    date.value.length > 0 ? null : message+= "date is required \n";
    Number(numberOfPeople.value) != 0 ? null : message+= "minimum number of people is 1 \n";

    if(message.length == 0){
        let order = {
            username : username.value,
            numberOfPeople : numberOfPeople.value,
            time : time.value,
            date : date.value,
            anySpecialRequests : anySpecialRequests.value,
            checkedValue : document.querySelector('input[name="order"]:checked').value
        }
        localStorage.setItem("order",JSON.stringify(order));
    }else{
        alert(message)
    };
});