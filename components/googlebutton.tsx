
import React from 'react'
import { Button } from './ui/button'
import { FcGoogle } from 'react-icons/fc'
import supabaseClient from '@/lib/Supa/client';
import createClient from '@/lib/Supa/server';

const handleGoogleLogin = async () => {
    try {
      const supabase = supabaseClient()
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
        },
      });
  
      if (error) {
        console.error('Error al iniciar sesión:', error.message);
      }
    } catch (error) {
      console.error('Error inesperado al iniciar sesión:', error);
    }
  };
  
const GoogleButton = () => {
    return (
        <Button variant="outline" className="w-full flex gap-3 " onClick={handleGoogleLogin}>
            <FcGoogle style={{ fontSize: '24px' }} />
            Login with Google
        </Button>
    )
}

export default GoogleButton
