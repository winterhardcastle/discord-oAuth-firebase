import { useEffect, useState } from "react";
import { setDoc, getDoc, doc } from 'firebase/firestore'
import {db} from '/server/firebase.js'

const HomePage = () => {
    const [userInfo, setUserInfo] = useState({
        id: '',
        email: '',
        username: '',
        locale: '',
        verified: ''
    })
    const CLIENT_ID = import.meta.env.VITE_CLIENT_ID
    const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET
    const queryString = new URLSearchParams(window.location.search);
	const code = queryString.get('code')

    useEffect(() => {
        //CALLS DISCORD API WITH REDIRECT RESPONSE
        async function getUserInfo () {
            const response = await fetch('https://discord.com/api/oauth2/token', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: new URLSearchParams({
                        'grant_type': 'authorization_code',
                        'code': code,
                        'redirect_uri': 'http://localhost:5173/auth',
                        'client_id': CLIENT_ID,
                        'client_secret': CLIENT_SECRET
                    },
                ),
            })
            const token = await response.json()
    
            const userInfo = await fetch('https://discord.com/api/users/@me', {
                headers: {
                    authorization: `${token.token_type} ${token.access_token}`,
                },
            })
            const user = await userInfo.json()
            //CREATES FIREBASE ENTRY
            await setDoc(doc(db, 'users', user.id), {
                discord_id: user.id,
                username: user.username,
                email: user.email,
                locale: user.locale,
            })
            const docRef = doc(db, "users", user.id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
            } else {
                // docSnap.data() will be undefined in this case
                console.log("No such document!");
            }
            setUserInfo(docSnap.data())
        }
        getUserInfo()
        
    }, [])

    return(
        <>
            <div>
                USER INFO: 
            </div>
            <div>
                <ul>
                    <li>ID: {userInfo.discord_id}</li>
                    <li>EMAIl: {userInfo.email}</li>
                    <li>USERNAME: {userInfo.username}</li>
                    <li>LOCALE: {userInfo.locale}</li>
                    {/* <li>VERIFIED: {userInfo.verified ? 'True' : 'False'}</li> */}
                </ul>
            </div>
        </>
    )
}

export default HomePage;