(function() {

    let data = document.querySelector('#data');
    let horas = document.querySelector('#hora');
    let principal = document.querySelector('.principal');
    let box_data = document.querySelector('.box-data');
    let box = document.querySelector('.box');
    let rgb = document.querySelector('#texto-rgb');
    let range = document.querySelectorAll('input[type=range]');
    let circulo = document.querySelector('.circulo');




    range.forEach(interaçãoRange);

    function interaçãoRange(item, elemento) {
        range[elemento].addEventListener('input', function() {
            rgb.innerHTML = `RGB(${range[0].value}, ${range[1].value}, ${range[2].value} )`;
            circulo.style.backgroundColor = `RGB(${range[0].value}, ${range[1].value}, ${range[2].value} )`;

        })
    }

    function datas() {
        setInterval(function() {
            let dias = new Date();
            diaD = dias.getDate();
            diaM = (dias.getMonth() + 1);
            diaA = dias.getFullYear();
            hora = dias.getHours();
            minutos = dias.getMinutes();

            if (diaM < 10) {
                data.innerHTML = diaD + '/0' + diaM + '/' + diaA;
            } else {
                data.innerHTML = diaD + '/' + diaM + '/' + diaA;
            }
            if (hora > 10) {
                if (minutos < 10) {
                    horas.innerHTML = hora + ':' + 0 + minutos;
                } else {
                    horas.innerHTML = hora + ':' + minutos;
                }

            } else {
                if (minutos < 10) {
                    horas.innerHTML = 0 + hora + ':' + 0 + minutos;
                } else {
                    horas.innerHTML = 0 + hora + ':' + minutos;
                }

            }
            if (hora < 18) {
                principal.style.backgroundColor = 'rgb(255,255,255)';
                document.querySelector('h1').style.color = '#000';
                document.querySelector('footer').style.color = '#000';
                box_data.style.backgroundColor = 'var(--cinza)'
                box.style.backgroundColor = 'var(--cinza)'
                rgb.style.color = '#000'
                box_data.style.color = '#000'
            } else {
                principal.style.backgroundColor = 'rgb(54, 57, 64)';
                document.querySelector('h1').style.color = 'var(--branco)';
                document.querySelector('footer').style.color = 'var(--branco)';
                box_data.style.backgroundColor = 'var(--escuro)'
                box.style.backgroundColor = 'var(--escuro)'
                rgb.style.color = 'var(--branco)'
                box_data.style.color = 'var(--branco)'
            }
        }, 1000)

    }
    datas();


}());