
import {
    NextResponse
} from 'next/server';

import {
    fetch,
    create
} from '../../../controller/movies.controller';

export const GET = (req)=>{
    return fetch(req,NextResponse)
}


export const POST = (req)=>{
    return create(req,NextResponse)
}

