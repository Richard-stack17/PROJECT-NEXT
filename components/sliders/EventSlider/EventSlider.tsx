import { BsArrowRightCircle } from 'react-icons/bs';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

interface IEventSlider {
  title?: string;
  subtitle?: string;
  events: IEventMock[];
}

export const EventSlider = ({ title, subtitle, events }: IEventSlider) => {
  return (
    <div>
      <div className="pb-6">
        <h2 className="title-2 pb-2">{title}</h2>
        <p className="subtitle-2 pb-2">{subtitle}</p>
      </div>
      <div className="relative">
        <Swiper
          style={{ position: 'unset' }}
          slidesPerView={'auto'}
          loop
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            330: {
              slidesPerView: 1.2,
              spaceBetween: 40,
            },
            600: {
              slidesPerView: 1.8,
              spaceBetween: 30,
            },
            900: {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 3.2,
              spaceBetween: 20,
            },
          }}
        >
          {events?.map((event, index) => (
            <SwiperSlide key={index}>
              <Cart
                titulo={event.title}
                descripcion={event['short_description']}
                image={event.image}
                votos={event.votes}
                link={event.url}
              />
            </SwiperSlide>
          ))}
          <div className="hidden sm:flex absolute top-0 bottom-0 -right-20 left-auto cursor-pointer items-stretch justify-items-stretch">
            <SlideNextButton />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

// some-inner-component.jsx
import { useSwiper } from 'swiper/react';
import { IEventMock } from '../../../lib/data/events.mock';
import Cart from '../Cart/Cart';

interface ISlideNextButton {
  className?: string;
}
const SlideNextButton = ({ className }: ISlideNextButton) => {
  const swiper = useSwiper();

  return (
    <button className={className} onClick={() => swiper.slideNext()}>
      <BsArrowRightCircle
        className="text-app-blue bg-white rounded-full"
        size={50}
      />
    </button>
  );
};
