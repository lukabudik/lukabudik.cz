import IResponse from '@/interfaces/IResponse'
import firebase from 'firebase'

export const useForm = () => {
  const sendResponse = async (values: IResponse) => {
    const contactForm = firebase.functions().httpsCallable('contactForm')
    const response = await contactForm({ values })
    const { data } = response
    return data as IApiResponse
  }
  return { sendResponse }
}
interface IApiResponse{
  status: "success" | "error"
}