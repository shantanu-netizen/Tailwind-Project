import React, {useState,useContext} from 'react'
import useContext from 'react'
export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const setUser = useContext(UserContext);
    handleSubmit = () => {
        e.preventDefault();
        setUser({ username, password });
    }
  return (
    <div>
      <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Username" />
      <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
