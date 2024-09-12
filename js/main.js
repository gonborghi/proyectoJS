
const messi = {
    nombre: "Messi", 
    edad: 37,
}

const edadesCercanas = [36, 38, 35, 39]
let intentosFallidos = []
let puntos = 100


let respuestaUser
let intentos = 0

function pregunta(respuestaUser){
    
    while (respuestaUser != messi.edad) {
        while (puntos > 0){
        respuestaUser = parseInt(prompt("¿Cuál es la edad de Lionel Messi?"))
        
         if (edadesCercanas.includes(respuestaUser)) {
            puntos -= 15
            alert("Estás muy cerca!. Perdiste 15 puntos. Tus puntos son: " + puntos )
            intentosFallidos.push(respuestaUser)
            intentos ++
            
            
        
        } else if (isNaN(respuestaUser)){
            alert("El dato ingresado no es una edad.")
            

        } else if (respuestaUser == messi.edad){

            intentos ++
            alert("Correcto! Lo adivinaste en " + intentos + " intentos. " + " Obtuviste " + puntos + " puntos")

            if (intentos != 1){
                alert("Los números incorrectos que ingresaste fueron: " + intentosFallidos)
            }
            if (intentos > 2 ){
                alert(" La edad más grande que ingresaste fue " + Math.max(...intentosFallidos) + " y la más chica " + Math.min(...intentosFallidos))
            }  

        }  else {
            puntos -= 30
            alert("Seguí intentando. Perdiste 30 puntos. Tus puntos son: " + puntos)
            intentosFallidos.push(respuestaUser)
            intentos ++
            
            
        }   
        }
        
        alert("Perdiste")
        break
    }

    return
}

pregunta()

