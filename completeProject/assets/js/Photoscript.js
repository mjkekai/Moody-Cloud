
    $("#myinput").keyup(function() {
        var val = $.trim(this.value);
        if (val === "")
            $('img').show();
        else {
            $('img').hide();
            $("img[alt*=" + val + "]").show();
        }
    });
   