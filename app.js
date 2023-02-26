var getimgs = document.querySelectorAll('.img');
var getmodal = document.querySelector('.modal');
var getmodalimg = document.querySelector('.modal-img');
var getcaption = document.querySelector('.caption');
var getclosebtn = document.querySelector('.close-btn');


for(var x=0; x < getimgs.length; x++){
    getimgs[x].addEventListener('click',function(){
        shownow(this);
    });
}

function shownow(ele){
    // console.log(ele);
    // console.log(ele.src);
    // console.log(ele.alt);

    getmodal.style.display = "block";
    getmodalimg.src = ele.src;
    getcaption.alt = ele.alt;
}

// getclosebtn.addEventListener('click',function(){
//     getmodal.style.display = "none";
// });

getclosebtn.onclick = function(){
    getmodal.style.display = "none";
}

document.addEventListener('click',function(e){
    // console.log(e.target);
    if(e.target === getmodal){
        getmodal.style.display = "none"; 
    }
});