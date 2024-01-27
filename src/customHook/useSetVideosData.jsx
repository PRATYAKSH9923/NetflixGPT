import {useEffect} from 'react'
import {NowPlayingAPI, API_OPTIONS, PopularAPI, TopratedAPI, UpcomingAPI} from "../utils/constant"
import { setVideos, setVideos1, setVideos2, setVideos3 } from "../utils/slices/videos"
import { useDispatch } from "react-redux"

export const useSetVideosData = () => {
    var dispatch = useDispatch()
    let setVideoData = async()=>{
        let nowplaying = await fetch(NowPlayingAPI, API_OPTIONS);
        nowplaying= await nowplaying.json();
        dispatch(setVideos(nowplaying.results));
        let popular = await fetch(PopularAPI, API_OPTIONS);
        popular= await popular.json();
        dispatch(setVideos1(popular.results));
        let toprated = await fetch(TopratedAPI, API_OPTIONS);
        toprated= await toprated.json();
        dispatch(setVideos2(toprated.results));
        let upcoming = await fetch(UpcomingAPI, API_OPTIONS);
        upcoming= await upcoming.json();
        dispatch(setVideos3(upcoming.results));

    }
    useEffect(()=>{
        setVideoData();
    },[])
 
}
export default useSetVideosData
