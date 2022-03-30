import { ARouterLink } from '../../../components/atoms/ARouterLink';
import { PageLayout } from '../../../layouts/PageLayout';
import { MContainer } from '../../../components/molecules/MContainer';
import { useEffect, useState } from 'react';
import { useCurrentUser } from '../../../hooks/useCurrentUser';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

const BASE_URL = process.env.REACT_APP_BASE_URL;

function Profile() {
  const [person, setPerson] = useState(null);
  const { currentUser } = useCurrentUser();
  console.log(currentUser);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  // const token = localStorage.getItem('token');
  // const { id } = jwt_decode(token);
  // console.log(id);
  // console.log(token);
  // useEffect(() => {
  //   console.log('se renderizo');
  // }, []);
  useEffect(() => {
    // const token = localStorage.getItem('token');
    setLoading(true);
    axios({
      method: 'GET',
      baseURL: BASE_URL,
      timeout: 5000,
      // url: `/corePersona/${user.idCorePersona}`,
      url: `/corePersona/6233afc5043f3a94942149a4`,
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        const { data } = response;
        console.log(data);
        setPerson(data);
      })
      .catch((error) => setError(true))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  // const {
  //   data: {
  //     correo,
  //     nombre,
  //     apellidoPaterno,
  //     apellidoMaterno,
  //     nroDocumento,
  //     celular,
  //   },
  // } = person;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong. Try again later</p>;
  return (
    <PageLayout>
      <MContainer>
        <div className="flex items-center justify-between">
          <h3 className="text-primary font-semibold text-lg">Mi Perfil</h3>
        </div>
      </MContainer>
      <MContainer>
        <div className=" text-black font-medium">Datos de la cuenta</div>
        <div className="grid grid-cols-3 bg-white px-4 py-2 mt-2 rounded-md border border-secondary-100">
          <div className="">Correo Electronico</div>
          <div className="col-span-2">{person.data.correo}</div>
        </div>
        <div className=" text-black font-medium mt-5">Datos personales</div>
        <div className="grid grid-cols-3 bg-white px-4 py-2 mt-2 rounded-md border border-secondary-100">
          <div className="">Nombre y apellidos</div>
          <div className="col-span-2">
            {/* {nombre} {apellidoPaterno} {apellidoMaterno} */}
          </div>
          <div className=" bg-gray-100">Documento</div>
          <div className="col-span-2 bg-gray-100">
            DNI {/** nroDocumento */}
          </div>
          <div className=" ">Telefono</div>
          <div className="col-span-2">{/** celular */}</div>
        </div>
        <div className="flex justify-between mt-5 items-end">
          <div className=" text-black font-medium ">Direcciones</div>

          <ARouterLink to="/addadress">
            <button className=" bg-secondary rounded-md px-4 py-2 font-sans text-base  text-blue-800">
              Añadir nueva direccion
            </button>
          </ARouterLink>
        </div>
        <div className="grid grid-cols-3 bg-white px-4 py-2 mt-2 rounded-md border border-secondary-100 h-20"></div>
      </MContainer>
    </PageLayout>
  );
}

export default Profile;
