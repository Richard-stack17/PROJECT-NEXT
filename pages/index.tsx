import Link from 'next/link';
import Logo from '../components/assets/logo/Logo';
import { Layout } from '../components/layout/Layout';
import { Search } from '../components/Presentation/Search';
import { EventSlider } from '../components/sliders/EventSlider/EventSlider';
import SliderImg from '../components/sliders/SliderImg/SliderImg';
import { eventsMock } from '../lib/data/events.mock';
import { useCategories } from '../lib/services/categories.services';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  const { data, error, isLoading } = useCategories();

  console.log({ data, error, isLoading });

  return (
    <div>
      {/* HERO SECTION */}
      <div className='min-h-[488px] flex justify-center items-center flex-col bg-[url("/hero-banner.png")] bg-cover bg-center app-banner -mt-4 gap-2'>
        <div>
          <Logo />
        </div>
        <div className="flex flex-col gap-4">
          <div className="justify-self-center place-self-center">
            <Search />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Link href={'/category/Marcas y tiendas'}>
              <button className="border-app-grayLight border-2 text-app-gray py-2 px-3 rounded-3xl bg-white">
                Marcas y tiendas
              </button>
            </Link>
            <Link href={'/category/Artistas y conciertos'}>
              <button className="border-app-grayLight border-2 text-app-gray py-2 px-3 rounded-3xl bg-white">
                Artistas y conciertos
              </button>
            </Link>
            <Link href={'/category/Torneos y eventos'}>
              <button className="border-app-grayLight border-2 text-app-gray rounded-3xl py-2 px-3 bg-white">
                Torneos
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* CONTENIDO */}
      <div className="bg-white h-[100%] p-5 flex flex-col gap-10">
        <EventSlider
          title="Populares en Querétaro"
          subtitle="Lo que las personas piden más"
          events={eventsMock}
        />
        <EventSlider
          title="Sugerencias para ti"
          subtitle="Publicaciones que podrías colaborar"
          events={eventsMock}
        />
        <EventSlider
          title="Recientes"
          subtitle="Las personas últimamente están hablando de esto"
          events={eventsMock}
        />
      </div>
      <SliderImg />
    </div>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
