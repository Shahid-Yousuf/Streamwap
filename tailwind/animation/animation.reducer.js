'use client'
const model = {
    success:false,
    image:null
}

const AnimationReducer = (state=model,action)=>{
        switch(action.type){
            case 'PREVIEW_IMAGE' : return {
                success:true,
                image:action.payload
            }
            default : return state;
        }
}
export default AnimationReducer;