function scriviRisultato(element) {
    document.getElementById('risultato').value += element
  }
  
  function mostraRisultato() {
    let risultato = eval(document.getElementById('risultato').value)

    document.getElementById('risultato').value = risultato
  }
  
  function cancellaRisultato() {
    document.getElementById('risultato').placeholder = '0'
    document.getElementById('risultato').value = ''
  }