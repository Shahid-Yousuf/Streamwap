'use client'
import { Formik,Form,Field,ErrorMessage } from "formik";
import * as yup from 'yup';
const form = ()=>{
    const initialData = {
        username:'',
        password:''
    }
    const onSubmit = (values)=>{
        alert()
        console.log(values)
    }
    const schema = yup.object({
        username:yup.string().required('Username is requuired ').min(10),
        password:yup.string().required('password is required')
    })
   return (
    <>
        <Formik 
            initialValues={initialData}
            onSubmit={onSubmit}
            validationSchema={schema}
           
        >
            {
                (formik)=>{
                   console.log(formik)
                    return (
                        <Form className="flex flex-col gap-4 px-8 sm:w-4/12 mx-auto mt-[200px]">
                            <Field type="email"  name="username" placeholder="username"   className={formik.errors.username ? 'border border-red-600':''}/>
                            <ErrorMessage name="username" component={'p'} />
                            <Field type="password" name="password" placeholder="******"  className={formik.errors.password ? 'border border-red-500' :''} />
                            <ErrorMessage name="password" component={'p'} />
                            <button type="submit" className={`${formik.isValid ? 'bg-purple-800' : 'bg-purple-400' } px-6 py-2 rounded-sm text-white w-fit`}>Submit</button>
                        </Form>
                    )
                }
            }
        </Formik>
    
    </>
   )
}
export default form;