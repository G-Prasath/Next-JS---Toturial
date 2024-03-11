import { NextRequest } from 'next/server'
import {comments} from './data'

export async function GET(request:NextRequest){
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('query');
    
    const filterCommands = query
    ? comments.filter((comment) => comment.text.includes(query))
    :comments
    
    return Response.json(filterCommands)
}

export async function POST(request: Request){
      const comment_txt = await request.json()
      
      const newComment = {
        id: comments.length + 1,
        text: comment_txt.text
      }
      comments.push(newComment)
    return new Response(JSON.stringify(newComment), {
        headers: {
            'Content-Type': 'application/json'
        },
        status: 201,
    });
}
