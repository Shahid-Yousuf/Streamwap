import { Icon } from "../../../tailwind";

const Logo = ({className=null})=>{
    return (
        <>
            <div className={`${className} flex gap-2 items-center`}>
                <Icon outlined>play_circle</Icon>
                <h1 className="font-semibold text-xl text-red-600">Streamwap</h1>
            </div>
        </>
    )
}

export default Logo;