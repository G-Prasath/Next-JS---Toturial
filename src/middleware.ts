import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest){
    // if(request.nextUrl.pathname === '/products'){
    //     // return NextResponse.redirect(new URL("/hello", request.url))
    //     // return NextResponse.rewrite(new URL("/hello", request.url))
    // }
    const response = NextResponse.next();
    const themPreferance = request.cookies.get("them");
    if(!themPreferance){
        request.cookies.set('them', 'dark')
    }

    response.headers.set('custom-header', 'custom-value')
    return response
    
}