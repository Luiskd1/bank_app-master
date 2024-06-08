'use server'
import { GetSession } from '@/app/auth/actions';
import { redirect } from 'next/navigation';

const noShow = async() => {
    const {
        data: { session },
      } = await GetSession();
    
      if (session) {
        return redirect("/dashboard");
      }

}

export default noShow
