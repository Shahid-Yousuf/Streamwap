'use client'
import Logo from "../logo"
import {IconButton} from '../../../tailwind'
import {
    useState,
    useEffect
} from 'react';
import {
    useDispatch
} from 'react-redux'
const AdminPanel = ({children})=>{
    const[sidebar,setSidebar] = useState(null);
    const[section,setSection] = useState(null);
    const [open,setOpen] = useState(true);
    const [loading,setLoading] = useState(true);
    const dispatch = useDispatch();


    
    useEffect(()=>{
       
        if(open){
            setSidebar("w-0  absolute left-0 top-0 z-10 sm:w-2/12 sm:static z-10 min-h-screen");
            setSection("w-full sm:w-10/12")
        }
        else{
            setSidebar("w-8/12 sm:w-0 absolute sm:static left-0 top-0 z-10 min-h-screen");
            setSection("w-full");
        }
        setLoading(false)
    },[open])
    return loading ? <div className="fixed inset-0 flex items-center justify-center bg-gray-800 z-50">
    <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
    </div> :(
        <div className="min-h-screen overflow-hidden flex relative">
            <div className={`bg-white  overflow-x-hidden transition-width ${sidebar}`}>sdsd</div>
            <div className={`bg-slate-900 transition-width ${section}`}>
                <nav className="bg-gray-100 px-5 py-3 flex justify-between items-center">
                    <Logo />
                    <div className="flex items-center gap-4">
                        <IconButton 
                            theme="t-primary"
                            onClick={()=>setOpen(!open)}
                        >
                        format_align_right
                        </IconButton>
                        <IconButton theme="secondary" className="text-white" 
                             onClick={()=>dispatch({
                                type:'OPEN_DIALOG'
                             })}
                        >
                            add
                        </IconButton>
                    </div>
                </nav>
                <div className="p-2">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default AdminPanel
//format_align-right