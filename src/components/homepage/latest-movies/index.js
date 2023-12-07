
import { Slider } from "../../../../tailwind";


const LatestMovies = ()=>{
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

   return (
        <>
             <h1 className="text-2xl capitalize mb-4">Latest Movies</h1>
             <Slider data={data}/>
        </>
   )
}

export default LatestMovies