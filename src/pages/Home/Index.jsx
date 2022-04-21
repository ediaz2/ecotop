import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MContainer } from 'components/molecules/MContainer';
import { MBox } from 'components/molecules/MBox';
import { useNavigate } from 'react-router-dom';
import { getServicesByUser } from 'store/servicioReducer';

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
                <div className="text-xs">
                  {new Intl.DateTimeFormat('en-US').format(
                    new Date(servicio.createdAt),
                  )}{' '}
                  <span className="bg-secondary py-1 rounded-full text-sm px-2 font-bold">
                    {estados[servicio.idEstadoServicio]}
                  </span>
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
                    <span className="text-lg">{`${servicio.direccion.tipoCalle} ${servicio.direccion.nombreCalle} ${servicio.direccion.numeroCalle} - ${servicio.direccion.distrito} - ${servicio.direccion.provincia} - ${servicio.direccion.departamento}`}</span>
                    <div>
                      <a
                        href={`https://www.google.com.pe/maps/@${servicio.direccion.coordenadas.latitude},${servicio.direccion.coordenadas.longitude},16z?hl=es-419`}
                        target="_blank"
                        className="flex text-primary bg-secondary hover:bg-secondary-200 focus:ring-3 focus:ring-secondary font-bold rounded-lg w-full p-2 justify-center"
                        rel="noreferrer">
                        Ver Mapa
                      </a>
                    </div>
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
