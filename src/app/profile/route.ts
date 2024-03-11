import { type NextRequest } from "next/server";
import { headers, cookies } from 'next/headers'

export async function GET(request: NextRequest) {
    const requestHeaders = new Headers(request.headers);
    const headerList = headers();

    cookies().set('pages', '20')
    console.log(requestHeaders.get('Authorization'));
    console.log(headerList.get('Authorization'));
    
    return new Response("<h1>API Files of content</h1>", {
        headers: {
            "Content-Type" : "text/html",
            "Set-Cookie" : "them=dark"
        },
    });

}