'use client'
import SweetAlert from 'react-bootstrap-sweetalert';
import {
    useSelector,
    useDispatch
} from 'react-redux'

const Dialog = ({children,title=null})=>{
    const dispatch = useDispatch();
    const {DialogReducer} = useSelector((response)=>response);
    console.log(DialogReducer)
    const handleConfirm = ()=>{
        console.log("hello")
    }
   return (
        <SweetAlert
            title={title}
            show={DialogReducer.open}
            showConfirm={false}
            onConfirm={handleConfirm}
        >
            <button 
                type="button"
                className="absolute right-3 top-1 text-sm font-semibold"
                onClick={()=>{dispatch({
                    type:'CLOSE_DIALOG'
                })}}
            >
                close
            </button>
            {
                children
            }
        </SweetAlert>
   )
}

export default Dialog