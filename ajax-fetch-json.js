$.ajaxSetup({beforeSend: function(xhr){
        if (xhr.overrideMimeType)
        {
            xhr.overrideMimeType("application/json");
        }
    }
});