import firebase from 'firebase'

export const useForm = () => {
  const sendResponse = async (values) => {
    const contactForm = firebase.functions().httpsCallable('contactForm')
    const response = await contactForm({ values })
    return response as any
  }
  return { sendResponse }
}
