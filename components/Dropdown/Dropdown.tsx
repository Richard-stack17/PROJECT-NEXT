import Link from 'next/link';
import { useState } from 'react';

const Dropdown = () => {
  type Places = {
    id: number;
    title: string;
    url: string;
  };
  const options: Places[] = [
    {
      id: 0,
      title: 'Marcas y Tiendas',
      url: '/category/Marcas y tiendas',
    },
    {
      id: 1,
      title: 'Artistos y conciertos',
      url: '/category/Artistas y conciertos',
    },
    {
      id: 2,
      title: 'Torneos',
      url: '/category/Torneos y eventos',
    },
  ];
  const [open, setOpen] = useState(true);
  function handleClick() {
    setOpen(!open);
  }
  return (
    <div className="absolute">
      <button
        onClick={handleClick}
        className="bg-white border-slate-400 border-2 rounded-full shadow-lg p-4 hover:bg-gray-200 transition-colors mt-1"
      ></button>
      {open && (
        <ul className="bg-slate-200 relative rounded-md shadow-mlg mt-4 right-0 overflow-hidden left-10 z-50">
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

export default Dropdown;
