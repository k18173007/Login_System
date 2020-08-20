import React, { Component } from 'react'
import { Form, FormGroup, Input, Button} from 'reactstrap'
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

class LoginComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      hospitalCode: '',
      check: false,
      items: [],
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()

    let items = [...this.state.items]

    items.push({
      username: this.state.username,
      password: this.state.password,
      hospitalName: this.state.hospitalCode,
      check: this.state.check,
    })
    console.log(items)

    this.setState({
      username: '',
      password: '',
      hospitalCode: '',
      check: false,
    })
  }

  handleInputChange = (event) => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <div
        id="login-container"
        className="container-fluid d-flex justify-content-center align-items-center py-3"
      >
        <div className="form-content d-flex flex-column justify-content-center pt-3 pb-3 align-items-center">
          <div className="text-center">
            <h2>Sign In</h2>
            <p>Login with Google Credientials</p>
          </div>
          <Form
            onSubmit={this.handleSubmit}
            className="d-flex flex-column mt-2 col-12 col-md-12 col-sm justify-content-center align-items-center"
          >
            <FormGroup className="col-12 col-md-12 col-sm">
              <Input
                type="text"
                name="username"
                value={this.state.username}
                placeholder="Username"
                onChange={this.handleInputChange}
              />
            </FormGroup>
            <FormGroup className="col-12 col-md-12 col-sm">
              <Input
                type="password"
                name="password"
                value={this.state.password}
                placeholder="Password"
                onChange={this.handleInputChange}
              />
            </FormGroup>
            <FormGroup className="col-12 col-md-12 col-sm">
              <Input
                type="text"
                name="hospitalCode"
                placeholder="Hospital Code"
                value={this.state.hospitalCode}
                onChange={this.handleInputChange}
              />
            </FormGroup>
            <FormGroup className="col-12 col-md-12 col-sm">
              <Button  className="btn" type="submit" value="submit">
                <strong className="text-dark">Login</strong>
              </Button>
              <div className="p-0 d-flex col-12 col-md-12">
                <div className="p-0 col-6 col-md-6 text-start form-check">
                  <Input
                    type="checkbox"
                    style={{ position: 'inherit', margin: '0' }}
                    name="check"
                    value={this.state.check}
                    onChange={this.handleInputChange}
                  />{' '}
                  <a class="ml-2 text-dark">Keep me Logged in</a>
                </div>
                <div className="forgot-password p-0 col-6 col-md-6">
                  <a className="text-dark">Forgot Password</a>
                </div>
              </div>
            </FormGroup>
            <FormGroup>
              <LoginWithGoogle />
            </FormGroup>
            <FormGroup className="col-12 col-md-12 col-sm">
              <NavLink
                className="btn"
                type="button"
                value="submit"
                to="/register"
              >
                <strong className="text-dark">Register</strong>
              </NavLink>
            </FormGroup>
          </Form>
          <NavLink className="nav-link p-0 text-muted" to="/register">
            Create new account
          </NavLink>
        </div>
      </div>
    )
  }
}

export default LoginComponent
