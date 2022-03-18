import { useState } from 'react';
import MMap from '../../../components/molecules/MMap';
function AddAddress() {
  const [lng, setLng] = useState(-75.1151377973355);
  const [lat, setLat] = useState(-11.429155004201874);
  return (
    <div className="p-5 ">
      <div>
        <div className="flex justify-between items-end mb-3">
          <div className="font-sans text-lg font-medium text-primary">
            Mi Perfil / Añadir dirección
          </div>
          <div className="bg-primary text-white px-3 py-2 rounded">
            <button>Guardar dirección</button>
          </div>
        </div>
        <div className="grid grid-cols-2 rounded-lg border-2">
          <div className="p-4 bg-white">
            <div className="mt-5">Departamento</div>
            <select className="px-4 py-2 mt-2 rounded-md border border-secondary w-full">
              <option>Cusco</option>
              <option>Lima</option>
              <option>Arequipa</option>
              <option>Puno</option>
              <option>Tacna</option>
            </select>
            <div className="flex gap-4">
              <div className="w-1/2">
                <div className="mt-5">Provincia</div>
                <select className="px-4 py-2 mt-2 rounded-md border border-secondary w-full">
                  <option>Cusco</option>
                  <option>Canchis</option>
                  <option>Calca</option>
                </select>
              </div>
              <div className=" w-1/2">
                <div className="mt-5">Distrito</div>
                <select className="px-4 py-2 mt-2 rounded-md border border-secondary w-full">
                  <option>Cusco</option>
                  <option>Wanchaq</option>
                  <option>San jeronimo</option>
                  <option>Santiago</option>
                </select>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-1/3">
                <div className="mt-5">Tipo de calle</div>
                <select className="px-4 py-2 mt-2 rounded-md border border-secondary w-full">
                  <option className="">Jiron</option>
                </select>
              </div>
              <div className=" w-2/3">
                <div className="mt-5">Nombre del Jiron</div>
                <input className="px-4 py-2 mt-2 rounded-md border border-secondary w-full"></input>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-1/2">
                <div className="mt-5">Numero del Jiron </div>
                <input className="px-4 py-2 mt-2 rounded-md border border-secondary w-full"></input>
              </div>
              <div className=" w-1/2">
                <div className="mt-5">Piso / Departamento</div>
                <input className="px-4 py-2 mt-2 rounded-md border border-secondary w-full"></input>
              </div>
            </div>
            <div>
              <div className="mt-5">Referencias </div>
              <input className="px-4 py-2 mt-2 rounded-md border border-secondary w-full h-28"></input>
            </div>
          </div>
          <div>
            <MMap longitude={lng} latitude={lat} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddAddress;
