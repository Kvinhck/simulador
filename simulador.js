//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML
function calcular() {
  let cmpIngre = document.getElementById("txtIngresos");
  let cmpEgre = document.getElementById("txtEgresos");
  let egreStr = cmpEgre.value;
  let ingreStr = cmpIngre.value;
  let egreF = parseFloat(egreStr);
  let ingreF = parseFloat(ingreStr);
  let tot = calcularDisponible(ingreF, egreF);
  let redon = tot.toFixed(2);
  let redonF = parseFloat(redon);
  let cmpDis = document.getElementById("spnDisponible");
  cmpDis.textContent = redonF;

  let valorPago = calcularCapacidadPago(redonF);
  let cmpValor = document.getElementById("spnCapacidadPago");
  cmpValor.textContent = valorPago;
}
