function Profile() {
  return (
    <div className="p-5">
      <div className="font-sans text-lg font-medium text-primary">
        Mi Perfil
      </div>
      <div className=" text-black font-medium mt-5">Datos de la cuenta</div>
      <div className="grid grid-cols-3 bg-white px-4 py-2 mt-2 rounded-md border border-secondary-100">
        <div className="">Correo Electronico</div>
        <div className="col-span-2">mail@mail.com</div>
      </div>
      <div className=" text-black font-medium mt-5">Datos personales</div>
      <div className="grid grid-cols-3 bg-white px-4 py-2 mt-2 rounded-md border border-secondary-100">
        <div className="">Nombre y apellidos</div>
        <div className="col-span-2">Nombre Apellido Apellido</div>
        <div className=" bg-gray-100">Documento</div>
        <div className="col-span-2 bg-gray-100">DNI 78569485</div>
        <div className=" ">Telefono</div>
        <div className="col-span-2">950 01 02 03</div>
      </div>
      <div className="flex justify-between mt-5 items-end">
        <div className=" text-black font-medium ">Direcciones</div>
        <button className=" bg-secondary-100 rounded-md px-4 py-2 font-sans text-base  text-blue-800">
          Añadir nueva direccion
        </button>
      </div>
      <div className="grid grid-cols-3 bg-white px-4 py-2 mt-2 rounded-md border border-secondary-100 h-20"></div>
    </div>
  );
}

export default Profile;
