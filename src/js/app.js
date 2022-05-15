function enviarDatos(){
    var x = document.getElementById("textBusqueda").value; 
    const url = `/animalByName/${x}`;
    fetch(url).then((res)=> {
        if(res.status == "200"){
            return res.json();
        }else{
            alert("No se encontro información del pokemon")
        }
    }).then((data) => {
        if(data.length>0){
            var s= document.getElementById("nameAnimal");
            s.value = data[0].name;

            var s= document.getElementById("nameEspecie");
            s.value = data[0].nombreCientifico;
            var s = document.getElementById("txtARiesgos")
            s.value =data[0].causasExtincion;
            
            var s = document.getElementById("idImagenBitacora").src=data[0].img;

            alert("Resultado: " + data[0].name);
        }else{
            alert("No se encontro información del pokemon")

        }

    })
};