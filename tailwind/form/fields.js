import {
    Field,
    ErrorMessage
} from 'formik';
import {Icon} from '../';
import {useState} from 'react'

const inputStyle = "border mb-1 px-4 py-3 focus:outline-none rounded-sm text-sm font-medium";
const containerStyle = "flex flex-col ";
const errorStyle = "text-red-500 m-0 p-0 text-sm font-bold text-left"
export const Email = ({...rest},className=null)=>{
    
    return (
        <>
          
             <div className={containerStyle}>
                <Field type="email" name="email" {...rest} className={`${inputStyle} ${className}`}/>
                <ErrorMessage name='email' component={'p'}  className={errorStyle} />
             </div>
           
        </>
    )
}
export const Password = ({...rest},className=null)=>{
    return (
        <>
            <div className={containerStyle}>
                <Field type='password' name='password' {...rest}  className={`${inputStyle} ${className}`} />
                <ErrorMessage name='password' component={'p'}  className={errorStyle}/>
            </div>
        </>
    )
}

export const UploadInput = ({label=null,className=null,formik,...rest})=>{
    const [thubmnail,setThumbnail] = useState('');
    
    const handleOnChange = (e)=>{
       const input = e.target;
        const key = input.name;
        const files = input.multiple ? input.files : input.files[0];
       
        // if(files.length>0) {
        //     alert("files are there")
        // }
        // else{
        //     alert("files are not there")
        // }
        //files.length > 0 ? formik.setFieldValue(key,files) : formik.setFieldValue(key,'');
        
        if(input.multiple){
            files.length > 0 ? formik.setFieldValue(key,files) : formik.setFieldValue(key,'');
            files.length > 0 ? setThumbnail(files.length+" Files") : setThumbnail('Choose Files')
        }
        else{
            files ? formik.setFieldValue(key,files) : formik.setFieldValue(key,'');
            files ? setThumbnail(files.name) : setThumbnail('no file choosen');
        }

    }
   return (
           <div className="flex flex-col">
                {label ? <label className="text-sm font-bold text-left">{label}</label> : null}
                <div className="flex justify-between border relative items-center">
                    <input type="file" {...rest} className=" opacity-0 absolute left-0 top-0" onChange={handleOnChange}/>
                    <span className="truncate w-30  inline-block text-left text-sm ml-3 font-bold">{thubmnail}</span>
                    <span className="bg-gray-400 py-2 px-2 rounded-sm text-sm font-normal">Browse</span>
                </div>
                <ErrorMessage name={rest.name} component="p" className={errorStyle}/>
           </div>
   )
}

export const Input = ({type="text",name=null,width=null,textarea=false,className=null,colspan=null,...rest})=>{
    return(
        <>
           <div className={`${containerStyle} ${width}`}>
           <Field {...rest} type={type} name={name}  as={textarea ? 'textarea' : null }  className={`${inputStyle} ${className}`} />
           <ErrorMessage name={name} component={'p'} className={errorStyle}/>
           </div>
        </>
    )
}

export const Select = ({name,data,width=null,className=null,...rest})=>{
    
    return (
        <>
            <div className={`${containerStyle} ${width}`}>
                <Field name={name}  as="select" className={`${inputStyle} ${className}`} >
                        {
                            data.map((item,index)=>{
                                <option value="comedy" selected="Comedy">Comedy</option>
                                return <option value={item.value} key={index}>{item.label}</option>
                            })
                        }
                        
                    </Field>
                <ErrorMessage name={name} component={'p'} className={errorStyle}/>
            </div>        
        </>
    )
}

export const Checkbox = ({name,label,value,checked=false})=>{
    return(
        <>
            <div className='flex items-center gap-2'>
                <Field type="checkbox" name={name} value={value} checked={checked}/>
                <label>{label}</label> 
            </div>
            <ErrorMessage name={name} component={'p'}/>
        </>
    )
}

export const Radio = ({name,data})=>{
    return (
        <>
         {
            data.map((item,index)=>{
                return(
                    <div className='flex items-center gap-4'>
                        <Field name={name} type='radio' value={item.value} />
                        <label>{item.label}</label>
                    </div>
                )
            })
         }
        </>
    )
}