var tabela = document.getElementById('tabela');
var botaoadd = document.getElementById('buttonadd');
var desc = document.getElementById('desc');
var valor = document.getElementById('valor');
var tipo = document.getElementById('type');


botaoadd.addEventListener('click', function(){
    if (desc.value != '' & valor.value != '' & tipo.value != '') {
        var numeroLinhas = tabela.rows.length;
        var linha = tabela.insertRow(numeroLinhas);
        var celula1 = linha.insertCell(0);
        var celula2 = linha.insertCell(1);   
        var celula3 = linha.insertCell(2); 
        celula1.innerHTML = desc.value.toLocaleString("pt-BR", { style: "currency" , currency:"BRL"}); 
        celula2.innerHTML =  'R$ ' + valor.value; 
        celula3.innerHTML =  tipo.value[0].toUpperCase() + tipo.value.substring(1, tipo.value.length);
        tabela.classList.remove('hide');

        desc.value = '';
        valor.value = '';
        tipo.value = '';
    } else {
        alert('Preencha todos os campos corretamente!')
    }

    
});

String.prototype.reverse = function(){
    return this.split('').reverse().join(''); 
  };
  
  function mascaraMoeda(campo,evento){
    var tecla = (!evento) ? window.event.keyCode : evento.which;
    var valor  =  campo.value.replace(/[^\d]+/gi,'').reverse();
    var resultado  = "";
    var mascara = "##.###.###,##".reverse();
    for (var x=0, y=0; x<mascara.length && y<valor.length;) {
      if (mascara.charAt(x) != '#') {
        resultado += mascara.charAt(x);
        x++;
      } else {
        resultado += valor.charAt(y);
        y++;
        x++;
      }
    }
    campo.value = resultado.reverse();
  }