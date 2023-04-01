import { useForm } from 'react-hook-form';
import X from '../assets/svg/X';

const CardSing = () => {
  type FormValues = {
    firstName: string;
    lastName: string;
    email: string;
    userName: string;
    password: string;
  };
  
    const { register, handleSubmit } = useForm({
      defaultValues: {
        firstName: '',
        lastName: '',
        email: '',
        userName: '',
        password: '',
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

  return (

         <div className="flex  flex-col items-center justify-center  sm:p-20  max-w-[580px]  m-[20rem] mx-auto
                      bg-app-form border-solid border-4 border-app-gray rounded-3xl p-10 relative
      ">
          <span className='border-2 rounded-full border-app-yellow p-2 absolute top-4 right-4 '>
            <X/>
          </span>
        <div className="w-full text-left flex flex-col gap-8 m-3">
          <div>
            <h1 className="text-[32px] font-medium text-white">Todos Votamos :)</h1>
            <p className='text-white'>Registrate para ingresar.</p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3"
          >
               <label className="flex flex-col gap-1  rounded-2xl">
                  <span className="font-semibold ">Email</span>
                  <input
                    className="p-4 border border-app-grayDark rounded-2xl bg-app-app-grayDark"
                    type="text"
                    {...register('email')}
                  />
                </label>
                <section className='flex flex-row gap-2'> 
                <label className="flex flex-col gap-1">
                    <span className="font-semibold text-white">First Name</span>
                    <input
                      className="p-4 border border-app-grayDark rounded-2xl"
                      type="text"
                      {...register('firstName')}
                    />
                </label>
                <label className="flex flex-col gap-1 sm:basis-1/2">
                  <span className="font-semibold text-white">Last Name</span>
                  <input
                    className="p-4 border border-app-grayDark rounded-2xl"
                    type="text"
                    {...register('lastName')}
                  />
                </label>
                </section>

                <label className="flex flex-col">
                  <span className="font-semibold text-white">Password</span>
                  <input
                    className="p-4 border border-app-grayDark rounded-2xl text-white"
                    type="password"
                    {...register('password')}
                  />
                </label>
                <button className='bg-app-yellow p-4 border border-app-grayDark rounded-2xl'>Sign Up</button>
                <span className="text-center app-subtitle-2 pt-2 text-white">
                  La contraseña debe tener mayusculas, minusculas y numeros.
                </span>
          </form>
        </div>
    </div>
  );
};

export default CardSing;
