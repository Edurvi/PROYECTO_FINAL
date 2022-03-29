export class Departamento {
  //se ejecuta al instanciar y crea atributos con this
  constructor() {
    this.departamentos = [
      { id: 1, descripcion: "Analista", estado: 1 },
      { id: 2, descripcion: "Ingeniero", estado: 0 },
      { id: 3, descripcion: "Consultor", estado: 1 },
    ];
  }
  obtenerDepartamentos() {
    console.log(this.departamentos);
    let filas = "";
    this.departamentos.forEach((departamento) => {
      let { id, descripcion, estado } = departamento; //destructuring /(descomponer un objeto o arrelgo en sus atributos)
      filas += `
            <tr>
                <td>${id}</td>  
                <td>${descripcion}</td>
                <td>${estado ? "Activo" : "Inactivo"}</td>
                <td>
                    <button type="button" class="btn btn-edit" id="btn-edit" data-id="${id}">✍</button>
                    <button type="button" class="btn btn-delete" id="btn-delete " data-id="${id}">❌</button>
                </td>
            </tr> `;
    });
    //console.log(filas)
    document.getElementById("detalle-departamentos").innerHTML = filas;
    //eliminar
    const btnsDelete = document.querySelectorAll(".btn-delete");
    //console.log(btnsDelete);
    btnsDelete.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        //console.log(e.target.dataset.id);
        console.log("Eliminando");
        this.eliminarDepartamento(e.target.dataset.id);
      });
    });
    //editar
    const $btnsEdit = document.querySelectorAll(".btn-edit");
  }

  insertarDatos(departamento) {}

  obtenerDatos(id) {}

  eliminarDepartamento(id) {
    this.departamentos = this.departamentos.filter(
      (departamento) => departamento.id != id
    ); //me filtra todos meno el del codigo enviado y los volvemos acolocar
    this.obtenerDepartamentos(id);
  }

  modificarDatos(departamentoMod, id) {}
}
