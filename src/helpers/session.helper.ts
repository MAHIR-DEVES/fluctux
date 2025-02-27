import { authOptions } from "@/app/api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth"

export async function serverSession() {
    "use server"; 
    
    const session = await getServerSession(authOptions)

    if(!session) return false

    const user = {
        _id: session.user._id,
        email: session.user.email
    }

    return user
}