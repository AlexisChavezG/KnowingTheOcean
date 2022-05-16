# KnowingTheOcean - Conoce el mundo submarino

Es un proyecto basado en una app web con la finalidad de sumergirse en las profundidades del océano sin viajar, ni mojarse, con el objetivo de echar un vistazo al mundo acuático y en especial a las especies marinas que necesitan especial atención debido a que se encuentran en peligro de extinción en mayor causa por las acciones inconvenientes del hombre.

**Problematica**

**Solución**

El conocer estas especies y saber la ayuda que necesitan para no desaparecer de la tierra para siempre, sería el primer paso para motivar a las personas a preocuparse por estos seres vivos con los que compartimos la vida en el planeta.

Mediante el uso de tecnologías como HTML, CSS y Javascript se crea una aplicación web, tipo “pokedex” para conocer a los animales marinos que se encuentran en peligro de extinción, lo que incluye: la población restante de su especie, hábitat, familia a la que pertenecen, entre otras cosas como la causa de su extinción.

**Diagrama de solución**

```mermaid
graph TD
    A[(endangered_species.json)] --> B[read.js]
    B --> C(serviceRead.js)
    C -->D[animalsControllers.js]
    D -->E[Views]
```

**Tecnologias utilizadas**
```
npm init -y  
```
```
npm install express --save  
```
```
npm install jest  
```
<img width="100" alt="Know" src="https://user-images.githubusercontent.com/99348169/168500015-610ff0d3-e1f5-481a-a080-0772277b03ea.png"> 
<img width="100" alt="Know" src="https://user-images.githubusercontent.com/99348169/168501322-0ff611c0-10eb-4c17-8ca7-fde8cb493351.png"> 
<img width="100" alt="Know" src="https://user-images.githubusercontent.com/99348169/168501322-0ff611c0-10eb-4c17-8ca7-fde8cb493351.png"> 
<img width="100" alt="Know" src="https://user-images.githubusercontent.com/99348169/168501342-ebc78840-b77c-44c5-b7dc-c323a716c37f.png"> 
<img width="100" alt="Know" src="https://user-images.githubusercontent.com/99348169/168501402-0afcaead-e432-4920-8896-8da946f63b03.png"> 


**Pantall**  

<img width="1440" alt="Know" src="https://user-images.githubusercontent.com/99348169/168503662-b9045b2d-afbf-4c71-8a72-b5314270428a.png"> 


**Integrantes proyecto**  
|`José Aleixs Chávez Galeas`|@AlexisChavezG|(launchx10528@innovaccion.mx)|  
|`Eduardo Gonzalez Hernandez`|@EdwEdward|(launchx03855@innovaccion.mx)|  
|`Angel David Flores Romero `|@AngelDavidFR|[(launchx07232@innovaccion.mx)|  
|`Jesús Beltrán Barrera`|@jesusbeb|[(launchx02054@innovaccion.mx)|  
|`Juan Carlos Granados Medina`|@JuanGranadosM|(launchx07511@innovaccion.mx)|  
