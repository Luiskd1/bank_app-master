import { useQuery } from "@tanstack/react-query";
import axios from "axios";



const supabaseKey ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZlemZ0ZG90ZWtsZXVkemlob2FoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA1Mzk1MTIsImV4cCI6MjAyNjExNTUxMn0.LP6z78VnRGU2Bv_gPzavLVm_GpDi3Rwyq3oQ3QS0ut0'

const basecreadabank = axios.create({
    baseURL: 'https://vezftdotekleudzihoah.supabase.co'
})


export const  useApiBank =  () => {
 return useQuery( {
    queryKey:["BankData"],
    queryFn: async() => await basecreadabank.get("/rest/v1/DB_BANK_ACCOUNT",
        {headers: {
            'apikey':supabaseKey
        }}
    )
})
}









