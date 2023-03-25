import Link from 'next/link';
import Logo from '../components/assets/logo/Logo';
import { Layout } from '../components/layout/Layout';
import { Search } from '../components/Presentation/Search';
import { EventSlider } from '../components/sliders/EventSlider/EventSlider';
import { eventsMock } from '../lib/data/events.mock';
import { useCategories } from '../lib/services/categories.services';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  const { data, error, isLoading } = useCategories();

  console.log({ data, error, isLoading });

  return (
    <div>
      {/* HERO SECTION */}
      <div className='min-h-[488px] flex justify-center items-center flex-col bg-[url("/hero-banner.png")] bg-cover bg-center app-banner -mt-4 gap-5'>
        <div className="mt-[79px]">
          <Logo />
        </div>
        <div className="flex flex-col gap-4 p-0 m-0">
          <div className="justify-self-center place-self-center">
            <Search />
          </div>
          <div className="flex items-center justify-center gap-2 pb-5 mb-[4.5rem] mx-3">
            <Link href={'/category/Marcas y tiendas'}>
              <button className="border-app-grayLight border-2 text-app-gray py-[7.5px] px-[1rem] rounded-3xl bg-white texto-1">
                Marcas y tiendas
              </button>
            </Link>
            <Link href={'/category/Artistas y conciertos'}>
              <button className="border-app-grayLight border-2 text-app-gray py-[7.5px] px-[1rem] rounded-3xl bg-white texto-1">
                Artistas y conciertos
              </button>
            </Link>
            <Link href={'/category/Torneos y eventos'}>
              <button className="border-app-grayLight border-2 text-app-gray py-[7.5px] px-[1rem] rounded-3xl bg-white texto-1">
                Torneos
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* CONTENIDO */}
      <div className="my-5 mt-[77px]">
        <EventSlider
          title="Populares en Querétaro"
          subtitle="Lo que las personas piden más"
          events={eventsMock}
        />
      </div>
      <div>
        <EventSlider
          title="Sugerencias para ti"
          subtitle="Publicaciones que podrías colaborar"
          events={eventsMock}
        />
      </div>
      <div className="bg-app-grayLighter p-5 my-5">
        <h2 className="title-2 pb-2 text-app-grayDark">
          ¡Hagámoslo más personal!
        </h2>
        <p className="subtitle-2 pb-6 text-app-grayDark">
          Selecciona tus intereses para brindarte sugerencias de acuerdo a tus
          gustos
        </p>
        <div className="flex flex-wrap gap-2 pb-6">
          <Link href={'/category/Marcas y tiendas'}>
            <button className="border-app-grayLight border-2 text-app-gray py-[15.5px] px-[19px] rounded-3xl bg-white texto-1">
              Restaurantes
            </button>
          </Link>
          <Link href={'/category/Artistas y conciertos'}>
            <button className="border-app-grayLight border-2 text-app-gray py-[15.5px] px-[19px] rounded-3xl bg-white texto-1">
              Tiendas de ropa
            </button>
          </Link>
          <Link href={'/category/Torneos y eventos'}>
            <button className="border-app-grayLight border-2 text-app-gray py-[15.5px] px-[19px] rounded-3xl bg-white texto-1">
              Rock
            </button>
          </Link>
          <Link href={'/category/Torneos y eventos'}>
            <button className="border-app-grayLight border-2 text-app-gray py-[15.5px] px-[19px] rounded-3xl bg-white texto-1">
              Artistas mexicanos
            </button>
          </Link>
          <Link href={'/category/Torneos y eventos'}>
            <button className="border-app-grayLight border-2 text-app-gray py-[15.5px] px-[19px] rounded-3xl bg-white texto-1">
              Pop
            </button>
          </Link>
        </div>
        <a className="text-app-blue subtitle-2">Ver todos los intereses</a>
      </div>
      <div className="mb-[114px]">
        <EventSlider
          title="Recientes"
          subtitle="Las personas últimamente están hablando de esto"
          events={eventsMock}
        />
      </div>
    </div>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
