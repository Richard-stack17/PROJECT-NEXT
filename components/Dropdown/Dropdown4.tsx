import { useState } from 'react';
import DownIcon from '../assets/svg/User/DownIcon';

interface IDropdown {
  GroupName: string;
  LlamarSetValue: (_optionTitle: string) => void; //el _ es para que no le haga seguimiento, que obvie
}

const Dropdown4 = ({ GroupName = '', LlamarSetValue }: IDropdown) => {
  const [open, setOpen] = useState(false);
  const [optionSelected, setOptionSelected] = useState(`${GroupName}`);
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
  function handleClick() {
    setOpen(!open);
  }
  return (
    <div className="h-[50px]">
      <div
        onClick={handleClick}
        className="flex justify-between items-center w-full h-full border-[2px]  rounded-[11px] border-app-gray px-4  font-[400] text-[#7D7D7D]"
      >
        <div>{optionSelected}</div>
        <div className="cursor-pointer">
          <DownIcon className="w-[18px] h-[20px] " color="#7D7D7D" />
        </div>
      </div>
      {open && (
        <ul className="bg-white relative  shadow-mlg mt-4 overflow-hidden  z-50 w-full rounded-[11px] border-[2px] border-app-gray  font-[400] text-[#7D7D7D]">
          <li className="flex justify-between w-full px-4 py-2 gap-4 ">
            <div>{GroupName}</div>
            <div onClick={handleClick}>
              <DownIcon
                className="w-[18px] h-[20px] rotate-180 cursor-pointer"
                color="#7D7D7D"
              />
            </div>
          </li>
          {options.map((option) => (
            <li
              className="px-4 py-2 cursor-pointer flex gap-4 text-[#A7A6A7]"
              key={option.id}
              onClick={() => {
                setOptionSelected(option.title),
                  LlamarSetValue(option.title),
                  setOpen(false);
              }}
            >
              {option.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown4;
