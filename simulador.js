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

  let cmpMonto=document.getElementById("txtMonto");
  let cmpPlazo=document.getElementById("txtPlazo");
  let cmptasa=document.getElementById("txtTasaInteres");
  let montoStr=cmpMonto.value;
  let plazoStr=cmpPlazo.value;
  let tasaStr=cmptasa.value;
  let montoEn=parseInt(montoStr);
  let plazoEn=parseInt(plazoStr);
  let tasaEn=parseInt(tasaStr);
  let calculoInteres=calcularInteresSimple(montoEn,tasaEn,plazoEn);
  let cmpInteres=document.getElementById("spnInteresPagar");
  cmpInteres.textContent=calculoInteres;
}
