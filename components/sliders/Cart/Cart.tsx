import Image from 'next/image';
import { Heart } from '../../assets/svg/Heart';
import UserIcon from '../../assets/svg/UserIcon';

interface ICart {
  titulo: string;
  descripcion: string;
  link: string;
  votos: number;
  image: string;
}

const Cart = ({ titulo, descripcion, link, votos, image }: ICart) => {
  return (
    <div className="bg-white rounded-3xl flex flex-col drop-shadow-xl">
      <div className="relative">
        <Image
          src={image}
          className="w-full rounded-t-3xl"
          alt="cart image"
          width="700"
          height="700"
        />
        <Heart
          className="absolute right-2 top-[85%] w-10 sm:w-[47px]"
          isActive={true}
        />
      </div>
      <div className="relative w-full h-[262px]">
        <div className="p-5 h-[166px]">
          <h2 className="title-3 pb-2">{titulo}</h2>
          <p className="overflow-auto text-app-grayDark h-[72px]">
            {descripcion}
          </p>
        </div>
        <div className="p-5 w-full">
          <p className="text-app-blue font-medium mb-2">{link}</p>
          <div className="flex gap-3 ">
            <UserIcon color="black" />
            <span className="font-medium">{votos} votos</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
