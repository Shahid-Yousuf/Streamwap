import {
    MOVIE_REQUEST,
    MOVIE_SUCCESS,
    MOVIE_FAILED,
    JOB_REQUEST,
    JOB_SUCCESS,
    JOB_FAILED
} from './movies.type';
 
import axios from 'axios'; 

export const createJob = (data)=>{
    return async(dispatch)=>{
        try {

            dispatch({
                type:JOB_REQUEST
            })

            const response = await axios({
                method:'post',
                url:'/api/media-convert',
                data:{
                    key:data.video
                }
            })
            dispatch({
                type:JOB_SUCCESS,
                payload:response.data
            })

            data['job_id'] =  response.data.job.Job.Id;
            //call the movies api and store movie related data to database
           dispatch(createMovie(data));

        } catch (error) {
            dispatch({
                type:JOB_FAILED,
                payload:error.response
            });
        }
    }
}



const createMovie = (data)=>{
    return async(dispatch)=>{
       try {
            dispatch({
                type:MOVIE_REQUEST
            });

            const response = await axios({
                method:"post",
                url:'/api/movies',
                data
            })

            dispatch({
                type:MOVIE_SUCCESS,
                payload : response.data

            })

       } catch (error) {
            dispatch({
                type:MOVIE_FAILED,
                payload:error
            })
       }
    }
}