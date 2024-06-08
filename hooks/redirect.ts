'use server'
import { GetSession } from '@/app/auth/actions';
import { redirect } from 'next/navigation';

const Redirect = async() => {
    const {
        data: { session },
      } = await GetSession();
    
      if (!session) {
        return redirect("/auth/login");
      }
      console.log(session)
}

export default Redirect
