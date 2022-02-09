const listarUsuario = () => {
  return (
    <div>
      <form>
        <div className="row">
          <div className="form-group col-md-6">
            <label for="inputEmail4">Nombres</label>
            <input
              type="text"
              className="form-control"
              id="inputEmail4"
              placeholder="nombre completo"
            />
          </div>
          <div className="form-group col-md-6">
            <label for="inputPassword4">Apellidos</label>
            <input
              type="text"
              className="form-control"
              id="inputPassword4"
              placeholder="apellidos completos"
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-4">
            <label for="inputCity">Rol</label>
            <select id="inputState" className="form-control">
              <option selected> -Seleccione- </option>
              <option>Administrador</option>
              <option>Usuario</option>
              <option>Recolector</option>
            </select>
          </div>
          <div className="form-group col-md-4">
            <label for="inputState">Estado</label>
            <select id="inputState" className="form-control">
              <option selected> -Seleccione- </option>
              <option>Activo</option>
              <option>Inactivo</option>
            </select>
          </div>
          <div className="form-group col-md-4">
            <label for="inputAddress">DNI</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="numero de documento"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <button type="submit" className="btn btn-primary mt-2">
              Buscar
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nombres y Apellidos</th>
                  <th scope="col">DNI</th>
                  <th scope="col">Rol</th>
                  <th scope="col">Estado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark Otto</td>
                  <td>77298433</td>
                  <td>Administrador</td>
                  <td>Activo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob Thornton</td>
                  <td>72541221</td>
                  <td>Usuario</td>
                  <td>Inactivo</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry the Bird</td>
                  <td>02214565</td>
                  <td>Recolector</td>
                  <td>Activo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </form>
    </div>
  );
};

export default listarUsuario;
