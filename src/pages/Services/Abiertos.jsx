import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MContainer } from 'components/molecules/MContainer';
import { MBox } from 'components/molecules/MBox';
import { useNavigate } from 'react-router-dom';
import { getServicesByUser } from 'store/servicioReducer';
import { Abutton } from 'components/atoms/AButton';

import { createProveedorServicio } from 'store/proveedorServicioReducer';

const AbiertosPage = () => {
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

  function getCurrentDate(separator = '-') {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${year}${separator}${
      month < 10 ? `0${month}` : `${month}`
    }${separator}${date}`;
  }

  const sendAplicar = (idServicio) => {
    const payload = {
      idCorePersona: currentUser._id,
      idServicio: idServicio,
      observacion: 'prueba db 0421',
      descripcion: '',
      detalle: '',
      estado: 'A',
      fechaCreacion: getCurrentDate(),
      fechaModificacion: getCurrentDate(),
      idUsuarioCreacion: currentUser._id,
      idUsuarioModificacion: currentUser._id,
    };
    dispatch(createProveedorServicio(payload));
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
            Solicitudes de Servicio
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
                <span className="bg-secondary py-1 rounded-full text-sm px-2 font-bold">
                  {estados[servicio.idEstadoServicio]}
                </span>
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
                    <h3 className="font-semibold text-lg">Encargado: ---</h3>
                  </div>
                  <div className="flex items-center">
                    {servicio.idEstadoServicio ===
                      '6260d2ec5af517fd619899d8' && (
                      <Abutton onClick={() => sendAplicar(servicio._id)}>
                        Aplicar
                      </Abutton>
                    )}
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

export default AbiertosPage;
