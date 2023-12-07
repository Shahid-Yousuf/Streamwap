import {
    Form,
    Input,
    Email,
    Password

} from '../../../tailwind'

const ContactForm = ()=>{
    const fields=[
        {
            component : "input",
            props : {
                name:'fullname',
                placeholder:'Your name'
            }
        },
        {
            component : "input",
            props : {
                name:'mobile',
                type:'number',
                placeholder:'Your name'
            }
        },
        {
            component : "email",
            props : {
                name:'email',
                placeholder:'Your Email'
            }
        },
        {
            component : "input",
            props : {
                textarea:true,
                name:'message',
                placeholder:'Your message'
            }
        }
    ]
    return (
            <Form fields={fields}>
                
            </Form>
            
    )
}

export default ContactForm;