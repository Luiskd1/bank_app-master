'use client'

import { GetSession } from '@/app/auth/actions'
import { useQuery } from '@tanstack/react-query'

const useApi = () => {

  
    return  useQuery({
        queryKey: ["session"],
        queryFn: async () => await GetSession()
    })

}

export default useApi
