import {NextResponse,NextRequest} from 'next/server';
import {fetchByQuery,update,trash}from '../../../../controller/s3.controller';
import {NextApiRequest} from  'next';
export const GET = (req,params)=>{
      
    req['params'] = params.params['s3']
    return fetchByQuery(req,NextResponse);
   
}

export const PUT = ()=>{
    return update(req,NextResponse)
}

export const DELETE = (req,params)=>{
    req['params'] = params.params['s3']
    return trash(req,NextResponse)
}