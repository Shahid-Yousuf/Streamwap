import { Transition } from '@headlessui/react';
export const Fade = ({children,state=false,className=null})=>{
    return (
       <Transition
            className={className}
            show={state}
            enter='transition-opacity duration-500'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave="transition-opacity duration-500"
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
       >
            {children}
       </Transition>
    )
}

export const Expand = ({children,state=false,className=null})=>{
    return (
       <Transition
            className={className}
            show={state}
            enter='transform transition-scale-y duration-500'
            enterFrom='scale-y-0'
            enterTo='scale-y-100'
            leave='transform transition-scale duration-500'
            leaveFrom='scale-y-100'
            leaveTo='scale-y-0'
       >
            {children}
       </Transition>
    )
}


export const Scale = ({children,state=false,className=null})=>{
    return (
        <Transition
            className={className}
            show={state}
            enter='transform transition-scale-y duration-500'
            enterFrom='scale-y-0'
            enterTo='scale-y-100'
            leave='transform transition-scale duration-500'
            leaveFrom='scale-y-100'
            leaveTo='scale-y-0'
        >
            {children}
        </Transition>
    )
}
export const Flip = ({children,state=false,className=null})=>{
    return (
        <Transition
            className={className}
            show={state}
            enter='transform transition-scale-y duration-500'
            enterFrom='scale-x-0'
            enterTo='scale-x-100'
            leave='transform transition-scale duration-500'
            leaveFrom='scale-x-100'
            leaveTo='scale-x-0'
        >
            {children}
        </Transition>
    )
}

export const Zoom = ({children,state=false,className=null})=>{
    return(
        <Transition
            className={className}
            show={state}
            enter='transform  transition duration-500'
            enterFrom='scale-x-0 scale-y-0'
            enterTo='scale-x-100 scale-y-100'
            leave='transform  transition duration-500'
            leaveFrom='scale-x-100 scale-y-100'
            leaveTo='scale-x-0 scale-y-0'
        >
            {children}
        </Transition>
    )
}