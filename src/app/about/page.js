import { Button,Card } from "../../../tailwind";
const About = ()=>{
    const actions = [
        <Button theme="o-primary">Cancel</Button>,
        <Button theme="warning">Login</Button>
    ]
    return (
        <div 
            className="bg-blue-600
            min-h-screen 
            flex items-center
            justify-center
            px-5 
            md:px-0
            "
            
          >
            <div className="w-full  md:w-4/12 ">
                <Card title={'Register Now'} actions={actions}>
                    <p className="text-justify whitespace-normal">lease note that Feedback team doesn't reply to user submissions but will look into the suggestions and if it really improves the Google Translate product</p>
                </Card>
            </div>
        </div>
    )
}

export default About;