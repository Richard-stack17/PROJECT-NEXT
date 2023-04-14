import Image from 'next/image';
import { useRouter } from 'next/router';
import Likes from '../../components/Likes/Likes';
import { SearchCategory } from '../../components/Presentation/SearchCategory';
import UserIcon from '../../components/assets/svg/UserIcon';
import { Layout } from '../../components/layout/Layout';
import { eventsMock } from '../../lib/data/events.mock';
import { NextPageWithLayout } from '../page';

export const DetailPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { detail_id } = router.query;
  const object = eventsMock.find((event) => event.title == detail_id);
  console.log(object);
  return (
    <div>
      <SearchCategory />
      <div className="pt-20 flex flex-col gap-6">
        <div className="w-full p-3 min-[1028px]:flex gap-6">
          <div className="basis-[40%] flex flex-col justify-between content-between">
            <div>
              <p>Artista / Pop / Rock</p>
              <h2 className="title-1 pb-2">{object?.title}</h2>
              <p className="overflow-hidden text-app-grayDark lg:h-[72px] mt-6 mb-11">
                {object?.short_description}
              </p>
              <div className="w-full">
                <p className="text-app-blue font-medium mb-2">{object?.url}</p>
                <div className="flex gap-3 ">
                  <UserIcon color="black" />
                  <span className="font-medium">{object?.votes} votos</span>
                </div>
              </div>
            </div>
            <div className="hidden min-[1028px]:block">
              <button className="bg-app-blue text-app-grayLighter w-full px-[15px] py-[19px] rounded-full subtitle-2 mt-5">
                Votar
              </button>
            </div>
          </div>

          <div className="basis-[60%] mt-5 min-[1028px]:mt-0">
            {object && (
              <Image
                src={object?.image}
                className="w-full"
                alt="cart image"
                width="1000"
                height="1000"
              />
            )}
          </div>
          <div className="min-[1028px]:hidden">
            <button className="bg-app-blue text-app-grayLighter w-full px-[15px] py-[19px] rounded-full subtitle-2 mt-5">
              Votar
            </button>
          </div>
        </div>
        <div>
          <Likes />
        </div>
        <div className="mb-[114px]">
          {/* <EventSlider
            title="Recientes"
            subtitle="Las personas últimamente están hablando de esto"
            events={eventsMock}
          /> */}
        </div>
      </div>
    </div>
  );
};

DetailPage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default DetailPage;
