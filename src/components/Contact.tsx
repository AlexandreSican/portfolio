import { gql, useMutation } from "@apollo/client"
import { useState, FormEvent } from "react"

export const Contact = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const CREATE_MESSAGE = gql`
  mutation CreateMessage($name: String!, $email: String!, $subject: String!, $message: String!) {
  createContact(data: {email: $email, message: $message, name: $name, subject: $subject}) {
    id
  }
}

`

  const [createMessage, {loading}] = useMutation(CREATE_MESSAGE)


  function handleContact(event: FormEvent) {
    event.preventDefault()

    createMessage({
      variables: {
        name,
        email,
        subject,
        message,
      }
    })
  }

  return (
    <div className="bg-blur bg-cover bg-no-repeat flex flex-col w-full h-[100vh]">
      <div className="w-full h-full bg-contact bg-no-repeat bg-auto bg-top flex flex-col items-center">
        <h1 className="text-5xl uppercase flex justify-center pt-[9.6375rem]">contact</h1>
        <div className="flex justify-center items-center w-[70%] h-[60%] m-20">
          <form onSubmit={handleContact} className="w-full flex flex-col justify-center items-center">
            <input
              className="w-[80%] text-3xl p-4 outline-none appearance-none bg-transparent border-b-2 border-t-2 border-black text-white placeholder-white"
              type="text"
              placeholder="Name"
              required
              onChange={event => setName(event.target.value)}
            />
            <input
              className="w-[80%] text-3xl p-4 outline-none appearance-none bg-transparent border-b-2  border-black mt-4 text-white placeholder-white"
              type="text"
              placeholder="E-mail"
              required
              onChange={event => setEmail(event.target.value)}
            />
            <input
              className="w-[80%] text-3xl p-4 outline-none appearance-none bg-transparent border-b-2  border-black mt-4 text-white placeholder-white"
              type="text"
              placeholder="Subject"
              required
              onChange={event => setSubject(event.target.value)}
            />
            <textarea
              className="w-[80%] text-3xl p-2 outline-none appearance-none bg-transparent border-b-2  border-black mt-4 text-white placeholder-white"
              placeholder="Message"
              rows={4}
              onChange={event => setMessage(event.target.value)}
            >
            </textarea>
            <button
              type="submit"
              disabled={loading}
              className="w-[82%] border-2 rounded-xl text-5xl uppercase mt-6 bg-black text-white p-8 hover:bg-white hover:text-black transition-colors disabled:opacity-50"
            >Send</button>
          </form>
        </div>

      </div>
    </div>
  )
}