"use client"
import React from 'react';
import { Button } from './ui/button';
import { FcGoogle } from 'react-icons/fc';
import supabaseClient from '@/lib/Supa/client';
import { handleSignInWithGoogle, signInWithGoogle } from '@/app/auth/actions';

const GoogleButton = () => {

    const handleGoogleLogin = async () => {
        try {
          await  signInWithGoogle()
        } catch (error) {
            console.error('Error inesperado al iniciar sesión:', error);
        }
    };

    return (
        <Button variant="outline" className="w-full flex gap-3 " onClick={handleGoogleLogin}>
            <FcGoogle style={{ fontSize: '24px' }} />
            Login with Google
        </Button>
    );
}

export default GoogleButton;
