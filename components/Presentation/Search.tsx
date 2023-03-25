import SearchIcon from '../assets/svg/SearchIcon';

export function Search() {
  return (
    <div className="relative flex gap-4 p-0 items-center justify-center border-app-gray border-2 rounded-3xl w-[270px] min-h-[59px] sm:w-[550px] text-[13px] sm:text-lg bg-white m-2">
      <input
        className="w-full p-0 h-full px-5 py-5 rounded-3xl pr-12"
        type="text"
        placeholder="¿Qué quieres ver en tu ciudad?"
      />
      <SearchIcon />
    </div>
  );
}
