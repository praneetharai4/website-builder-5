var script = document.createElement('script');
script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js";
document.head.appendChild(script);

function submitData(formData){
    var saveData = $.ajax({
        contentType: 'application/json',
        type: 'POST',
        url: "/sendData",
        data: JSON.stringify(formData),
        dataType: "json",
        success: function(resultData) {
            console.log(resultData); 
            alert("Save Complete") },
        error: function(data){
            if(data.statusText!="OK")
            alert('error: '+data.responseText);
            else 
            alert (data.responseText);
        }
  });
 
}

var form = document.getElementsByTagName("form")[0];
form.addEventListener('submit', (event) => {
    // stop form submission
    event.preventDefault();
    console.log(form.elements.length);
    var jsonObj={};
    for(var i=0; i<form.elements.length; i++){
       // console.log(form.elements[i].name+":"+form.elements[i].value );
        if(form.elements[i].name)
        jsonObj["\""+form.elements[i].name+"\""] = form.elements[i].value
    }
    //console.log(jsonObj);
    submitData(jsonObj);
});

