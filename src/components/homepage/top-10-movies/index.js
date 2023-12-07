'use client';
import { Slider } from "../../../../tailwind";
import {
    useSelector
} from 'react-redux';

const TopTenMovies = ()=>{
    const data = [
        {
            thumbnail:"sanddust2.jpg",
            title:'Sandust',
            duration:'2:15:20'
        },
        {
            thumbnail:"movie-abc.png",
            title:'Sandust',
            duration:'2:15:20'
        },
        {
            thumbnail:"movie-xyz-.png",
            title:'Sandust',
            duration:'2:15:20'
        },
        {
            thumbnail:"sanddust2.jpg",
            title:'Sandust',
            duration:'2:15:20'
        },
        {
            thumbnail:"movie-abc.png",
            title:'Sandust',
            duration:'2:15:20'
        },
        {
            thumbnail:"movie-xyz-.png",
            title:'Sandust',
            duration:'2:15:20'
        },
        {
            thumbnail:"sanddust2.jpg",
            title:'Sandust',
            duration:'2:15:20'
        },
        {
            thumbnail:"movie-abc.png",
            title:'Sandust',
            duration:'2:15:20'
        },
        {
            thumbnail:"movie-xyz-.png",
            title:'Sandust',
            duration:'2:15:20'
        },
       
       ];
       const {AnimationReducer} = useSelector(response=>response);
       const { image } = AnimationReducer;
       return (
        <>
            <div style={{
                transition:'0.5s linear',
                height:600,
               
                backgroundSize:"cover",
                background:`url(${image ? image : 'movie-xyz-.png'})`,
               
               
                
            }}>

                <div 
                    style={{
                        background:'linear-gradient(to right,rgba(0,0,0,0.9),transparent)',
                    }}
                    className="p-8 h-full "
                >
                    <h1 className="text-2xl mb-4">Top 10 Movies</h1>
                    <div className="overflow-hidden relative  w-[330px] h-[516px]">
                        <Slider data={data} vertical={true}/>
                    </div>
                </div>
            </div>
        </>
       )
}

export default TopTenMovies