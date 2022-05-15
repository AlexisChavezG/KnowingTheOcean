function enviarDatos(){
    var x = document.getElementById("textBusqueda").value; 
    const url = `/animalByName/${x}`;
    fetch(url).then((res)=> {
        if(res.status == "200"){
            return res.json();
        }else{
            alert("No se encontro información del animal, lo siento")
        }
    }).then((data) => {
        if(data.length>0){
            var s= document.getElementById("nameAnimal");
            s.value = data[0].name;

            var s= document.getElementById("nameEspecie");
            s.value = data[0].nombreCientifico;

            
            var s = document.getElementById("poblacionNum")
            s.value =data[0].poblacionRestante;

            var s = document.getElementById("ubicacionName")
            s.value =data[0].ubicacionGeografica;


            var s = document.getElementById("idImagenBitacora").src=data[0].img;

            var s = document.getElementById("txtARiesgos")
            s.value =data[0].causasExtincion;

        }else{
            alert("No se encontro información del animal, lo siento mucho")

        }

    })
};

function limpiarDatos(){
    var s= document.getElementById("nameAnimal");
    s.value = "";

    var s= document.getElementById("nameEspecie");
    s.value = "";

    
    var s = document.getElementById("poblacionNum")
    s.value ="";

    var s = document.getElementById("ubicacionName")
    s.value ="";


    var s = document.getElementById("idImagenBitacora").src="";

    var s = document.getElementById("txtARiesgos")
    s.value ="";
}