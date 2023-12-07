'use client';
import Link from "next/link"
import {useState,useEffct, useEffect} from 'react'
import { Scale,Fade, Flip, Expand,IconButton } from '../';
const sample = {
    fixedWidth:'  lg:w-11/12 mx-auto ',
    fixed:'w-full top-0 left-0 fixed ',
    sticky:'w-full top-0 left-0 sticky animate__animated animate__slideInDown',
    primary : {
        nav:'bg-indigo-600',
        a:'text-white py-4 md:py-6 px-3 md:px-7  hover:bg-indigo-500'
    },
    dark: {
        nav: "bg-slate-900 sm:px-4",
        a: "text-white py-4 md:py-6 px-3 md:px-7 hover:bg-slate-800 hover:text-white"
      },
      light: {
        nav: "bg-gray-100 sm:px-4",
        a: "text-black py-4 md:py-6 px-3 md:px-7 hover:bg-gray-50"
      },
    secondary : {
        nav:'bg-blue-600',
        a:'text-white py-4 md:py-6 px-3 md:px-7  hover:bg-blue-500'
    },
    
    info : {
        nav:'bg-blue-600',
        a:'text-white py-4 md:py-6 px-3 md:px-7  hover:bg-blue-500'
    },
    error : {
        nav:'bg-red-600',
        a:'text-white py-4 md:py-6 px-3 md:px-7  hover:bg-red-500'
    },
   warning : {
        nav:'bg-orange-600',
        a:'text-white py-4 md:py-6 px-3 md:px-7  hover:bg-orange-500'
    },
   success : {
        nav:'bg-green-600',
        a:'text-white py-4 md:py-6 px-3 md:px-7  hover:bg-green-500'
    },
   

    variant : {
        start:'flex flex-col md:flex-row md:flex-start md:items-center gap-10',
        end:'flex flex-col md:flex-row md:flex-end md:items-center gap-10',
        between:'flex flex-col md:flex-row md:justify-between md:items-center',
        around:'flex flex-col md:flex-row md:justify-around md:items-center',
        evenly:'flex flex-col md:flex-row md:justify-evenly md:items-center',
        
    }
}
const Navbar = ({
            theme='primary',
            fullWidth=false,
            variant='start',
            menus,
            fixed=false,
            sticky=false,
            toolbars=null
        }

    )=>{
        const [stickyControl,setStickyControl] = useState(sticky);
        const [show,setShow] = useState(false);
        useEffect(()=>{
          if(sticky){
            window.onscroll = ()=>{
                if(window.scrollY > 250 ){
                    console.log("problem")
                    setStickyControl(true)
                }
                else {
                    setStickyControl(false);
                }
            }
          }
        },[setStickyControl])

        const Menu = ({menu})=>{
            return (
                <Link href={menu.href} className={`${sample[theme]['a']}`}>{menu.label}</Link>
            )
        }
    return (
        <>
            <nav 
                className={`
                    ${sample[theme]['nav']} 
                    ${fixed ? sample['fixed'] : ''}
                    ${stickyControl ? sample['sticky'] : 'animate__animated animate__slideInUp'} 
                    ${fullWidth ? 'px-0 md:px-7 py-3' : ''}
                    `}
            >
            
                <div 
                    className=
                    {`
                        ${fullWidth ? '' : sample['fixedWidth']}
                        ${sample.variant[variant]} 

                    `}
                >
                    <div className="flex items-center justify-between  border-teal-500">
                        <Link href='/' className={`${sample[theme]['a']}`} >{menus.brandName}</Link>
                        <IconButton className='block lg:hidden bg-white mr-3' onClick={()=>setShow(!show)}>menu</IconButton>
                    </div>
                    <div className="hidden lg:flex flex-row">
                        {
                            menus.links.map((link,index)=>{
                                return <Menu key={index} menu={link}/>
                            })
                        }
                    </div>
                    {
                        toolbars ? 
                        <div className="hidden lg:flex gap-3 items-center p-2">
                        {
                            toolbars.map((item,index)=>{
                                return <div key={index}>{item.label}</div>
                            })
                        }
                        </div> 
                        : null
                    }
                </div>
            </nav>
            <Expand state={show} className="block lg:hidden  bg-slate-900 z-50 fixed w-full left-0 bottom-0 ">
                <div className=" flex flex-col">
                        {
                            menus.links.map((link,index)=>{
                                return <Menu key={index} menu={link}/>
                            })
                        }
                </div>
                {
                    toolbars ? 
                    <div className=" flex gap-3 items-center p-2 border border-green-700">
                    {
                        toolbars.map((item,index)=>{
                            return <div key={index}>{item.label}</div>
                        })
                    }
                    </div> 
                    : null
                }
            </Expand>
        </>

    )
}

export default Navbar