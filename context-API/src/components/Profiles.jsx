import React,{useContext} from 'react'
import userContext from '../context/userContext'
export default function Profiles() {
const {user}= useContext(userContext)
  if (!user) return <div>Please Login First</div>
  return <div>Welcome, {user.username}</div>
}
