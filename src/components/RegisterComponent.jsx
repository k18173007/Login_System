import React, { Component } from 'react'
import { Form, Control, FormGroup, Input, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class RegisterComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      hospitalName: '',
      hospitalArea: '',
      hospitalPhone: '',
      email: '',
      items: [],
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()

    let items = [...this.state.items]

    items.push({
      username: this.state.username,
      password: this.state.password,
      hospitalName: this.state.hospitalName,
      hospitamArea: this.state.hospitalArea,
      hospitalPhone: this.state.hospitalPhone,
      email: this.state.email,
    })
    console.log(items)

    this.setState({
      username: '',
      password: '',
      hospitalName: '',
      hospitalArea: '',
      hospitalPhone: '',
      email: '',
    })
  }

  handleInputChange = (e) => {
    let input = e.target
    let names = e.target.name
    let value = input.value

    this.setState({
      [names]: value,
    })
  }

  render() {
    
    return (
      <div
        id="login-container"
        className="container-fluid d-flex justify-content-center align-items-center py-3"
      >
        <div className="form-content d-flex flex-column justify-content-center pt-3 pb-2 align-items-center">
          <div className="text-center">
            <h2>Register</h2>
            <p>Register with Google Credentials</p>
          </div>
          <Form
            onSubmit={this.handleSubmit}
            className="d-flex flex-column mt-2 col-12 col-md-12 col-sm justify-content-center align-items-center"
          >
            <FormGroup className="col-12 col-md-12 col-sm">
              <Input
                className="form-control"
                name="username"
                type="text"
                value={this.state.username}
                placeholder="Username"
                onChange={this.handleInputChange}
              />
            </FormGroup>
            <FormGroup className="col-12 col-md-12 col-sm">
              <Input
                className="form-control"
                name="password"
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleInputChange}
              />
            </FormGroup>
            <FormGroup className="col-12 col-md-12 col-sm">
              <Input
                className="form-control"
                name="hospitalName"
                type="text"
                placeholder="Hospital Name"
                value={this.state.hospitalName}
                onChange={this.handleInputChange}
              />
            </FormGroup>
            <FormGroup className="col-12 col-md-12 col-sm">
              <Input
                className="form-control"
                name="hospitalArea"
                type="text"
                placeholder="Hospital Area"
                value={this.state.hospitalArea}
                onChange={this.handleInputChange}
              />
            </FormGroup>
            <FormGroup className="col-12 col-md-12 col-sm">
              <Input
                className="form-control"
                name="hospitalPhone"
                type="phone"
                placeholder="Hospital Phone"
                value={this.state.hospitalPhone}
                onChange={this.handleInputChange}
              />
            </FormGroup>
            <FormGroup className="col-12 col-md-12 col-sm">
              <Input
                className="form-control"
                name="email"
                type="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleInputChange}
              />
            </FormGroup>
            <FormGroup className="col-12 col-md-12 col-sm">
              <Button type="submit" value="Submit" S>
                <strong className="text-dark">Register</strong>
              </Button>
            </FormGroup>
          </Form>
          <div className="d-flex">
            <p>Already have an account? </p>
            <NavLink className="nav-link p-0 ml-1 text-muted" to="/login">
              {' '}
              Login
            </NavLink>
          </div>
        </div>
      </div>
    )
  }
}

export default RegisterComponent
