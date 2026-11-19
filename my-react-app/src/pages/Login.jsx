 import { useState } from 'react'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    if (username.trim() === '' || password.trim() === '') {
      alert('Please enter all the details')
    } else {
      alert('Thank you!')
    }
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login Page</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  )
}

export default Login
