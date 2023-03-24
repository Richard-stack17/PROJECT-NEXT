import { useState } from 'react';

const SliderImg = () => {
  const listImgs = [
    'https://th.bing.com/th/id/OIP.rlfwBjjpkYUvzYoXPMCAvwHaFI?pid=ImgDet&rs=1',
    'https://www.recreoviral.com/wp-content/uploads/2015/11/17.7.jpg',
    'https://img.huffingtonpost.com/asset/6087d62c1e00008e48100483.jpeg?cache=qvorsAoFN9&ops=1778_1000',
    'https://th.bing.com/th/id/OIP.rlfwBjjpkYUvzYoXPMCAvwHaFI?pid=ImgDet&rs=1',
    'https://www.recreoviral.com/wp-content/uploads/2015/11/17.7.jpg',
    'https://img.huffingtonpost.com/asset/6087d62c1e00008e48100483.jpeg?cache=qvorsAoFN9&ops=1778_1000',
    'https://www.recreoviral.com/wp-content/uploads/2015/11/17.7.jpg',
    'https://img.huffingtonpost.com/asset/6087d62c1e00008e48100483.jpeg?cache=qvorsAoFN9&ops=1778_1000',
  ];

  const [indexImg, setIndexImg] = useState(0);
  const styleContainer = {
    transform: `translateX(calc(100% * -${indexImg}/3))`,
  };
  const handleBack = () => {
    if (indexImg - 1 < 0) {
      //no cambia
      setIndexImg(1); //este puede ser cualquiera
    } else {
      setIndexImg(indexImg - 1);
    }
  };
  const handleNext = () => {
    if (indexImg + 1 >= listImgs.length / 3) {
      setIndexImg(0);
    } else {
      setIndexImg(indexImg + 1);
    }
  };

  return (
    <div className="w-full  md:max-w-[1200px] bg-white overflow-hidden relative ml-auto mr-auto">
      <div
        style={styleContainer}
        className="w-[calc(300%)] flex gap-[calc(200%/99)] transition transform ease duration-300"
      >
        {listImgs?.map((url) => (
          <div className=" w-[calc(100%/11)] aspect-square" key={url}>
            <img
              className="w-full h-full object-contain m-auto"
              src={url}
              alt=""
            />
          </div>
        ))}
      </div>
      <button
        onClick={handleNext}
        className="absolute w-[40px] aspect-square rounded-full flex justify-center items-center bg-red-500 text-white text-2xl top-2/4 z-[1] left-full -translate-x-full -translate-y-2/4"
      >
        &#62;
      </button>
    </div>
  );
};

export default SliderImg;
