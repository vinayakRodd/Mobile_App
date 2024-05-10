function pay(){

    var receiver = document.getElementById("receiver").value
    var amount = document.getElementById("amount").value

    if(receiver == "Sunil" && amount == "100000")
    {
        sessionStorage.setItem("receiver",true)
        sessionStorage.setItem("Key",false)
        document.getElementById("receiver").value = ""
        document.getElementById("amount").value = ""
        window.location = "../GooglePayApp/GpLogin.html"
        alert("Transaction in process...")
    }

    else
        alert("Transaction Declined...")
}

