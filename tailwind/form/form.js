'use client'
import {
    Formik,
    Form,
} from 'formik';
import { Button } from '../';
import * as yup from 'yup';
import { Input, Select, UploadInput,Email } from './fields';
const form = ({disabled=false,fields,grid=1,gap=4,onSubmit,...rest})=>{
    
    const schema = {
        email:yup.string().required('Email is required').email('enter valid email'),
        message:yup.string().required('Message is required'),
        name:yup.string().required('Name  is required'),
        username:yup.string().required('Username is required').email('enter valid email'),
        password:yup.string().required('Please enter password'),
        fullname:yup.string().required('Fullname is required'),
        mobile:yup.string().required('Mobile is required'),
        title:yup.string().required('This is required field'),
        desc:yup.string().required('This is required field'),
        duration:yup.string().required('This is required field'),
        starring:yup.string().required('This is required field'),
        thubmnail:yup.string().required('This is required field'),
        video:yup.string().required('This is required field'),
        category:yup.string().required('This is required field'),
        keywords:yup.string().required('This is required field'),

    }

    const defaultValues = {};
    const validation = {};

    fields.map((item)=>{
         const {props} = item;
         const {name} = props;
         defaultValues[name] = ""
         validation[name]=schema[name]
         
    })
    
  
    const Fields = ({formik})=>{
        const allFields = fields.map((item,index)=>{
            const {component,props} = item;
            switch(component){
                case 'input' : return <Input {...props} key={index}/>
                case 'email' : return <Email {...props} key ={index} />
                case 'upload' : return <UploadInput formik={formik} {...props} key={index}/>
                case 'select' : return <Select {...props} key={index}/>
                default : return null
            }
        })
        return allFields;
    }
    
    // const onSubmit = (e)=>{
    //     console.log(e)
    // }

    return (
        <Formik
            initialValues={defaultValues}
            validationSchema={yup.object(validation)}
            onSubmit = {onSubmit}
            resetOnSubmit={false}

        >
            {
                (formik)=>{
                    return (
                        <Form className="flex gap-3 flex-col">
                            <div className={`grid grid-cols-1 lg:grid-cols-${grid} gap-${gap}`}>
                                <Fields formik={formik} />
                            </div>
                            <Button disabled={disabled} type='submit' theme = {disabled ? 'disabled' : 'error'}className="py-2 w-fit ">Submit</Button>
                        </Form>
                    )
                }  
            }
        </Formik>
    )
}

export  default form;