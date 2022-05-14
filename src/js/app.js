function enviarDatos(){
    var x = document.getElementById("hola").value; 
    const url = `/animalByName/${x}`;
    fetch(url).then((res)=> {
        if(res.status == "200"){
            return res.json();
        }else{
            alert("No se encontro información del pokemon")
        }
    }).then((data) => {
        if(data.length>0){
            var s= document.getElementById("resultado");
            s.value = data[0].name;
            alert("Resultado: " + data[0].name);
        }else{
            alert("No se encontro información del pokemon")

        }

    })
};