'use client'
import VideoJs from 'video.js';


import "videojs-contrib-quality-levels"
import 'videojs-hls-quality-selector';
// import 'videojs-seek-buttons';
// import 'videojs-hotkeys';
import 'video.js/dist/video-js.css';

// import 'videojs-seek-buttons/dist/videojs-seek-buttons.css';
// import "videojs-seek-buttons";
// import "videojs-hotkeys";



// import "videojs-seek-buttons/dist/videojs-seek-buttons.css"


// City
import '@videojs/themes/dist/city/index.css';

// Fantasy
import '@videojs/themes/dist/fantasy/index.css';

// Forest
import '@videojs/themes/dist/forest/index.css';

// Sea
import '@videojs/themes/dist/sea/index.css';
import 'video.js/dist/video-js.css';
import {
    useRef,
    useEffect
} from 'react';
const VideoPlayer = ()=>{
    const video = useRef();
    const player = useRef(null);
   const options = {
    controls:true,
    autoplay:true,
    sources: [
        {
          src: 'https://dw18plmanji71.cloudfront.net/hls/song.mpd',
          type: 'application/dash+xml'
        },
      ],
    
      
   playbackRates:[0.5,1,1.5,2],
   fluid:true

   }
   const onReady = (player)=>{

    //   player.hotkeys({
    //     alwaysCaptureHotKeys:true,
    //     seekStep:10,
    //     enableVolumeScroll:true
  
    //   });
    

      player.hlsQualitySelector({
        displayCurrentQuality: true
      });

//     player.qualityLevels();
//   player.qualityLevels().on('change', () => {
//     const currentQuality = player.qualityLevels().currentQuality();
//     console.log('Current quality level:', currentQuality.label);
//   });
       
   }
   useEffect(()=>{
       player.current =  VideoJs(video.current,options,()=>onReady(player.current));

      
   },[]);
   
    return (
        <>
             <div className=' w-full md:w-6/12'>
                <video ref={video}className='video-js vjs-theme-fantasy' />
             </div>
            
        </>
    )
}

export default VideoPlayer;



