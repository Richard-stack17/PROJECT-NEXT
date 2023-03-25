import { IconLogo } from '../../assets/logo/IconLogo';
import HeartHome from '../../assets/svg/HeartHome';
import Plus from '../../assets/svg/Plus';
import UserIcon from '../../assets/svg/UserIcon';
import Dropdown2 from '../../Dropdown/Dropdown2';

const Header = () => {
  return (
    <div className="bg-black text-white flex items-center justify-between px-4 sm:px-12 py-4 min-h-[71px] text-sm">
      <div>
        <IconLogo />
      </div>
      <div className="flex gap-20">
        <div className="hidden min-[1024px]:flex gap-4 items-center">
          <div>
            <Plus />
          </div>
          <div className="text-app-blue">Crear publicación</div>
        </div>
        <div className="hidden min-[1024px]:flex gap-4 items-center">
          <div>
            <HeartHome />
          </div>
          <div>Mis votos</div>
        </div>
        <div className="flex gap-4 items-center justify-center max-w-[234px]">
          <div className="bg-black rounded-full px-[5px] py-[5px] border-[2px]">
            <UserIcon />
          </div>
          <div>erik.perez@gmail.com</div>
          <div>
            <Dropdown2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
