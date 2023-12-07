import Image from 'next/image';
import Logo from '../../src/components/logo';
import ContactForm from '../../src/components/contact-form';
import IconButton from '../icon-button';

const Footer = ()=>{
    return (
        <footer className="bg-slate-900 p-4 md:p-16  ">
            <div className="    flex flex-col gap-10 md:gap-0 md:flex-row md:justify-between">
                <div className=''>
                    <Logo className={'text-white'}/>
                    <p className='text-gray-300 my-5 '>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit</p>
                    <div className='flex gap-2 items-center'>
                        <button className='bg-slate-800 px-4 py-2 rounded-sm'>
                            <Image src="/google-play.png" width={150} height={30} alt="google play_store icon" />
                        </button>
                        <button className=' px-4 py-2 rounded-sm'>
                            <Image src="/app-store.png" width={190} height={48} alt="app store icon" />
                        </button>
                    </div>
                </div>
                <div className=''>
                    <h1 className='text-gray-200 text-xl'>Follow us</h1>
                    <div className='flex gap-2 mt-5'>
                    <IconButton theme="error">home</IconButton>
                    <IconButton theme="primary">home</IconButton>
                    <IconButton theme="secondary">home</IconButton>
                    <IconButton theme="info">home</IconButton>
                    <IconButton theme="success">home</IconButton>
                    </div>
                    
                </div>
                <div className=' w-full md:w-3/12'>
                   <h1 className='text-gray-200 text-xl'>Contact Us</h1>
                    <div className='my-5'>
                        <ContactForm />
                    </div>
                </div>
                

            </div>
        </footer>
    )
}

export  default Footer;