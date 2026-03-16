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
    if (!edad) {
        document.getElementById('textoResultado').textContent = 'No hay datos en edad';
    }
    else if (!presion) {
        document.getElementById('textoResultado').textContent = 'No hay datos en presión sistólica';
    }
    else if (!colesterol) {
        document.getElementById('textoResultado').textContent = 'No hay datos en colesterol';
    }else if(!fumar){
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
        }
    }

}


function limpiarinput() {
    document.getElementById('edad').value = '';
    document.getElementById('presion').value ='';
    document.getElementById('colesterol').value ='';
    document.getElementById('fumador').value='';
}