/*Diosito llevame */
document.querySelector('btnCalcular').addEventListener('click', calcularRiesgo);


function calcularRiesgo(){
    const edad =parseInt(document.getElementById('edad'));
    const presion =parseInt(document.getElementById('presion'));
    const colesterol =parseInt(document.getElementById('colesterol'));
    const fumar =document.getElementById('fumador')

    let riesgo  = 0
    if(edad >35){
        riesgo += 0;
    }else if(34>edad>45){
        riesgo +=1;
    }else if(edad>44){
        riesgo +=2;
    }

    if(presion >= 140){
        riesgo +=3;
    }else if(presion <=120){
        riesgo +=1;
    }

    if (colesterol >= 240){
        riesgo +=3;
    }else if(colesterol >= 200)
        riesgo +=1;

    if(fumar == 'si'){
        riesgo +=3;
    }

    return riesgo
}
