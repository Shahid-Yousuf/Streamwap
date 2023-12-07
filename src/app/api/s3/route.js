import dbcon from '../../../dbConfig/database';
import { fetch,create, update, trash} from "../../../controller/s3.controller";

import {NextResponse} from 'next/server';

dbcon();


export const GET = (req,content)=>{
    
    
    return fetch(req, NextResponse)
 
}


export const POST = (req)=>{
    return create(req,NextResponse);
}

