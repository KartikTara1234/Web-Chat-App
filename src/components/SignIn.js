import React from 'react'
import { auth } from '../firebase.js'
import {Button} from '@material-ui/core'

function SignIn() {
    function signInWithGoogle() {
        const provider = new auth.GoogleAuthProvider
    }
    return (
        <div>
            <Button onClick={signInWithGoogle}>SignIn With Google</Button>
        </div>
    )
}

export default SignIn
