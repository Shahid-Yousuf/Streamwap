'use client';
import {Icon} from '../'
const btnSize = {
    sm:'w-10 h-10  rounded-full',
    md:'w-12 h-12 rounded-full',
    lg:'w-14 h-14 rounded-full',
    xl:'w-16 h-16 rounded-full'
}
const sample = {
    "o-primary":'border border-teal-600 shadow-sm  ',
    "o-secondary":'border border-blue-600   shadow-sm  ',
    "o-info":'border border-cyan-600   shadow-sm  ',
    "o-error":'border border-red-600   shadow-sm  ',
    "o-warning":'border border-orange-600   shadow-sm  ',
    "o-success":'border border-green-600 shadow-sm  ',

    "primary":'bg-teal-600  shadow-lg',
    "secondary":'bg-blue-600    shadow-lg',
    "info":'bg-cyan-600     shadow-lg',
    "error":'bg-red-600     shadow-lg',
    "warning":'bg-orange-600     shadow-lg',
    "success":'bg-green-600     shadow-lg',

    "t-primary": "text-teal-600 rounded-sm",
    "t-secondary": "text-blue-600 rounded-sm",
    "t-info": "text-cyan-600 rounded-sm",
    "t-error": "text-red-600 rounded-sm",
    "t-warning": "text-orange-600 rounded-sm",
    "t-success": "text-green-600 rounded-sm"




}
const IconButton = ({
        children,
        theme="o-primary",
        onClick=null,
        className=null,
        size='sm'

    })=>{    
       
    return (
        <button className={`${sample[theme]}  ${className}  ${btnSize[size]} flex items-center justify-center`} onClick={onClick}>
          <Icon>{children}</Icon>
        </button>
    )
}

export default IconButton;