let altura = document.getElementById('altura');
let peso = document.getElementById('peso');
let resp = document.getElementById('resp');
let resp2 = document.getElementById('resp2');

//verificando se contém virgula nos valores de input:
if(altura.value.indexOf(',') && peso.value.indexOf(',')){
    altura = altura.replace(',', '.');
    peso = peso.replace(',', '.');
}

function Calcular(){

    if(altura.value.length === 0 && peso.value.length === 0){
        alert('Porfavor, digite os valores dentro dos box!');
    }else{
        
        let alt = Number(altura.value);
        let pes = Number(peso.value);

        let total = pes / (alt * alt);
        total.toFixed(2);

        // criando elemento html e adc no documento:
        let elemento = document.createElement('p');
        
        elemento.innerText = `Seu imc é de ${total.toFixed(2)}`;
        resp.appendChild(elemento);


        //chamando função de validações de pesos:
        Validacao(total);
    }

}


function Validacao(valor){
    if(valor < 17){
        let el = document.createElement('p');
        el.innerText = 'Muito abaixo do peso';
        el.style.color = "#75760A";
        resp2.appendChild(el);

    } else if(17 <= valor && valor <= 18.49){
        let el = document.createElement('p');
        el.innerText = 'Abaixo do peso';
        el.style.color = "#4B6D28";
        resp2.appendChild(el);

    } else if(18.5 <= valor && valor <= 24.99){
        let el = document.createElement('p');
        el.innerText = 'Peso normal';
        el.style.color = "#6EBC20";
        resp2.appendChild(el);

    } else if(25 <= valor && valor <= 29.99){
        let el = document.createElement('p');
        el.innerText = 'Acima do peso';
        el.style.color = "#AD6527";
        resp2.appendChild(el);

    } else if(30 <= valor && valor <= 34.99){
        let el = document.createElement('p');
        el.innerText = 'Obesidade I';
        el.style.color = "#862505";
        resp2.appendChild(el);

    } else if(35 <= valor && valor <= 39.99){
        let el = document.createElement('p');
        el.innerText = 'Obesidade II (severa)';
        el.style.color = "#941401";
        resp2.appendChild(el);

    } else if( valor > 40){
        let el = document.createElement('p');
        el.innerText = 'Obesidade III (mórbida)';
        el.style.color = "#DC0805";
        resp2.appendChild(el);
    }
}

function Apagar(){
    if(altura.value.length === 0 && peso.value.length === 0){
        alert('Para limpar, é necessário ter digitado e calculado os valores!');
    }else{
        window.location.reload();
    }
}

function Troca(event, campo){
    var tecla = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;
    if (tecla==13) {
        campo.focus();
    }

}






