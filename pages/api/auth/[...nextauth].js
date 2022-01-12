import NextAuth from "next-auth/next";
import SpotifyProvider from "next-auth/providers/spotify"
import spotifyApi, { LOGIN_URL } from "../../../lib/spotify";


async function refreshAccessToken(token) {
    try {

        spotifyApi.setAccessToken(token.accessToken);
        spotifyApi.setRefreshToken(token.refreshToken);


        const { body:refreshedToken } = await spotifyApi.refreshAccessToken();
        console.log("Refreshed the acess token...", refreshedToken);

        return {
            ...token,
            accessToken: refreshedToken,
            accessTokenExpires: Date.now + refreshedToken.expires_in * 1000 ,
            refreshToken: refreshedToken.refresh_token ?? token.refreshToken
        }
    } catch (error) {
        console.log(error)


        return {
            ...token,
            error: 'RefreshAcessTokenError'
        }
    }
}

export default NextAuth({
    providers: [
        SpotifyProvider({
            clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
            authorization: LOGIN_URL,  
        }),
    ],
    secret: process.env.JWT_SECRET,
    pages: {
        signIn: '/login'
    },
    callbacks: {
        async jwt({ token, account, user }){
            
            // initial sign in
            if(account && user) {
                return {
                    ...token,
                    accessToken: account.access_token,
                    refreshToken: account.refresh_token,
                    username: account.providerAccountId,
                    accessTokenExpires: account.expires_at * 1000
                }
            }

            if(Date.now() < token.accessTokenExpires) {

                return token;
            }

            console.log('THE ACCESSTOKEN IS EXPIRED REFRESHING NOW...');
            return await refreshAccessToken(token)
        }
    }
})