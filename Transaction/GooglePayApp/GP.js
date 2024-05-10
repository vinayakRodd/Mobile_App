
for(var i=0; i<document.querySelectorAll(".icon").length; i++)
{
        document.querySelectorAll(".icon")[i].addEventListener("click",function(){

                var button = this.innerHTML;
                ButtonAnimation(button);
                ButtonIcon(button);

        })
}

document.addEventListener("keypress",function(event){

        var btn = event.key;
        
        ButtonAnimation(btn);
        ButtonIcon(btn);

})


function ButtonIcon(key){

    switch (key){

//        case "U":
//                window.location = ""
 //               break;

        case "T":
                window.location = "../Stats/Money.html";
                break;
/*
        case "H":
                window.location = ""
                break;

        case "Q":
                window.location = ""
                break;


        case "R":
                window.location = ""
                break;


        case "C":
                window.location = ""
                break;


        case "B":
                window.location = ""
                break;
*/
    }
}

function ButtonAnimation(key){

    var activeButton = document.querySelector("."+key)
    
    activeButton.classList.add("pressed")

    setTimeout(function(){

        activeButton.classList.remove("pressed")
    },100)
}