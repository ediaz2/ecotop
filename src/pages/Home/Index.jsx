import { MContainer } from 'components/molecules/MContainer';
import { MBox } from 'components/molecules/MBox';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
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
        <div className="grid grid-cols-3 gap-4">
          <MBox className="p-4 rounded-lg bg-white">
            <h4 id="name" className="text-xl font-semibold">
              N° Solicitud #12345
            </h4>
            <h3 className="font-semibold text-blue-600">
              Encargado de Servicio : Juan Perez
            </h3>
            <h3 className="font-semibold text-blue-600">Estado : En Proceso</h3>
            <h3 className="font-semibold text-blue-600">
              Fecha de Solicitud : 20/03/2020
            </h3>
          </MBox>
          <MBox className="p-4 rounded-lg bg-white">
            <h4 id="name" className="text-xl font-semibold">
              N° Solicitud #12345
            </h4>
            <h3 className="font-semibold text-blue-600">
              Encargado de Servicio : Juan Perez
            </h3>
            <h3 className="font-semibold text-blue-600">Estado : En Proceso</h3>
            <h3 className="font-semibold text-blue-600">
              Fecha de Solicitud : 20/03/2020
            </h3>
          </MBox>
          <MBox className="p-4 rounded-lg bg-white">
            <h4 id="name" className="text-xl font-semibold">
              N° Solicitud #12345
            </h4>
            <h3 className="font-semibold text-blue-600">
              Encargado de Servicio : Juan Perez
            </h3>
            <h3 className="font-semibold text-blue-600">Estado : En Proceso</h3>
            <h3 className="font-semibold text-blue-600">
              Fecha de Solicitud : 20/03/2020
            </h3>
          </MBox>
          <MBox className="p-4 rounded-lg bg-white">
            <h4 id="name" className="text-xl font-semibold">
              N° Solicitud #12345
            </h4>
            <h3 className="font-semibold text-blue-600">
              Encargado de Servicio : Juan Perez
            </h3>
            <h3 className="font-semibold text-blue-600">Estado : En Proceso</h3>
            <h3 className="font-semibold text-blue-600">
              Fecha de Solicitud : 20/03/2020
            </h3>
          </MBox>
        </div>
      </MContainer>
    </>
  );
};

export default HomePage;
