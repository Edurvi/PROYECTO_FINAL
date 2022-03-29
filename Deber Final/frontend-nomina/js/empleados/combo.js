
export function getOpcionesCargo() {
  fetch("http://localhost:3000/cargos")
    .then((res) => res.json())
    .then((cargos) => {
      let opcionesCargo = "";
      cargos.forEach((cargo) => {
        let { id,descripcion } = cargo;
        opcionesCargo += `<option value="${id}" >${descripcion}</option>`;
      });
      document.getElementById("cargo").innerHTML += opcionesCargo;
    });
}
export function getOpcionesDepartamento() {
  fetch("http://localhost:3000/departamentos")
    .then((res) => res.json())
    .then((departamentos) => {
      //console.log("departamentos", departamentos);
      let opcionesDepartamento = "";
      departamentos.forEach((departamento) => {
        let { id,descripcion } = departamento;
        opcionesDepartamento += `<option value="${id}">${descripcion}</option>`;
      });
      document.getElementById("departamento").innerHTML +=
        opcionesDepartamento;
    })
    .catch((err) => {
      console.log(err);
    });
}


