import { NextRequest, NextResponse } from 'next/server';


export const middleware = (request)=>{
    const token = request.cookies.get('token');
   if(!token){
       return NextResponse.json({
        message:"unauthorised user"
       },{status:401});
   }
   
}
  
// export function middleware(req){
//     const data = req.params;
    
//     console.log(data);
// }

export const config = {
    matcher : ["/api/users"]
}