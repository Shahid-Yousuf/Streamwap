import { Button, Carousel, Icon } from "../../../../tailwind";


const Header = ()=>{
    const Caption = ({data})=>{
        return (
            <div className="flex flex-col gap-3 md:gap-10  md:px-5 ">
                <div>
                    <h1 className="text-white font-bold text-base md:text-8xl uppercase mb-2 ">{data.title}</h1>
                    <div className="flex flex-col gap-3 md:flex-row md:gap-8 md:items-center ">
                        <div>
                            {
                                Array(data.rating).fill(0).map((item,index)=>{
                                    return  <Icon key={index} className={'text-red-600'}>star</Icon>
                                })
                            }
                            {
                                Array(5-data.rating).fill(0).map((item,index)=>{
                                    return <Icon key={index}  className={'text-red-500'} outilined>star_outline</Icon>
                                })
                            }
                        </div>
                        <div>
                            <p className="text-red-600">Duration : <span className="text-white">{data.duration}</span> </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4 font-bold text-sm capitalize ">
                    <p className="text-red-500  ">Category<span className="text-white"> : {data.category}</span></p>
                    <p className="text-red-500  ">Starring<span className="text-white "> : {data.starring}</span></p>
                    <p className="text-red-500 ">Tags<span className="text-white "> : {data.tags}</span></p>
                </div>
                <div>
                    <Button theme="error" className={'flex items-center gap-3'}>
                        <Icon>play_circle</Icon>
                        <span>Play Now</span>
                    </Button>
                </div>
            </div>
        )
    }
    const data = [
        {
            image : './sanddust2.jpg',
            caption:<Caption 
                data={{
                    title:'the art of sandust',
                    rating:4,
                    duration:"2:15:40",
                    starring:'tom cruise,anil kapoor,spider,tom cruise,anil kapoor,spider',
                    category:"action,adventure,thriller",
                    tags:"action,drama,thriller"
                }}
            />
        },
        {
            image : './movie-xyz-.png',
            caption:<Caption 
                data={{
                    title:'gorilla',
                    rating:3,
                    duration:"2:04:40",
                    starring:'john doe,villiam sadao,lilly jao',
                    category:"action,adventure,comedy",
                    tags:"action,drama,comedy"
                }}
            />
        },
        {
            image : './pirates.jpg',
            caption:<Caption 
                data={{
                    title:'pirates',
                    rating:5,
                    duration:"2:50:40",
                    starring:'jack sparrow,jade silk,maria lao',
                    category:"action,drama,thriller,adventure",
                    tags:"action,drama,thriller"
                }}
                />
        }
    ]
    return (
       <>
            <div className="hidden md:block">
                <Carousel data={data} height={550} counting={false}/>
            </div>
            <div className="block md:hidden">
                 <Carousel data={data} height={350} dots={false} counting={false} arrow={false}/>
            </div>
       </>
    )
}

export default Header;