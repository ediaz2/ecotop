function Navbar() {
  return (
    <nav className="navbar navbar-light bg-secondary fixed-top">
      <div className="container-fluid ">
        <a className="navbar-brand text-white" href="#">
          EcoTop
        </a>
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-start "
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5
              className="offcanvas-title text-success"
              id="offcanvasNavbarLabel">
              EcoTop
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a
                  className="nav-link active text-success"
                  aria-current="page"
                  href="#">
                  Perfil
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-success" href="#">
                  Solicitar Recojo
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-success" href="#">
                  ¿Como Reciclar?
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-success" href="#">
                  ¿Por que Reciclar?
                </a>
              </li>
            </ul>
            <div className="offcanvas-body position-absolute bottom-0 start-0">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item m-20">
                  <a className="nav-link text-danger">Cerrar sesión</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-success">
                    Terminos y condiciones
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
