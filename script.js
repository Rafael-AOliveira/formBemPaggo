function process(contagem) {
    var value = parseInt(document.getElementById("contagem").value);
    value += contagem;
    if (value < 1) {
      document.getElementById("contagem").value = 0;
    } else {
      document.getElementById("contagem").value = value;
    }
  }

  function enviar() {
    let checkbox1 = document.getElementById("adesivoReact");
    let checkbox2 = document.getElementById("adesivoVue");
    let checkbox3 = document.getElementById("adesivoAngular");
    var value = parseInt(document.getElementById("contagem").value);
  
    if (
      (checkbox1.checked || checkbox2.checked || checkbox3.checked) &&
      value > 0
    ) {
      window.location.href = "sucess.html";
    } else {
      alert("Por favor selecionar adesivo e quantidade !");
    }
  }
