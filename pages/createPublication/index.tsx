import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Dropdown4 from '../../components/Dropdown/Dropdown4';
import Logo from '../../components/assets/logo/Logo';

const Index = () => {
  type FormValues = {
    title: string;
    publication_type_id: string;
    content: string;
    description: string;
    reference_link: string;
  };

  const saveOption = (option: string) => {
    setValue('publication_type_id', option);
  };

  const saveOption2 = (option: string) => {
    setValue('content', option);
  };

  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      title: '',
      publication_type_id: '',
      content: '',
      description: '',
      reference_link: '',
    },
  });
  const onSubmit = async (data: FormValues) => {
    console.log(data);

    // createUser(data)
    //   .then((resp) => {
    //     console.log(resp);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };
  //part that is hidden-block
  const [percent, setPercent] = useState('50%');
  const [display1, setDisplay1] = useState('block');
  const [display2, setDisplay2] = useState('hidden');
  const functionBack = () => {
    if (percent === '100%') {
      setPercent('50%');
      setDisplay1('block');
      setDisplay2('hidden');
    }
  };
  const functionBtnNext = () => {
    if (percent === '50%') {
      setPercent('100%');
      setDisplay1('hidden');
      setDisplay2('block');
    }
  };
  return (
    <div>
      <div className="flex flex-col min-[1028px]:flex-row w-full min-h-[100vh] overflow-hidden">
        <div className="bg-app-blue basis-[20%] flex flex-col gap-2 min-[1028px]:justify-around">
          <div className="self-center justify-self-center p-4 mb-0 pb-0">
            <Logo width={'150'} height={'150'} />
          </div>
          <div className="p-5 min-[1028px]:ml-3">
            <h2 className="title-3 text-app-yellow font-[500]">
              ¡Bienvenido Creador!
            </h2>
            <p className="text-white mt-4">
              A continuación puedes completar la info de la marca, artista o
              torneo que quieres cerca
            </p>
          </div>
          <div className="hidden min-[1028px]:flex ml-10">
            <p className="text-white font-[300]">Ayuda</p>
          </div>
        </div>
        <div className="basis-[80%] p-5 min-[1028px]:m-10 max-w-[800px]">
          <p
            className="pb-5 text-app-blue font-[500] text-[20px] cursor-pointer"
            onClick={functionBack}
          >
            Back
          </p>
          <div className="pb-10 w-full min-[1028px]:pl-20 mb-2">
            <div className="w-[100%] h-[10px] bg-app-grayDark relative rounded-3xl">
              <div
                className={`w-[${percent}] h-[10px] bg-app-blue absolute rounded-3xl`}
              ></div>
            </div>
          </div>
          {/*content */}
          <div className="flex overflow-hidden">
            <form
              className={`min-[1028px]:pl-20 w-full ${display1}`}
              onSubmit={handleSubmit(onSubmit)}
            >
              <h2 className="title-2 pb-2">Publicación</h2>
              <p className="subtitle-2 text-app-grayDark mb-10">
                Información básica
              </p>
              <div className=" relative my-5  h-[50px] rounded-[11px]">
                <p className="absolute top-[-1rem] left-2 bg-white px-1  font-[400] text-[#7D7D7D]">
                  Titulo de la publicación
                </p>
                <input
                  className="w-full h-full border-[2px]  rounded-[11px] border-app-gray pl-4"
                  type="text"
                  {...register('title')}
                  required
                ></input>
              </div>
              <div className="min-[1028px]:flex justify-between">
                <div className=" relative my-5 rounded-[11px] min-[1028px]:w-[47%] ">
                  <Dropdown4 GroupName="Tipo" LlamarSetValue={saveOption} />
                </div>
                <div className=" relative my-5 rounded-[11px] min-[1028px]:w-[47%] ">
                  <Dropdown4
                    GroupName="Categoría"
                    LlamarSetValue={saveOption2}
                  />
                </div>
              </div>
              <div className=" relative my-5 rounded-[11px] mt-6">
                <p className="absolute top-[-1rem] left-2 bg-white px-1  font-[400] text-[#7D7D7D]">
                  ¿Por qué lo recomiendas?
                </p>
                <textarea
                  className="w-full flex flex-wrap border-[2px]  pt-1 rounded-[11px] border-app-gray pl-4 h-[116px]"
                  {...register('description')}
                ></textarea>
              </div>
              <div className=" relative my-5  h-[50px] rounded-[11px]">
                <p className="absolute top-[-1rem] left-2 bg-white px-1  font-[400] text-[#7D7D7D]">
                  Link de la referencia
                </p>
                <input
                  className="w-full h-full border-[2px]  rounded-[11px] border-app-gray pl-4"
                  type="text"
                  {...register('reference_link')}
                ></input>
              </div>
              <div className="flex justify-center">
                <button
                  className="sm:block rounded-3xl px-5 py-3 bg-app-blue text-white sm:w-[124px] min-[1028px]:mt-9"
                  onClick={functionBtnNext}
                >
                  Siguiente
                </button>
              </div>
            </form>
            <div className={`min-[1028px]:pl-20 w-full ${display2}`}>
              <h1 className="title-2 pb-2">Fotos</h1>
              <p className="subtitle-2 text-app-grayDark mb-10">
                Selecciona máximo tres fotos para crear una galería
              </p>

              <div className="p-3 py-4 border-app-gray border-[2px] flex min-h-[150px] gap-3 items-stretch justify-items-stretch justify-between  rounded-xl">
                <div className="bg-[#D9D9D9]  border-[2px] basis-1/3  p-5 aspect-square min-[1028px]:rounded-3xl flex justify-center items-center text-app-blue text-[1.2rem] sm:text-[2rem] relative">
                  +
                  <input className="bg-red-500 absolute w-full h-full min-[1028px]:rounded-3xl"></input>
                </div>
                <div className="bg-[#D9D9D9] border-[2px] basis-1/3  p-5 aspect-square min-[1028px]:rounded-3xl flex justify-center items-center text-app-blue text-[1.2rem] sm:text-[2rem]">
                  +
                </div>
                <div className="bg-[#D9D9D9]  border-[2px] basis-1/3  p-5 aspect-square min-[1028px]:rounded-3xl flex justify-center items-center text-app-blue text-[1.2rem] sm:text-[2rem]">
                  +
                </div>
              </div>
              <div className="flex justify-center items-center my-10 mt-20">
                <button className="sm:block rounded-3xl px-5 py-3 bg-app-blue text-white sm:w-[124px] min-[1028px]:mt-2">
                  Publicar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
