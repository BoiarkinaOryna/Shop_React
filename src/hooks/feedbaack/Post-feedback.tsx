import { useEffect, useState } from "react"
import { API_URL } from "../../shared/api"
import { UseFeedBack } from "../../shared/types/types"
import { consumers } from "stream"


interface UseFeedbackContract{
    isLoading: boolean
    error: string | null,
}

export function useFeedback( isFormComplete: boolean, params: UseFeedBack): UseFeedbackContract{
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const { name, email, phoneNumber, message } = params

    useEffect(() => {
        async function sendFeedback(){
            try{
                console.log(params)
                setLoading(true)
                let response = await fetch(`${API_URL}/user/contacts`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        userName: name,
                        userEmail: email,
                        phoneNumber: phoneNumber,
                        content: message
                    }),
                
                });   
            } catch (error){
                if(error instanceof Error){
                    setError(error.message)
                }

            } finally{
                setLoading(false)
            }
        }
        sendFeedback()
    }, [isFormComplete])
    
    return {isLoading: loading, error}
}