'use client';
const sample = {
    "o-primary":'border border-teal-600 px-4 py-2 text-teal-600 shadow-sm  rounded-sm',
    "o-secondary":'border border-blue-600 px-4 py-2 text-blue-600 shadow-sm  rounded-sm',
    "o-info":'border border-cyan-600 px-4 py-2 text-cyan-600 shadow-sm  rounded-sm',
    "o-error":'border border-red-600 px-4 py-2 text-red-600 shadow-sm  rounded-sm',
    "o-warning":'border border-orange-600 px-4 py-2 text-orange-600 shadow-sm  rounded-sm',
    "o-success":'border border-green-600 px-4 py-2 text-green-600 shadow-sm  rounded-sm',
    "disabled" : "bg-gray-200 px-4 py-2 text-white rounded-sm shadow-lg",
    "primary":'bg-teal-600 px-4 py-2 text-white rounded-sm shadow-lg',
    "secondary":'bg-blue-600 px-4 py-2 text-white  rounded-sm shadow-lg',
    "info":'bg-cyan-600 px-4 py-2 text-white  rounded-sm shadow-lg',
    "error":'bg-red-600 px-4 py-3 text-white  rounded-sm shadow-lg',
    "warning":'bg-orange-600 px-4 py-2 text-white  rounded-sm shadow-lg',
    "success":'bg-green-600 px-4 py-2 text-white  rounded-sm shadow-lg',

    "t-primary":' px-4 py-2 text-teal-600 ',
    "t-secondary":' px-4 py-2 text-blue-600 ',
    "t-info":' px-4 py-2 text-cyan-600 ',
    "t-error":' px-4 py-2 text-red-600 ',
    "t-warning":' px-4 py-2 text-orange-600 ',
    "t-success":' px-4 py-2 text-green-600 ',



}
const Button = ({
        children,
        theme="o-primary",
        onClick=null,
        className=null,
        ...rest

    })=>{    
       
    return (
        <button {...rest} className={sample[theme]+" "+className+" flex items-center "} onClick={onClick}>{children}</button>
    )
}

export default Button;



// sec blue
// info cyan
// error red
// warning orange
// success green