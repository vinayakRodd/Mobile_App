function authenticate(){

    

    let user = document.getElementById("user").value
    let pwd = document.getElementById("pwd").value
    

    if(user == "Vinayak" && pwd == "abc123")
    {
        document.getElementById("user").value=""
        document.getElementById("pwd").value=""
        alert("Welcome "+user)
        window.location="./home.html"
        sessionStorage.setItem("user","true")
    }

    else
    if(user == "MobileStore" && pwd == "abc123^" ){

            document.getElementById("user").value=""
            document.getElementById("pwd").value=""
            alert("Welcome to "+user)
            window.location="../mobile/Mobile.html"
            sessionStorage.setItem("user","true")
            
        }
    

    else
    if(user=="" && pwd==""){
        alert("Enter UserName and Password to Login")

    }

    else{
        document.getElementById("user").value=""
        document.getElementById("pwd").value=""
        alert("Access Denied, Invalid User or Password")
        window.location="./login.html"
    }
}



