function Navbar() {
  return (
    <nav class="navbar navbar-light bg-secondary fixed-top">
      <div class="container-fluid ">
        <a class="navbar-brand text-white" href="#">
          EcoTop
        </a>
        <button
          class="navbar-toggler "
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-start "
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title text-success" id="offcanvasNavbarLabel">
              EcoTop
            </h5>
            <button
              type="button"
              class="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <a
                  class="nav-link active text-success"
                  aria-current="page"
                  href="#">
                  Perfil
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-success" href="#">
                  Solicitar Recojo
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-success" href="#">
                  ¿Como Reciclar?
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-success" href="#">
                  ¿Por que Reciclar?
                </a>
              </li>
            </ul>
            <div class="offcanvas-body position-absolute bottom-0 start-0">
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
