import Footer from '@/components/Footer';
import PublicNavBar from '@/components/PublicNavbar';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const CardComponent = ({
  title,
  body,
  image,
}: {
  title: string;
  body: string;
  image?: string;
}) => {
  return (
    <div className='flex flex-col items-center gap-y-3 justify-center max-w-80'>
      <Image src={image || ''} width={300} height={200} alt='Freepik' />
      <h4 className='text-xl text-center'>{title}</h4>
      <p className='text-justify'>{body}</p>
      <div className='h-3 w-44 bg-[#141414]' />
    </div>
  );
};

export default function Home() {
  return (
    <main className='h-full'>
      <PublicNavBar />
      <div className='bg-primary px-10 xl:px-0'>
        <div className='max-w-[1120px] h-full mx-auto py-10 flex '>
          <div className='md:max-w-[372px]  h-full lg:max-w-[448px] xl:max-w-[520px]'>
            <h2 className=' text-[2.703rem] leading-[54px] lg:text-[3.559rem] text-white'>
              Streamline Your Healthcare Experience
            </h2>
            <p className='text-white my-4'>
              Manage your healthcare needs with ease. Add dependents and pay
              hospital bills all in one place.
            </p>
            <div className='flex flex-col lg:flex-row gap-3  py-4 '>
              <Link href='/auth' className='w-full'>
                <Button className='bg-white text-primary rounded-3xl hover:bg-white w-full'>
                  Log in as sponsor
                </Button>
              </Link>
              {/* <Button
                variant='outline'
                className='border-white bg-transparent rounded-3xl text-white'
              >
                Find a plan
              </Button> */}
            </div>
          </div>
          <div className=' hidden md:flex items-center justify-center'>
            <Image src='/5063406.png' width={520} height={408} alt='Freepik' />
          </div>
        </div>
      </div>
      <div className='py-12 px-10 xl:px-0'>
        <div className='max-w-[1120px] mx-auto'>
          <h4 className='text-[#141414] text-[2.775rem] text-center'>
            Here’s how to make your plan work for you:
          </h4>
          <div className='grid items-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-10 py-5'>
            <CardComponent
              image='/activate-account.png'
              title='Activate your member account'
              body=' So you can, add your dependants, talk to a provider, find care, and more.'
            />
            <CardComponent
              image='/dependants.png'
              title='Add your dependants'
              body='Monitor your dependants healthcare, pay their bills and to health care providers.'
            />
            <CardComponent
              image='/hcp.png'
              title='Find a Health care provider (HCP)'
              body='Connect with a HCP that gets to know you for the long haul.'
            />
            <CardComponent
              image='/payments.png'
              title='Pay seamlessly'
              body='Keep your plan running smoothly without a second thought.'
            />

            <CardComponent
              image='/paperless.png'
              title='Go paperless'
              body='Get important updates fast — and save some trees!'
            />
            <CardComponent
              image='/digital-id.png'
              title='View your digital ID card'
              body='See it on-the-go, wherever you go.'
            />
          </div>
        </div>
      </div>
      <div className='bg-primary py-16 text-center space-y-4'>
        <p className='text-4xl text-white'>Get your questions answered</p>
        <p className='text-xl text-white'>
          Find answers to the most commonly asked questions
        </p>
        <Button className='bg-white text-primary rounded-3xl hover:bg-white'>
          Visit our FAQs
        </Button>
      </div>

      <div className='max-w-[1120px] mx-auto flex-col md:flex-row flex items-center gap-x-5 py-12 px-5'>
        <Image src='/provider.png' width={470} height={320} alt='Freepik' />
        <div className='space-y-3 px-4'>
          <h4>eMedipay for private practices</h4>
          <h3 className='text-2xl'>
            Are you a provider interested in reaching new patients
          </h3>
          <ul className='list-disc space-y-2'>
            <li>Reach patients in your area looking for a new provider</li>
            <li>Fill last-minute openings in your schedule</li>
            <li>Strengthen your online reputation with verified reviews</li>
          </ul>
          <Button className='hover:bg-primary'>
            List your practice on eMedipay
          </Button>
        </div>
      </div>
      <div className='bg-[#1C1B1B] py-12'>
        <Footer />
      </div>
    </main>
  );
}
