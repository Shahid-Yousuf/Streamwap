
const Icon = ({children,outlined=false,className=null})=>{
    return(
        <span 
        className={`
            ${outlined ? `${className}  material-icons-outlined `
            : `${className} material-icons`}`}
        >
            {children}
        </span>
    )
}

export default Icon;