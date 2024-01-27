/* eslint-disable react/prop-types */
import VideoCard from "./VideoCard"
const VideoSection = (props) => {
  return (
    <div className="z-10 pb-3 px-4">
        <div className=" text-white p-2 font-semibold text-xl">{props?.title}</div>
        <div className="overflow-x-scroll scroll-container" style={{display:"-webkit-box"}}>{props?.movies?.map((movie) => {
            return <VideoCard key={movie.id} details={movie} />
            })}</div>
    </div>
  )
}

export default VideoSection