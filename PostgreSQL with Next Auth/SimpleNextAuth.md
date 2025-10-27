// Auth.js v4 

Steps for setting up simple next auth in the projects

1.  make the folder route api/auth/[...nextauth]/route.ts (To catch all the requests coming to this route)

2.  Inside api/auth/[...nextauth]/route.ts
    
    import NextAuth from 'next-auth'
    import { authOptions } from '../../../lib/auth';

    const handler = NextAuth(authOptions)

    export const GET = handler;
    export const POST = handler;

    (You could have directly defined authOptions here but this is done to get the id on the server component without doing this you will not get the id in session.user.id)

3. Make lib/auth.ts

4.  Now you have to wrap all of your app logic inside <SessionProvider> 
    As <SessionProvider> is from "next-auth/react" it means you have to use 'use client' at the top
    so you should not make call it in layout.tsx to wrap your app as you should not make it a client compo
    so just make a providers.tsx with the wrapping logic and <SessionProvider>
    and call and wrap your app with <Providers> (that you made) in layout.tsx

5. Now you are good to go and use next auth 

