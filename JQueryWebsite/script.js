


    $("#SearchBox").on("change",function(){

        var selectOption = $(this).val();

        if(selectOption == "About")
        {
            window.location = "./about.html"
            $(this).val(null)
        }

        else
        if(selectOption == "Contact")
        {
            window.location = "./contact.html"
            $(this).val(null)
        }
    })