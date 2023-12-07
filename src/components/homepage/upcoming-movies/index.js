import { Slider } from "../../../../tailwind";


const UpcomingMovies = ()=>{
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
        <div>
            <h1 className="capitalize text-2xl mb-4">upcoming movies</h1>
            <Slider data={data}/>
        </div>
    )
}

export default UpcomingMovies;