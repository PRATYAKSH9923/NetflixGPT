import VideoSection from "./VideoSection"
import { useSelector } from "react-redux"

const MovieListing = () => {
    var Nowplaying = useSelector((store=>{ return store.videos}));
  return (
    <><VideoSection movies={Nowplaying.videos} title="Now Playing" /><VideoSection movies={Nowplaying.videos1} title="Popular" /><VideoSection movies={Nowplaying.videos2} title="Top Rated" /><VideoSection movies={Nowplaying.videos3} title="Upoming" /></>
  )
}

export default MovieListing