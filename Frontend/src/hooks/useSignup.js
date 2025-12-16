import { useMutation, useQueryClient } from '@tanstack/react-query'

import toast from 'react-hot-toast'
import { signup } from '../lib/api'

const useSignup = () => {
   const queryClient=useQueryClient()

   const{mutate,isPending,error}=useMutation({
       mutationFn:signup,
       onSuccess:()=>{
        queryClient.invalidateQueries({queryKey:['authUser']});
        toast.success("Signed in successfully");
       }
   })

   return {signupMutation:mutate,isPending,error};
}

export default useSignup


