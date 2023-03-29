import Link from 'next/link';
import SearchIcon from '../assets/svg/SearchIcon';
import Dropdown from '../Dropdown/Dropdown';

export function SearchCategory() {
  return (
    <div className="h-[150px] flex justify-center items-center flex-row app-grayLighter bg-cover bg-center app-banner -mt-4 pb-20 shadow-md">
      <div className="m-3 mr-20 min-[1024px]:hidden mt-[2rem]">
        <Dropdown />
      </div>
      <div className="hidden min-[1024px]:flex flex-wrap items-center justify-center gap-2 pt-20 w-[50%]">
        <Link href={'/category/Marcas y tiendas'}>
          <button className="border-app-grayLight border-2 text-app-gray py-[15.5px] px-[19px] rounded-3xl bg-white subtitle-1">
            Marcas y tiendas
          </button>
        </Link>
        <Link href={'/category/Artistas y conciertos'}>
          <button className="border-app-grayLight border-2 text-app-gray py-[15.5px] px-[19px] rounded-3xl bg-white subtitle-1">
            Artistas y conciertos
          </button>
        </Link>
        <Link href={'/category/Torneos y eventos'}>
          <button className="border-app-grayLight border-2 text-app-gray py-[15.5px] px-[19px] rounded-3xl bg-white subtitle-1">
            Torneos
          </button>
        </Link>
      </div>
      <div className="relative flex gap-4 p-0 items-center justify-center border-app-gray border-2 rounded-3xl w-[300px] min-h-[59px] sm:w-[550px] mt-20 text-[11px] sm:text-lg bg-white m-2">
        <input
          className="w-full p-0 h-full px-5 py-5 rounded-3xl pr-20"
          type="text"
          placeholder="¿Qué quieres ver en tu ciudad?"
        />
        <SearchIcon />
      </div>
    </div>
  );
}
