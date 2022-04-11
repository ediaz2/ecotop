import { useSelector } from 'react-redux';

import { ARouterLink } from 'components/atoms/ARouterLink';
import { MBox } from 'components/molecules/MBox';
import { MContainer } from 'components/molecules/MContainer';
import { MTable } from 'components/molecules/MTable';

export default () => {
  const currentUser = useSelector((state) => state.auth.currentUser);

  const columns = [
    { key: 'label', title: '' },
    { key: 'value', title: '' },
  ];

  const dataAccount = [
    { label: 'Correo electrónico', value: currentUser.correo },
  ];

  const dataProfile = [
    {
      label: 'Nombre y apellidos',
      value: `${currentUser.nombre} ${currentUser.apellidoPaterno} ${currentUser.apellidoMaterno}`,
    },
    { label: 'Documento', value: currentUser.nroDocumento },
    { label: 'Teléfono', value: currentUser.celular },
  ];

  const dataAddress = [];

  return (
    <>
      <MContainer>
        <h3 className="text-primary font-semibold text-lg">Mi Perfil</h3>
      </MContainer>
      <MContainer>
        <div className="flex justify-between mb-1 items-end">
          <h4 className=" text-black font-medium">Datos de la cuenta</h4>
        </div>
        <MBox className="bg-white border-2 border-secondary-100">
          <MTable columns={columns} isShowHeader={false} data={dataAccount} />
        </MBox>
      </MContainer>
      <MContainer>
        <div className="flex justify-between mb-1 items-end">
          <h4 className=" text-black font-medium">Datos personales</h4>
        </div>
        <MBox className="bg-white border-2 border-secondary-100">
          <MTable columns={columns} isShowHeader={false} data={dataProfile} />
        </MBox>
      </MContainer>
      <MContainer>
        <div className="flex justify-between items-end">
          <h4 className="text-black font-medium">Direcciones</h4>
          <ARouterLink
            to="/profile/addresses"
            className="bg-secondary rounded-md text-blue-800 px-2">
            Añadir nueva direccion
          </ARouterLink>
        </div>
        <div className="grid grid-cols-3 bg-white px-4 py-2 mt-2 rounded-md border border-secondary-100 h-20"></div>
      </MContainer>
    </>
  );
};
