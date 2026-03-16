/*Diosito llevame */
document.querySelector('#btnCalcular').addEventListener("click", calcularRiesgo);
document.querySelector('#btnLimpiar').addEventListener("click", limpiarinput);

function calcularRiesgo() {

    
    const edad = parseInt(document.getElementById('edad').value);
    const presion = parseInt(document.getElementById('presion').value);
    const colesterol = parseInt(document.getElementById('colesterol').value);
    const fumar = document.getElementById('fumador').value;

    let riesgo = 0;
    let valoracion = '';
    if (edad === '' || edad < 0 || edad >120) {
        document.getElementById('textoResultado').textContent = 'No hay datos o datos validos en edad';
    }
    else if (!presion || presion > 250 || presion < 60) {
        document.getElementById('textoResultado').textContent = 'No hay datos oo datos validos en presión sistólica';
    }
    else if (!colesterol || colesterol > 400 || colesterol < 100) {
        document.getElementById('textoResultado').textContent = 'No hay datos o datos validos en colesterol';
    }else if(fumar == null ||fumar == undefined){
        document.getElementById('textoResultado').textContent = 'No seleccionó un dato en Fumar';

    }
    else {
        if (edad > 35) {
            riesgo += 0;
        } else if (34 > edad > 45) {
            riesgo += 1;
        } else if (edad > 44) {
            riesgo += 2;
        }

        if (presion >= 140) {
            riesgo += 3;
        } else if (presion <= 120) {
            riesgo += 1;
        }

        if (colesterol >= 240) {
            riesgo += 3;
        } else if (colesterol >= 200) {
            riesgo += 1;
        } else {
            riesgo += 0
        }

        if (fumar == 'si') {
            riesgo += 3;
        }

        if (riesgo <= 2) {
            valoracion = 'Bajo riesgo'
            document.body.style.backgroundColor = "#00C201"
            document.getElementById('textoResultado').textContent = valoracion
            recomendacion1 = '<li>Tome coca-cola</li>'
            recomendacion2 = '<li>Meta Bazuco</li>'
            recomendacion3 = '<li>Menos agua mas alcohol</li>'
            document.getElementById('recomendaciones').append(recomendacion1,recomendacion2,recomendacion3)
        }else if(riesgo >5){
            valoracion = 'Riesgo Moderado'
            document.body.style.backgroundColor = "#F6F502"
            document.getElementById('textoResultado').textContent = valoracion
            recomendacion1 = '<li>Dele a las grasas saturadas</li>'
            recomendacion2 = '<li>Un Chicharroncito no hace daño</li>'
            recomendacion3 = '<li>Limoncito con ron</li>'
            document.getElementById('recomendaciones').append(recomendacion1,recomendacion2,recomendacion3)
        }else if(riesgo >5){
            valoracion = 'Riesgo Alto'
            document.body.style.backgroundColor = "#E92828"
            document.getElementById('textoResultado').textContent = valoracion
            recomendacion1 = '<li>Diavlooooooo</li>'
            recomendacion2 = '<li>El corazon ya no va a hacer tucun tucun</li>'
            recomendacion3 = '<li>Mondongo</li>'
            document.getElementById('recomendaciones').append(recomendacion1,recomendacion2,recomendacion3)
        }
    }

}


function limpiarinput() {
    document.getElementById('edad').value = '';
    document.getElementById('presion').value ='';
    document.getElementById('colesterol').value ='';
    document.getElementById('fumador').value='';
    document.getElementById('textoResultado').textContent = '';
    document.body.style.backgroundColor = "rgb(250, 248, 243)";
}