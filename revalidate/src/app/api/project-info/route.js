//it is static because result doesn't depends upon anything 
export async function GET(){
    return Response.json({
        projectName:'Next.js',
    })
}
