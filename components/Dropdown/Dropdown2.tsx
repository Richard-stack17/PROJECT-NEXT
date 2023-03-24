import Link from 'next/link';
import { useState } from 'react';
import DownIcon from '../assets/svg/User/DownIcon';

const Dropdown2 = () => {
  const options = [
    {
      id: 0,
      title: 'Configuración',
      url: '/category/Marcas y tiendas',
    },
    {
      id: 1,
      title: 'Cerrar sesión',
      url: '/category/Artistas y conciertos',
    },
    {
      id: 2,
      title: 'Ayuda y soporte',
      url: '/category/Torneos y eventos',
    },
  ];
  const [open, setOpen] = useState(true);
  function handleClick() {
    setOpen(!open);
  }
  return (
    <div className="relative">
      <button
        onClick={handleClick}
        className="bg-white border-slate-400 border-2 rounded-full shadow-lg p-4 hover:bg-gray-200 transition-colors mt-1"
      >
        <DownIcon />
      </button>
      {open && (
        <ul className="bg-slate-200 relative rounded-md shadow-mlg mt-4 right-[0] overflow-hidden z-50 mr-20">
          {options.map((option) => (
            <li
              className="px-4 py-2 hover:bg-gray-200 transition-colors cursor-pointer flex gap-4"
              key={option.id}
            >
              <Link href={option.url}>{option.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown2;
