import Link from 'next/link';
import Likes from '../components/Likes/Likes';
import { Search } from '../components/Presentation/Search';
import Logo from '../components/assets/logo/Logo';
import { Layout } from '../components/layout/Layout';
import { EventSlider } from '../components/sliders/EventSlider/EventSlider';
import { useCategories } from '../lib/services/categories.services';
import { usePublications } from '../lib/services/publications.services';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  //const { data, error, isLoading } = useCategories();

  //console.log({ data, error, isLoading });

  const { data: publicationResponse, error, isLoading } = usePublications();
  const { data: categories } = useCategories();

  console.log({ categories });
  console.log({ publicationResponse, error, isLoading });
  const publications = publicationResponse?.results;
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
      <div className="flex flex-col gap-6">
        <div className="bg-app-grayLighter p-5 my-12">
          <Likes />
        </div>
        <div className="mb-[114px]">
          <EventSlider
            title="Recientes"
            subtitle="Las personas últimamente están hablando de esto"
            events={publications}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
