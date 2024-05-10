var count=0;
function moveFocus(){

    var input1 = document.getElementById("input1");
    var input2 = document.getElementById("input2");
    var input3 = document.getElementById("input3");
    var input4 = document.getElementById("input4");

    if(input1.value.length > 0)
    {
        input2.focus();
        count++;
    }
    

    
    if(input2.value.length > 0 )
    {
            input3.focus();
            count++;
    }

    if(input3.value.length > 0)
    {
        input4.focus();
        count++;
    }
    

    if(count == 3){

        document.addEventListener("keypress",function(event){

        var Pin = input1.value + input2.value + input3.value + input4.value ;
        console.log(Pin);

            if(event.key == "Enter" && Pin != "" )
            {
        

                if(Pin == "0512")
                {
                    document.getElementById("input1").value=""
                    document.getElementById("input2").value=""
                    document.getElementById("input3").value=""
                    document.getElementById("input4").value=""
                    window.location = "./GPAY.html"
                    alert("Welcome to Google Pay")
                    sessionStorage.setItem("Pin",true);

                }

                else
                if(Pin == "0521")
                {
                    alert("Invalid Pin ..Access Denied")
                    document.getElementById("input1").value=""
                    document.getElementById("input2").value=""
                    document.getElementById("input3").value=""
                    document.getElementById("input4").value=""
                    input1.focus();
                }

                else
                if(Pin == "1205")
                {
                    sessionStorage.setItem("Pin",true);
                    var server = sessionStorage.getItem("receiver")

                    if(server == "true")
                        window.location = "../Stats/Rendering.html"
                }

                else
                {
                        alert("Transaction Status : Unsuccessfull Transaction....")
                        window.location = "../Stats/Money.html"
                }
                    
                
                
                

            }

        })
    
    }

    else
    {
                
                document.addEventListener("keydown",function(event){

                if(input2.value.length == 0 && event.key == "Backspace")
                    input1.focus()

                else
                if(input3.value.length == 0 && event.key == "Backspace")
                    input2.focus()

                else
                if(input4.value.length == 0 && event.key == "Backspace")
                    input3.focus()
        })

    }

}



function checktext(){

    var key = sessionStorage.getItem("Key");
    
    if(key == "false")
    {
        document.getElementById("message").textContent = "Enter Your PinCode"
        document.getElementById("input1").focus()
    }

    if(key == "true")
    {
        document.getElementById("message").textContent = "Enter Your Password to Open GPay App"
        document.getElementById("input1").focus()
    }
}