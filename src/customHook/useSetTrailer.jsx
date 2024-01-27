import {useEffect} from 'react'
import {Trailer, API_OPTIONS} from "../utils/constant"
import { setTrailer } from "../utils/slices/trailer"
import { useDispatch, useSelector } from "react-redux"

const useSetTrailer = () => {
    var dispatch = useDispatch()
    var videos = useSelector((store=>{ return store.videos.videos}));
    let setTrailerdata = async()=>{
        let trailerdata = await fetch(`${Trailer}${videos?.[0]?.id}/videos`, API_OPTIONS);
        trailerdata= await trailerdata.json();
        console.log("trailerdatatrailerdatatrailerdata",trailerdata);
        var trailer = trailerdata.results.filter((data)=>{
            return data.type === "Trailer";
        })
        if(trailer?.length > 0){
            trailer[0].original_title= videos?.[0].original_title;
            trailer[0].overview= videos?.[0].overview
        }
        dispatch(setTrailer(trailer))
        
    }
    useEffect(()=>{
        if(videos?.length > 0){
            setTrailerdata();
        }
        
    },[videos])
}

export default useSetTrailer