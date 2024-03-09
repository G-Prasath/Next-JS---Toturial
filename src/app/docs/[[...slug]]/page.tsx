import React from 'react'

const page = ({ params }: {
    params: { slug: string[] }
}) => {
    return (
        <div>
           
                {
                    params.slug?.length === 2 
                    ?   (
                        <h1>view docs for the feature {params.slug[0]} and concept {params.slug[1]}</h1>
                    )
                    :params.slug?.length === 1
                    ?(
                        <h1>Reviewing the docs feature {params.slug[0]}</h1>
                    )
                    :(
                        <h1>Docs Home Page</h1>
                    )
                }
           
        </div>
    )
}

export default page