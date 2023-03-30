function calcularNum(){
    const url = "http://localhost:89/www/back";
    var inp = document.getElementById("numUser").value;

    if(!inp){
        alert("El numero no puede estar null");
        return false;
    }
   
    const params = { num: inp.value }

    fetch(url, { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(params) 
    }).then(result => {
        alert("resultado ..");
    });
    
    

    

}