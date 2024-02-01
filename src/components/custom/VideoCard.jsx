/* eslint-disable react/prop-types */
import { Image_Path } from "../../utils/constant"
import { Link } from "react-router-dom"
const VideoCard = (props) => {
  return (
    <div className="p-1 mr-1 bg-transparent rounded-sm cursor-pointer">
        <Link to={`/play?videoId=${props.details.id}`}><img style={{width:"10rem"}} src={Image_Path + props.details.poster_path}></img></Link>
    </div>
  )
}

export default VideoCard