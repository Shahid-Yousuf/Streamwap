const Card = ({children,title,actions=null})=>{
    return(
        <div className="p-5 shadow-lg rounded-md bg-white ">
           {
             title ? <h1 className="mb-4 font-medium text-2xl">{title}</h1> : null
           }
            <div>
                {children}
            </div>
            {
                actions ?
                <div className="flex gap-4 mt-4">
                   {actions}
                </div> : null
            }
        </div>
    )
}

export default Card;