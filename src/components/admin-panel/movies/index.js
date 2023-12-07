'use client'
import {Dialog} from "../../../../tailwind";
import useS3 from "../../../../hooks/useS3";
import {
    Form,
    Card
} from '../../../../tailwind';
import {useState,useEffect} from 'react';
import {
    useDispatch,
    useSelector
} from 'react-redux'
import {
    createJob
} from './movies.action';



const Movies = ()=>{
    
    const dispatch = useDispatch();
    const {moviesReducer} = useSelector(response=>response);
    const [job,setJob] = useState(false);
    const [title,setTitle] = useState(null);
    const [progress,setProgress] = useState({
        thumbnail:0,
        video:0
    })
    
    const MoviesForm = ()=>{
        const options = [
            {
                label:'Drama',
                value:'drama'
            },
            {
                label:'Comedy',
                value:'comedy'
            },
            {
                label:'Thriller',
                value:'thriller'
            }
        ]
        const fields   = [
            {
                component : 'upload',
                props : {
                    name:'thumbnail',
                    accept:'image/*',
                    label:'Thumbnail'
                }
            },
            {
                component : 'upload',
                props : {
                    name:'video',
                    accept:'video/*',
                    label:'Video',
                   
                }
            },
            {
                component: 'input',
                props : {
                    name:'desc',
                    placeholder : 'Movie description',
                    textarea:true,
                    className : 'bg-gray-200 rounded-sm',
                    width:'col-span-full'

                }
            },
            {
                component: 'input',
                props : {
                    name:'starring',
                    placeholder : 'Movie actors',
                    className:'bg-gray-200 rounded-sm'
                }
            },
            
            {
                component : 'select',
                props : {
                    name:'category',
                    data : options,
                    className:'bg-gray-200 mt-1',
                    width:'col-span-full'
                }
            },
            {
                component : 'input',
                props : {
                    name:'keywords',
                    placeholder:'Keywords',
                    textarea:true,
                    className:'bg-gray-200',
                    width:'col-span-full'
                }
            }
        ]

        useEffect(()=>{
            if(moviesReducer.movie_success){
                alert("working....")
               return setJob(false);
            }
        },[moviesReducer]);


        const upload = async (fileProps,values)=>{
            const log = [];
            for(let data of fileProps){
                const upload = useS3(values[data.name],data.key);
                const uploading = await upload();
               try{
                uploading.on('httpUploadProgress',(e)=>{
                    const loaded = (e.loaded);
                    const total = e.total;
                    const per = Math.floor((loaded*100)/total);
                    console.log(per+"%");
                    setProgress((oldData)=>{
                        return {
                            ...oldData,
                            [data.name] : per
                        }
                    })
                })
                const response = await uploading.promise();
                data.success = true;
                data.s3 = response;
                log.push(data);
               }
               catch(err){
                data.success = false;
                data.err = err;
                log.push(data);
               }
            }

            return log;

        }

        const getVideoDuration = (file)=>{
            return new Promise((resolve,reject)=>{
                const url = URL.createObjectURL(file);
                const video = document.createElement('video');
                video.src = url;
                video.preload = "metadata";
                video.onloadedmetadata = ()=>resolve(video.duration)
            })
        }

       const onSubmit = async (values)=>{
            dispatch({
                type:'CLOSE_DIALOG'
            });
            setJob(true);
            values.title = values['video'].name.toLowerCase().split('.')[0];
            values.duration = await getVideoDuration(values['video']);
            setTitle(values.title);       
            const videoName = values.video.name;
           const folder = videoName.split('.')[0];
            const fileProps = [
                {
                    name:'thumbnail',
                    key:"original/"+folder+"/"+folder+".png"
                },
                {
                    name:'video',
                    key:"original/"+folder+"/"+folder+".mp4"
                }
            ]
           
            const log = await upload(fileProps,values);
           
                for(let data of fileProps){
                  values[data.name] = data.key;
                }
                console.log(values);
               dispatch(createJob(values));
       }

        return(
                <Form fields={fields} grid={2} gap={3}  onSubmit={onSubmit} disabled={job} />
        )
    }

    const Steps = ()=>{
        return (
            <>
                <Card title={title}>
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-2">
                        <div>
                            <label className="mb-1 font-medium flex">Thubmnail - {progress.thumbnail}%</label>
                            <div className="bg-gray-200 h-1.5">
                                <div className=" bg-green-600 h-full" style={{width:progress.thumbnail+"%"}}></div>
                            </div>
                        </div>

                        <div>
                            <label className="mb-1 font-medium flex">Video - {progress.video}%</label>
                            <div className="bg-gray-200 h-1.5">
                                <div className=" bg-green-600 h-full " style={{width:progress.video+"%"}}></div>
                            </div>
                        </div>

                        <div>
                            <label className="mb-1 font-medium flex">Job</label>
                            <div className="bg-gray-200 h-1.5 overflow-hidden">
                                <div className=
                                {`bg-green-600 h-full w-0
                                  ${moviesReducer.job_loading ? 'infinite' : null} 
                                  ${moviesReducer.job_success ? 'w-full' : null}
                                  `
                                }></div>
                            </div>
                        </div>
                        <div>
                            <label className="mb-1 font-medium flex">Finalizing</label>
                            <div className="bg-gray-200 h-1.5 overflow-hidden">
                                <div className=
                                {`bg-green-600 h-full w-0
                                  ${moviesReducer.movie_loading ? 'infinite' : null} 
                                  ${moviesReducer.movie_success ? 'w-full' : null}
                                  `
                                }></div>
                            </div>
                        </div>
                    </div>
                </Card>
            </>
        )
    }

    return (
        <>
            {
                job ? <Steps /> : null
            }
            <Dialog title={'Add a Movie'}>
                <MoviesForm />
            </Dialog>
        </>
    )
}

export default Movies