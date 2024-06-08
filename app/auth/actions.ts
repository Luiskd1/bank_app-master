'use server'
import createClient from '@/lib/Supa/server';
import { userLogin, userRegister } from "@/lib/schema";
import { redirect } from "next/navigation";



export const SingInUser = async (info: userLogin) => {
  try {
    const supabase = createClient()
    const { data, error } = await supabase
      .auth
      .signInWithPassword({
        email: info.email,
        password: info.password,
      });
    if (error) {
      throw error;
    }
    return { data, error: null };
    
  } catch (error) {
    console.error('Error de autenticación:', error);
    return { data: null, error };
  }
}




export const GetSession = async () => {

  const supabase = createClient()
  const session = supabase.auth.getSession()
  return session

}



export const CreateData = async (info: userRegister) => {
  const supabase = await createClient()
  try {
    const { data: results } = await supabase.auth.signUp({
      email: info.email,
      password: info.password,
      options: {
        emailRedirectTo: 'http://localhost:3000/',
        data: {
          name: info.firstname,
          lastname: info.lastname,
          cedula: info.cedula,
        }
      }

    })
    // crear cuenta en cero una vez el usuario ya este registrado
    console.log(results)
    const { data:bankinfo, error } = await supabase
      .from('DB_BANK_ACCOUNT')
      .insert({
        name: results.user?.user_metadata.name,
        cedula: results.user?.user_metadata.cedula,
        saldo: 0,
        user_id:results.user?.id
      })
      console.log(bankinfo)
      console.log(error)


    return results
  } catch (error) {
    console.log('SERVER ERROR', error)
  }
}


export const GetOut = async () => {
  const supabase = createClient();
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.log(error);
  }
  redirect('/auth/login');

};


