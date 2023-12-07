
import { useEffect, useState } from "react";
import {Button, Icon, IconButton} from "../";
import { useSprings,animated, useSpring } from "react-spring";
import { useGesture,useDrag } from "react-use-gesture";
import useMeasure from "react-use-measure";
import Style from './animation.module.css';

import { useDispatch } from "react-redux";

export const Carousel= ({data,height=720,dots=true,arrow=true,counting=true})=>{
    const [count,setCount] = useState(0);
    const [move,setMove] = useState(0);
    const[springs,api] = useSprings(data.length,()=>({
        x:"0%"
    }));

    useEffect(()=>{
        let timer = setTimeout(next,5000)
        api.start({
            x:-move+"%"
        });
        return()=>{
            clearTimeout(timer)
        }
    },[move]);
    const prev = ()=>{
        if(count > 0){
            setCount(count-1)
            setMove(move-100)
        }
        else{
            setCount(data.length-1);
            setMove(100*(data.length-1))
        }
       
    }
    const next = ()=>{
        if(count+1 < data.length){
            setCount(count+1)
            setMove(move+100)
        }
        else{
            setCount(0)
            setMove(0)
        }
        
    }
    const dotsControl = (index)=>{
        setCount(index)
        setMove(100 * index)
    }
    const onDragEnd = (e)=>{
        const left = e.direction[0];
        if(left > 0){
            prev();
        }
        else {
            next();
        }
    }

    const bind = useGesture({
        onDragEnd : onDragEnd
    })


    const Anim =({styles,index})=>{
        return (
            <animated.div {...bind()} 
                
                style={{
                    width:"100%",
                    height:height,
                    background:`url(${data[index].image})`,
                    backgroundSize:'cover',
                    ...styles
                }} 
            >
                <div className={` w-full h-full ${Style["caption-bg"]}`}>

                    <div className=" p-8 md:p-16 w-full ">
                        {
                            data[index].caption
                        }
                    </div>
                </div>
            </animated.div>
        )
    }
    return(
        <>
            
            <div className="relative overflow-hidden">
                <div className="flex" style={{
                    width:`${100 * data.length}%`
                }}>
                    {
                        springs.map((styles,index)=>{
                            return <Anim key={index} styles = {styles} index={index}/>
                        })
                    }
                </div>
                
                <div className="  p-5 absolute left-0 top-0 h-full flex flex-col justify-between">
                    <label>{counting ? `${count+1} / ${data.length}` : ''}</label>
                    {
                        arrow ? <button onClick={prev}>
                                    <Icon className='text-white text-5xl'>arrow_back_ios_new</Icon>
                                </button>
                            :null
                    }
                    <label></label>
                </div>

                <div className="  p-5 absolute right-0 top-0 h-full flex flex-col justify-between">
                    <label></label>
                    {
                        arrow ? <button onClick={next}>
                                    <Icon className='text-white text-5xl'>arrow_forward_ios</Icon>
                                </button>
                            : null
                    }
                    <label></label>
                </div>

                <div className="absolute bottom-0 left-0 w-full flex justify-center p-5  gap-2">
                    {
                        dots ? <div className="flex gap-4">
                        {
                            data.map((item,index)=>{
                                return(
                                    <button
                                    key={index}
                                        onClick={()=>dotsControl(index)}
                                        style={{
                                            width:50,
                                            height:5,
                                            background:count===index ? 'white' : 'rgba(255,255,255,.3)'
                                        
                                        }}
                                    ></button>
                                )
                            })
                        }
                    </div> : null
                    }
                </div>
            </div>
        </>
    )
}


export const Slider = ({data,vertical=false})=>{

    const [springs,api] = useSprings(data.length,()=>({
        x:0,
        y:0
    }));
    const [image,imageBound] = useMeasure();
    const [main,mainBound] = useMeasure();
   let move = 0;
   let count = 0;
    const handleDrag = ({offset})=>{
       vertical ? api.start({
        y:offset[1],
       
       })
        :api.start({
        x:offset[0],
       
       })
    }
    const drag = useDrag(handleDrag,{
        bounds:{
            left:-((imageBound.width * data.length) - (mainBound.width-imageBound.width/2)),
            right:0,
            bottom:0,
            top:-((imageBound.height*data.length) - (516-imageBound.height))
        }
    })

    const prev = ()=>{
        if(count > 0){
            vertical ? move-=imageBound.height : move-=imageBound.width;
            api.start({
                x:vertical ? null: -(move),
                y:vertical ? -move :null
            })
            count--;
        }
       
    }

    const next = ()=>{
      
       if(vertical ? count < data.length-2 : count < data.length - 4  ){
        vertical ? move+=imageBound.height:move+=imageBound.width;
        api.start({
            x:vertical ? null : -(move),
            y:vertical ? -move : null
        })
        count++;
       }
       
    }
    
    // useEffect(()=>{
    //     api.start({
    //         x:-move
    //     })
    // },[move])

    
    const dispatch = useDispatch();
    const preview = (index)=>{
        let payload = data[index].thumbnail;
        dispatch({
            type:'PREVIEW_IMAGE',
            payload:payload
        })
    }
    const Anim = ({style,index})=>{
        return (
            <animated.div className=""
                onClick={vertical ? ()=>preview(index) : null}
                ref={image}
                style={{
                    height:181,
                    width: vertical ? '100%' : '25%',
                    background:`url(${data[index].thumbnail})`,
                    backgroundSize:'cover',
                    ...style
                }}
              
                {...drag()}
            >
                <div className={`w-full h-full flex items-center px-3 ${Style["caption-bg"]} `}>
                    <div className="space-y-2">
                        <h1 className="text-xl">{data[index]['title']}</h1>
                        <p>{data[index]['duration']}</p>
                        <Button theme="error" className={'flex capitalize gap-2 py-2 px-2'}>
                            <Icon>play_circle</Icon>
                            <span className="uppercase text-sm"> play now</span>
                        </Button>
                    </div>
                </div>
            </animated.div>
        )
    }
    return (
        
        <div className={`${vertical ? 'null' : 'relative'} overflow-hidden select-none `} ref={main}>
            
           <div className={`flex gap-4  ${vertical ? 'flex-col' : 'flex-row'}`}
            style={{
               width:`${vertical ? '100%' : (25*data.length)}%`
           }}>
                {
                    springs.map((style,index)=>{
                        return <Anim key={index} style={style} index={index}/>
                    })
                }
           </div>

            <div className={`absolute flex ${vertical ? 'justify-center w-full left-0 top-0' :'items-center h-full left-0 top-0'} `}>
                <button className={ ` flex items-center ${vertical ? 'p-2' : 'p-3 flex '}`} style={{background:'rgba(0,0,0,0.8'}} onClick={prev}>
                <Icon>{vertical ? 'arrow_upward' : 'arrow_back_ios'}</Icon>
                </button>
            </div>

            <div className={` absolute flex ${vertical ? 'w-full justify-center left-0 bottom-0' : 'h-full  right-0 top-0   items-center'}`}>
                <button className={ ` flex items-center ${vertical ? 'p-2' : 'p-3 flex '}`} style={{background:'rgba(0,0,0,0.8'}} onClick={next}>
                    <Icon>{vertical ? 'arrow_downward' : 'arrow_forward_ios'}</Icon>
                </button>
            </div>

        </div>
    )
}
