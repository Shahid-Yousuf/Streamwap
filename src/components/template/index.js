import { IconButton, Navbar,Footer } from "../../../tailwind";
import Logo from "../logo";


const Template = ({children})=>{
    const menus = {
        brandName:<Logo />,
        links : [
            {
                label:'Home',
                href:'/'
            },
            {
                label:'Movies',
                href:'/movies'
            },
            {
                label:'Videos',
                href:'/videos'
            },
            {
                label:'blog',
                href:'/blog'
            },
            {
                label:'Contact',
                href:'/contact'
            }
        ]
    }
    const toolbars = [
        {
            label:<IconButton className='text-white border-none'>search</IconButton>
        },
        {
            label:<IconButton className='bg-red-700 text-white border-none'>person</IconButton>
        }
        
    ]
   return (
    <>
        <Navbar theme="dark" menus={menus} variant="between" toolbars={toolbars}/>
        {children}
        <Footer />
    </> 
   )
}

export default Template;
