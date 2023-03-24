import { Heart } from '../../assets/svg/Heart';
import UserIcon from '../../assets/svg/UserIcon';

const Cart = ({ titulo, descripcion, link, votos, image }) => {
  return (
    <div className="bg-white max-w-[500px] rounded-3xl relative flex flex-col drop-shadow-xl">
      <div>
        <img src={image} className="w-full rounded-t-3xl" />
        <Heart className="absolute top-[200px] right-4" isActive={true} />
      </div>
      <div className="p-5">
        <h2 className="title-2">{titulo}</h2>
        <p className="overflow-auto h-[72px] text-app-grayDark">
          {descripcion}
        </p>
      </div>
      <div className="p-5">
        <p className="text-app-blue font-medium mb-2">{link}</p>
        <div className="flex gap-3">
          <UserIcon />
          <span className="font-medium">{votos} votos</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
