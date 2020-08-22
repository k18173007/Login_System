import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import GoogleLogin from 'react-google-login'

function LoginWithGoogle(params) {
  const responseSuccessGoogle = (response) => {
    console.log(response)
  }

  const responseFailureGoogle = (response) => {}

  return (
    <GoogleLogin
      clientId="1042652935797-t3ik9n7r72vurq985jtaonb3bjhigjhn.apps.googleusercontent.com"
      buttonText="Google Login"
      onSuccess={responseSuccessGoogle}
      onFailure={responseFailureGoogle}
      cookiePolicy={'single_host_origin'}
    />
  )
}

function LoginComponent() {

  let [Username, updateUsername] = useState('')
  let [Password, updatePassword] = useState('')
  let [HospitalCode, updateHospitalCode] = useState('')
  let [Check, updateCheck] = useState('')

  const getUsername = (e) => {
    updateUsername(e.target.value)
  }

  const getPassword = (e) => {
    updatePassword(e.target.value)
  }

  const getHospitalCode = (e) => {
    updateHospitalCode(e.target.value)
  }

  const getCheck = (e) => {
    updateCheck(e.target.value)
  }

  const resetForm = (e) => {
    updateUsername('')
    updatePassword('')
    updateHospitalCode('')
    updateCheck('')
  }

  const item = {
    username: Username,
    password: Password,
    hospitalCode: HospitalCode,
    check: Check,
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(item)
    resetForm()
  }

  return (
    <div>
      <div
        id="login-container"
        className="container-fluid d-flex justify-content-center align-items-center py-3"
      >
        <div className="form-content d-flex flex-column justify-content-center pt-3 pb-3 align-items-center">
          <div className="text-center">
            <h2>Sign In</h2>
            <p>Login with Google Credientials</p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="d-flex flex-column mt-2 col-12 col-md-12 col-sm justify-content-center align-items-center"
          >
            <div className="form-group col-12 col-md-12 col-sm">
              <input
                className="form-control"
                type="text"
                placeholder="Username"
                onChange={getUsername}
              />
            </div>
            <div className="form-group col-12 col-md-12 col-sm">
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                onChange={getPassword}
              />
            </div>
            <div className="form-group col-12 col-md-12 col-sm">
              <input
                className="form-control"
                type="text"
                placeholder="Hospital Code"
                onChange={getHospitalCode}
              />
            </div>
            <div className="form-group col-12 col-md-12 col-sm">
              <button className="btn" type="submit">
                <strong className="text-dark">Login</strong>
              </button>

              <div className="p-0 d-flex col-12 col-md-12">
                <div className="p-0 col-6 col-md-6 text-start form-check">
                  <input
                    type="checkbox"
                    style={{ position: 'inherit', margin: '0' }}
                    onChange={getCheck}
                  />
                  <a class="ml-2 text-dark">Keep me Logged in</a>
                </div>
                <div className="forgot-password p-0 col-6 col-md-6">
                  <a className="text-dark">Forgot Password</a>
                </div>
              </div>
            </div>
            <div className="pb-3">
              <LoginWithGoogle />
            </div>
            <div className="form-group col-12 col-md-12 col-sm">
              <NavLink
                className="btn"
                type="button"
                value="submit"
                to="/register"
              >
                <strong className="text-dark">Register</strong>
              </NavLink>
            </div>
          </form>
          <NavLink className="nav-link p-0 text-muted" to="/register">
            Create new account
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default LoginComponent
