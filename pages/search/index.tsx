import Dropdown3 from '../../components/Dropdown/Dropdown3';
import { Layout } from '../../components/layout/Layout';
import { Search } from '../../components/Presentation/Search';
import Cart2 from '../../components/sliders/Cart/Cart2';
import { EventSlider } from '../../components/sliders/EventSlider/EventSlider';
import { eventsMock } from '../../lib/data/events.mock';
import { NextPageWithLayout } from '../page';

const SearchPage: NextPageWithLayout = () => {
  return (
    <div>
      <div className="min-h-[108px] flex flex-row items-end bg-[url('/mock-category.png')] bg-cover bg-center app-banner -mt-4 gap-5 p-5 md:pl-[10rem]">
        <div>
          <p className="text-white text-lg mb-5 font-medium">Home / Búsqueda</p>
        </div>
      </div>
      <div className="shadow-md bg-cover mb-4 bg-center app-banner px-3 min-[1028px]:pl-20 pt-5 ">
        <div className="flex gap-3 pb-5 md:pl-[4rem] items-center justify-center min-[1028px]:justify-start mb-4">
          <Search />
          <div>
            <button className="hidden sm:block rounded-3xl px-5 py-3 bg-app-blue text-white self-center sm:w-[124px]">
              Buscar
            </button>
          </div>
        </div>
        <ul className="flex gap-[15px] sm:gap-10 lg:gap-20 items-end justify-center min-[1028px]:justify-start md:pl-[5rem]">
          <li className=" text-app-grayDark subtitle-2 li-decore max-w-[150px] mb-1 cursor-pointer">
            Todos los resultados
          </li>
          <li className=" text-app-grayDark subtitle-2 li-decore mb-1 cursor-pointer">
            Marcas y tiendas
          </li>
          <li className="hidden sm:inline-block text-app-grayDark subtitle-2 li-decore mb-1 cursor-pointer">
            Artistas y conciertos
          </li>
          <li className="hidden sm:inline-block text-app-grayDark subtitle-2 li-decore mb-1 cursor-pointer">
            Torneos
          </li>
          <li className="self-end sm:hidden">
            <Dropdown3 />
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-10 justify-center  items-stretch w-full my-8 lg:app-banner lg:ml-[10vw] py-6">
          {eventsMock?.map((event) => (
            <Cart2
              titulo={event.title}
              descripcion={event['short_description']}
              image={event.image}
              votos={event.votes}
              link={event.url}
              key={event.short_description}
            />
          ))}
        </div>
        <div className="self-center">1 2 3 4 5</div>
        <div className="mb-[114px] lg:ml-[-50px]">
          <EventSlider
            title="Recientes"
            subtitle="Las personas últimamente están hablando de esto"
            events={eventsMock}
          />
        </div>
      </div>
    </div>
  );
};

SearchPage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default SearchPage;
