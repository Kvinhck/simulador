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

  let cmpMonto = document.getElementById("txtMonto");
  let cmpPlazo = document.getElementById("txtPlazo");
  let cmpTasa = document.getElementById("txtTasaInteres");
  let montoStr = cmpMonto.value;
  let plazoStr = cmpPlazo.value;
  let tasaStr = cmpTasa.value;
  let montoEn = parseInt(montoStr);
  let plazoEn = parseInt(plazoStr);
  let tasaEn = parseInt(tasaStr);
  let calculoInteres = calcularInteresSimple(montoEn, tasaEn, plazoEn);
  let cmpInteres = document.getElementById("spnInteresPagar");
  cmpInteres.textContent = calculoInteres;

  let calculoPrestamo = calcularTotalPagar(montoEn, calculoInteres);
  let cmpPrestamo = document.getElementById("spnTotalPrestamo");
  cmpPrestamo.textContent = calculoPrestamo;

  let calculoCuota = calcularCuotaMensual(calculoPrestamo, plazoEn);
  let cmpCuota = document.getElementById("spnCuotaMensual");
  let redonC = calculoCuota.toFixed(2);
  let redonCe = parseFloat(redonC);
  cmpCuota.textContent = redonCe;

  let credito = aprobarCredito(valorPago, redonCe);
  if (credito == true) {
    let cmpCredito = document.getElementById("spnEstadoCredito");
    cmpCredito.textContent = "CREDITO APROBADO";
  } else {
    let cmpCredito = document.getElementById("spnEstadoCredito");
    cmpCredito.textContent = "CREDITO RECHAZADO";
  }
}

function reinicio() {
  let cmpIngre = document.getElementById("txtIngresos");
  let cmpEgre = document.getElementById("txtEgresos");
  cmpIngre.value = "";
  cmpEgre.value = "";
  let cmpMonto = document.getElementById("txtMonto");
  let cmpPlazo = document.getElementById("txtPlazo");
  let cmpTasa = document.getElementById("txtTasaInteres");
  cmpMonto.value = "";
  cmpPlazo.value = "";
  cmpTasa.value = "";
  //reinicio de los span
  let cmpDis = document.getElementById("spnDisponible");
  let cmpPago = document.getElementById("spnCapacidadPago");
  let cmpInteres = document.getElementById("spnInteresPagar");
  let cmpPrestamo = document.getElementById("spnTotalPrestamo");
  let cmpCuota = document.getElementById("spnCuotaMensual");
  let cmpEstado = document.getElementById("spnEstadoCredito");

  cmpDis.textContent = "";
  cmpPago.textContent = "";
  cmpInteres.textContent = "";
  cmpPrestamo.textContent = "";
  cmpCuota.textContent = "";
  cmpEstado.textContent = "ANALIZANDO...";
}
