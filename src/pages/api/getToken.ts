import { getToken } from "next-auth/jwt"
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    // If you don't have NEXTAUTH_SECRET set, you will have to pass your secret as `secret` to `getToken`
    const token = getToken({ req })
    if (token) {
        // Signed in
        res.status(200).json(token)
    } else {
        // Not Signed in
        res.status(401)
    }
    res.end()
}