class ServiceRead{
    static filtrarByName(listAnimals, name){
        const listaOfAnimalsForName = listAnimals.filter((element)=>element.name === name);
        return listaOfAnimalsForName;
    }
}
module.exports = ServiceRead;
