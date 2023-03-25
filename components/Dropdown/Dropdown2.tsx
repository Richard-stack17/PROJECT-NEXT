import { useState } from 'react';
import Configuration from '../assets/svg/User/Configuration';
import DownIcon from '../assets/svg/User/DownIcon';
import LogOut from '../assets/svg/User/LogOut';

const Dropdown2 = () => {
  const [open, setOpen] = useState(false);
  function handleClick() {
    setOpen(!open);
  }
  return (
    <div className="relative w-8">
      <button
        onClick={handleClick}
        className="bg-none rounded-full shadow-lg p-3 mt-1"
      >
        <DownIcon />
      </button>
      {open && (
        <ul className="bg-white absolute shadow-mlg mt-4 right-2 overflow-hidden  z-50 p-2 rounded-lg">
          <li className="px-4 py-2 cursor-pointer flex gap-4">
            <Configuration />
            <a className="text-black">Configuracion</a>
          </li>
          <li className="px-4 py-2 cursor-pointer flex gap-4">
            <LogOut />
            <a className="text-black">Cerrar sesión</a>
          </li>
          <div className="bg-app-gray w-50 h-[2px]"></div>
          <li className="px-4 py-2 cursor-pointer flex gap-4">
            <a className="text-app-grayDark">Ayuda y soporte</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown2;
