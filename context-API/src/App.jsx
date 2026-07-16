import React from 'react'
import UserContextProvider from './context/UserContextProvider';
import Login from './components/Login';
import Profiles from './components/Profiles';
export default function App() {
  return (
    <div>
      <UserContextProvider>
        <h1>Context API</h1>
        <Login />
        <Profiles />
      </UserContextProvider>
    </div>
  )
}
