import { useSelector } from 'react-redux';

import { ARouterLink } from 'components/atoms/ARouterLink';
import { MContainer } from 'components/molecules/MContainer';

export default () => {
  const currentUser = useSelector((state) => state.auth.currentUser);

  return (
    <>
      <MContainer>
        <div className="flex items-center justify-between">
          <h3 className="text-primary font-semibold text-lg">Mi Perfil</h3>
        </div>
      </MContainer>
      <MContainer>
        <div className=" text-black font-medium">Datos de la cuenta</div>
        <div className="grid grid-cols-3 bg-white px-4 py-2 mt-2 rounded-md border border-secondary-100">
          <div className="">Correo Electronico</div>
          <div className="col-span-2">{currentUser.correo}</div>
        </div>
        <div className=" text-black font-medium mt-5">Datos personales</div>
        <div className="grid grid-cols-3 bg-white px-4 py-2 mt-2 rounded-md border border-secondary-100">
          <div className="">Nombre y apellidos</div>
          <div className="col-span-2">
            {currentUser.nombre} {currentUser.apellidoPaterno}{' '}
            {currentUser.apellidoMaterno}
          </div>
          <div className=" bg-gray-100">Documento</div>
          <div className="col-span-2 bg-gray-100">
            DNI {currentUser.nroDocumento}
          </div>
          <div className=" ">Telefono</div>
          <div className="col-span-2">{currentUser.celular}</div>
        </div>
        <div className="flex justify-between mt-5 items-end">
          <div className=" text-black font-medium ">Direcciones</div>

          <ARouterLink to="/profile/addresses">
            <button className=" bg-secondary rounded-md px-4 py-2 font-sans text-base  text-blue-800">
              Añadir nueva direccion
            </button>
          </ARouterLink>
        </div>
        <div className="grid grid-cols-3 bg-white px-4 py-2 mt-2 rounded-md border border-secondary-100 h-20"></div>
      </MContainer>
    </>
  );
};
