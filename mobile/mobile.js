

for(var i=0; i<document.querySelectorAll(".App").length; i++)
{
    document.querySelectorAll(".App")[i].addEventListener("click",function(){

        var btn = this.innerHTML;
        ButtonAnimation(btn);
        appOpen(btn);
        
    })
}

document.getElementById("SearchBox").addEventListener("change",function(event){
        var SearchBox = document.getElementById("SearchBox").value;


        if(SearchBox == "Drive" || SearchBox == "TradeView" || SearchBox == "Twitter" )
        {

                window.scrollBy({
                top:200,
                behavior:"smooth"

                })
                document.getElementById("SearchBox").value="Search for Apps"

                if(SearchBox == "Drive")
                        BounceApp("D");
                else
                if(SearchBox == "TradeView")
                        BounceApp("T");
                else
                if(SearchBox == "Twitter")
                        BounceApp("X");


        }

        else
        if(SearchBox == "Udemy" || SearchBox == "Meet" || SearchBox == "Ola" )
        {

                window.scrollBy({
                top:500,
                behavior:"instant"

                })
                document.getElementById("SearchBox").value="Search for Apps"

                if(SearchBox == "Udemy")
                        BounceApp("L");
                else
                if(SearchBox == "Meet")
                        BounceApp("m");
                else
                if(SearchBox == "Ola")
                        BounceApp("O");
        }
        
        
        else
        if(SearchBox == "Instagram" || SearchBox == "Gpay" || SearchBox == "Spotify" )
        {
                window.scrollBy({
                top:1430,
                behavior:"instant"

                })
                document.getElementById("SearchBox").value="Search for Apps"

                if(SearchBox == "Instagram")
                        BounceApp("I");
                else
                if(SearchBox == "Gpay")
                        BounceApp("P");
                else
                if(SearchBox == "Spotify")
                        BounceApp("S");
        }

        else
        if(SearchBox == "Whatsapp" || SearchBox == "Youtube" || SearchBox == "Uber")
        {

                window.scrollBy({
                top:1800,
                behavior:"instant"

                })
                document.getElementById("SearchBox").value="Search for Apps"

                if(SearchBox == "Whatsapp")
                        BounceApp("W");
                else
                if(SearchBox == "Youtube")
                        BounceApp("Y");
                else
                if(SearchBox == "Uber")
                        BounceApp("U");
        }

        else
        if(SearchBox == "Calculator" || SearchBox == "Exit")
        {

                window.scrollBy({
                top:2200,
                behavior:"instant"

                })
                document.getElementById("SearchBox").value="Search for Apps"

                if(SearchBox == "Calculator")
                        BounceApp("C");
                else
                if(SearchBox == "Exit")
                        BounceApp("E");
                
        }

        else
        if(SearchBox == "Search for Apps")
        {

                alert("Click on the Search box to Select the App to Search...")
        }

        
})

document.addEventListener("keypress",function(event){

        var button = event.key;

        if(button == "B")
        {
                
                window.scrollTo({
                        top:0,
                        behavior:"smooth"
                })

                document.getElementById("SearchBox").focus()
        }

        else
        if(button == "H")
        {
                alert("Press B to return back to Search Box");
                document.getElementById("SearchBox").focus()
        }

})

function BounceApp(App){

        var Bounce = document.querySelector("."+App)

        Bounce.classList.add("Bounce")

        setTimeout(function(){

                Bounce.classList.remove("Bounce");
        },600)
}


document.addEventListener("keypress",function(event){

        var keypress = event.key;
        appOpen(keypress);
        ButtonAnimation(keypress);
})



function appOpen(key){

    switch(key){

        case "A":
                window.location = "https://chat.openai.com/"
                break;

        case "G":
                window.location = "https://www.google.com"
                break;

        case "C":
                window.location = "https://calculator.apps.chrome/"
                break;


        case "m":
                window.location = "https://meet.google.com/?pli=1"
                break;

        case "L":
                window.location = "https://www.udemy.com/"
                break;
    

        case "D":
                window.location = "https://drive.google.com/drive/u/0/home"
                break;
    

        case "M":
                window.location = "https://www.gmail.com/"
                break;


        case "T":
                window.location = "https://www.tradingview.com/"
                break;

        case "I":
                window.location = "https://www.instagram.com/"
                break;


        case "O":
                window.location = "https://www.olacabs.com/"
                break;


        case "S":
                window.location = "https://open.spotify.com/search"
                break;

        case "X":
                window.location = "https://twitter.com/home"
                break;

        case "W":
                window.location = "https://web.whatsapp.com/"
                break;

        case "Y":
                window.location = "https://www.youtube.com/"
                break;

        case "U":
                window.location = "https://www.uber.com/in/en/"
                break;

        case "E":
                window.location = "http://127.0.0.1:5500/home/login.html"
                break;

        case "P":
                window.location = "../Transaction/GooglePayApp/GpLogin.html"
                sessionStorage.setItem("receiver",true);
                sessionStorage.setItem("Key",true)
                break;
        
        default:
                alert("Kindly Press the Specified Key on the Apps!!!")

    }
}

function ButtonAnimation(key){

        
    var activeButton = document.querySelector("."+key);

    activeButton.classList.add("pressed");

    setTimeout(function(){

            activeButton.classList.remove("pressed");
    },100)


}





