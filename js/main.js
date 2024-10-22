let messi;
let intentosFallidos = [];
let puntos = 100;
const respuestasEnviadas = [];
let historial = JSON.parse(localStorage.getItem('historial')) || [];

const formulario = document.getElementById('formulario');
const mensajeResultado = document.getElementById('mensajeResultado');

document.addEventListener('DOMContentLoaded', async () => {
    await cargarDatos();
});

async function cargarDatos() {
    try {
        const response = await fetch('datos.json');
        const data = await response.json();
        messi = data.messi;
        edadesCercanas = data.edadesCercanas;
    } catch (error) {
        console.error('Error al cargar los datos:', error);
    }
}

formulario.addEventListener('submit', async (e) => {
    e.preventDefault();
    await agregarRespuestas();
    mostrarRespuestas();
});

async function agregarRespuestas() {
    const edad = parseInt(document.getElementById('edad').value); 

    respuestasEnviadas.push(edad);
    localStorage.setItem('respuestas', JSON.stringify(respuestasEnviadas));
    
    await contadorPuntos(edad);
    formulario.reset();
}

const fechaHora = new Date().toLocaleString();

const respuestas = document.getElementById('respuestas');
const verRespuestas = document.getElementById('verRespuestas');

verRespuestas.addEventListener('click', () => {
    mostrarRespuestas();
});

function respuestaIncorrecta() {
    Swal.fire({
        icon: "error",
        title: "Respuesta incorrecta",
        text: "La edad ingresada no es la edad de Messi",
    });
}

function edadInvalida() {
    Swal.fire({
        icon: "error",
        title: "Edad inválida",
        text: "La edad es inválida",
    });
}

function respuestaCorrecta() {
    Swal.fire({
        icon: "success",
        title: "Respuesta correcta",
        text: "Acertaste! La edad de Messi es 37 años",
    });
}

function mostrarRespuestas() {
    respuestas.innerHTML = '';
    const respuestasGuardadas = JSON.parse(localStorage.getItem('respuestas')) || [];
    respuestasGuardadas.forEach((res) => {
        const div = document.createElement('div');
        div.innerHTML = `
            <div>
                <p>Edad: ${res}, Puntos: ${puntos}, Fecha: ${fechaHora} </p>
            </div>
        `;
        respuestas.appendChild(div);
    });
}

async function contadorPuntos(edad) {
    return new Promise((resolve) => {
        if (isNaN(edad) || edad < 0) {
            edadInvalida();
            resolve();
        } else if (edad !== messi.edad) {
            puntos -= 10;
            respuestaIncorrecta();
            resolve();
        } else {
            respuestaCorrecta();
            resolve();
        }
    });
}
