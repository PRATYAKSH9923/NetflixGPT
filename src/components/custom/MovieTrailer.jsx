import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
const MovieTrailer = () => {
    var trailer = useSelector((store=>{ return store.trailer?.trailer?.[0]}));
  return (
    trailer?.key ? (
    <div className=" absolute h-screen w-screen ">
        <div className="h-[86%] w-[30%] absolute text-white flex justify-center items-center add-sheild-right z-30">
            <div className="w-[80%]">
                <h5 style={{fontSize:"2.5rem" , whiteSpace: "nowrap"}} className="font-semibold pb-1">{trailer?.original_title}</h5>
                <p className="mb-4 wrap-four-lines" style={{fontSize:"small"}}>{trailer?.overview}</p>
                <div>
                    <Link to={`/play?videoId=${trailer.videoid}`}><button type="button" className="text-black bg-gradient-to-r bg-white font-medium rounded text-sm px-6 py-2 mr-4">Play</button></Link>
                    <button type="button" className="text-black bg-gradient-to-r bg-gray-400 font-medium rounded text-sm px-3 py-2">More Info</button>
                </div>
            </div>
        </div>
        <iframe 
            width="100%" 
            height="100%" 
            src={`https://www.youtube.com/embed/${trailer?.key}?loop=1&controls=0&autoplay=1&modestbranding=1&start=5&mute=1`}
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullscreen
        >
        </iframe>
    </div>):null
    
  )
}

export default MovieTrailer