import Header from "./header";
import LatestMovies from "./latest-movies";
import UpcomingMovies from "./upcoming-movies";
import TopTenMovies from "./top-10-movies";
import TrendingMovies from "./trending-movies";


const Homepage = ()=>{
    return(
        <>
            <Header />
            <div className="bg-slate-800 p-8 md:p-16">
                <div className=" text-white space-y-8 md:space-y-16">
                    <LatestMovies />
                    <TopTenMovies />
                    {/* <UpcomingMovies />
                    <TopTenMovies />
                    <TrendingMovies /> */}
                </div>
            </div>
        </>
    )
}

export default Homepage;