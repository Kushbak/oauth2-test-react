import { useNavigate } from "react-router-dom"
import { getCookie, removeCookie } from "../utils/cookie"
import axios from "axios"

const Secure = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    const cookie = getCookie(import.meta.env.VITE_TC)
    console.log({ cookie })
    axios.post(import.meta.env.VITE_API_URL + 'users/google/', { id_token: cookie })
      .then(data => console.log({ data }))
      .catch(err => console.log({ err }))
  }


  const logout = () => {
    removeCookie(import.meta.env.VITE_TC)
    navigate('/')
  }

  return (
    <div>
      <h2>Secure</h2>
      <button onClick={handleClick}>Test</button>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Secure