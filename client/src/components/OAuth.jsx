import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess} from '../redux/user/userSlice';


export default function OAuth() {
    const dispatch = useDispatch();

    const handleGoogleClick = async () => {

        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);

            const result = await signInWithPopup(auth, provider)
            const res = await fetch('/api/auth/google', {
                method: 'POST',
                headers: {
                    'Content_Type': 'application/json'
                },
                body: JSON.stringify({
                    username: result.user.displayName,
                    email: result.user.email,
                    photo: result.user.photoURL,

                })
            })
            const data = await res.json()
            dispatch(signInSuccess(data));
        } catch (error) {
            console.log('could not able to signin with google', error);
        }


    }
    return (
        <button onClick={handleGoogleClick} type="button" className='bg-red-600 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
            Continue with Google
        </button>
    )
}
