function calcularDisponible(ingresos, egresos) {
  let valor = ingresos - egresos;
  if (valor < 0) {
    return 0;
  }
  return valor;
}

function calcularCapacidadPago(montoDisponible) {
  let pro = montoDisponible * 0.5;
  return pro;
}
