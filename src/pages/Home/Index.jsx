import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MContainer } from 'components/molecules/MContainer';
import { MBox } from 'components/molecules/MBox';
import { useNavigate } from 'react-router-dom';
import { getServicesByUser } from 'store/servicioReducer';
import { Abutton } from 'components/atoms/AButton';

const HomePage = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const servicios = useSelector((state) => state.servicio.currentService);
  const currentUser = useSelector((state) => state.auth.currentUser);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(getServicesByUser(currentUser._id)).then(() => {
      setIsLoading(false);
    });
  }, []);

  const estados = {
    '62425882b46db72a3afdb9f9': 'Finalizado',
    '6260d2ec5af517fd619899d8': 'Abierto',
    '6260d2fd5af517fd619899da': 'Proceso',
  };
  return (
    <>
      <MContainer>
        <div className="flex items-center justify-between">
          <h3 className="text-primary font-semibold text-lg">
            Mis Solicitudes
          </h3>
          <button
            className=" bg-primary text-white px-3 py-1 rounded"
            onClick={() => {
              navigate('/servicio/create');
            }}>
            Solicitar nuevo Servicio
          </button>
        </div>
      </MContainer>
      <MContainer>
        <div className="grid grid-cols-1 gap-4">
          {isLoading ? (
            <div className="text-center">Loading...</div>
          ) : (
            servicios.map((servicio) => (
              <MBox key={servicio._id} className="bg-white p-4">
                <div className="text-sm">
                  {new Intl.DateTimeFormat('en-US').format(
                    new Date(servicio.createdAt),
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">
                      {servicio.detalle}
                    </h3>
                    <span className="text-lg">{servicio.observacion}</span>
                    <h3 className="font-semibold text-lg">
                      Proveedor de Servicio:
                    </h3>
                    <span className="text-lg">
                      {servicio.proveedor !== undefined
                        ? servicio.proveedor.nombre +
                          ' ' +
                          servicio.proveedor.apellidoPaterno +
                          ' ' +
                          servicio.proveedor.apellidoMaterno
                        : ''}
                    </span>
                    <h3 className="font-semibold text-lg">Dirección:</h3>
                    <span className="text-lg">{currentUser.direccion}</span>
                    <Abutton
                      onClick={() => {
                        navigate('/servicio/create');
                      }}>
                      Ver Mapa
                    </Abutton>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-secondary py-1 rounded-full text-sm px-2 font-bold">
                      {estados[servicio.idEstadoServicio]}
                    </span>
                  </div>
                </div>
              </MBox>
            ))
          )}
        </div>
      </MContainer>
    </>
  );
};

export default HomePage;
