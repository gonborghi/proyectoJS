const messi = {
    nombre: "Messi", 
    edad: 37,
};

const edadesCercanas = [36, 38, 35, 39];
let intentosFallidos = [];
let puntos = 100;
const respuestasEnviadas = [];
let intentos = 0;

const formulario = document.getElementById('formulario');
const mensajeResultado = document.getElementById('mensajeResultado')

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    agregarRespuestas();
    contadorPuntos;
    
});

function agregarRespuestas() {
    const edad = parseInt(document.getElementById('edad').value); 
   
    respuestasEnviadas.push(edad);
    localStorage.setItem('respuestas', JSON.stringify(respuestasEnviadas));
    
    contadorPuntos(edad); 
    
    formulario.reset();
}

const respuestas = document.getElementById('respuestas');
const verRespuestas = document.getElementById('verRespuestas');

verRespuestas.addEventListener('click', () => {
    mostrarRespuestas();
});

function mostrarRespuestas() {
    respuestas.innerHTML = '';
    const respuestasGuardadas = JSON.parse(localStorage.getItem('respuestas')) || [];
    respuestasGuardadas.forEach((res) => {
        const div = document.createElement('div');
        div.innerHTML = `
            <div>
                <p>Edad: ${res}</p>
                <p>Puntos: ${puntos}</p>
            </div>
        `;
        respuestas.appendChild(div);
    });
}

function contadorPuntos(edad) {
    if (edad !== messi.edad) {  
        puntos -= 10;
        mensajeResultado.textContent = "La respuesta es incorrecta, perdiste 10 puntos"; 
    }
    else{
        mensajeResultado.textContent = "La respuesta es correcta"; 
    } 
}
