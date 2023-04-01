import Link from 'next/link';
import { useForm } from 'react-hook-form';
import Logo from '../../components/assets/logo/Logo';
import CardLogin from '../../components/CardSign/CardLogin';


type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  userName: string;
  password: string;
};
export default function SingUpPage() {
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
    <div className="grid h-screen w-screen m-auto">
             
      <div className='flex  flex-col p-auto bg-[url("/login-banner.png")] md:flex items-center justify-center min-[600px]:flex-row  '>
        <section className='flex justify-center self-center my-auto  pt-12 min-[600px]:basis-1/2'>
            <Link href={'/'}>
                <Logo variant="yellow" onlyIcon={true} />
              </Link >
        </section>
          <section className='flex items-center my-auto min-[600px]:basis-1/2'>
              {/* <CardSing/> */}
              <CardLogin/>
              {/* <CreatAcount/> */}
          </section>
      </div>

    
    </div>
  );
}
