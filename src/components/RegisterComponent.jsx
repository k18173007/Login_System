import React, { useState } from 'react'
import { Form, FormGroup, Input, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'

function RegisterComponent() {
  let initialFormData = Object.freeze({
    username: '',
    password: '',
    hospitalName: '',
    hospitalArea: '',
    hospitalPhone: '',
    email: '',
  })

  const [formData, updateFormData] = useState(initialFormData)

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    updateFormData()
  }

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
          onSubmit={handleSubmit}
          className="d-flex flex-column mt-2 col-12 col-md-12 col-sm justify-content-center align-items-center"
        >
          <FormGroup className="col-12 col-md-12 col-sm">
            <Input
              className="form-control"
              name="username"
              type="text"
              placeholder="Username"
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="col-12 col-md-12 col-sm">
            <Input
              className="form-control"
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="col-12 col-md-12 col-sm">
            <Input
              className="form-control"
              name="hospitalName"
              type="text"
              placeholder="Hospital Name"
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="col-12 col-md-12 col-sm">
            <Input
              className="form-control"
              name="hospitalArea"
              type="text"
              placeholder="Hospital Area"
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="col-12 col-md-12 col-sm">
            <Input
              className="form-control"
              name="hospitalPhone"
              type="phone"
              placeholder="Hospital Phone"
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="col-12 col-md-12 col-sm">
            <Input
              className="form-control"
              name="email"
              type="email"
              placeholder="Email"
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="col-12 col-md-12 col-sm">
            <Button type="submit" value="Submit">
              <strong className="text-dark">Register</strong>
            </Button>
          </FormGroup>
        </Form>
        <div className="d-flex">
          <p>Already have an account? </p>
          <NavLink className="nav-link p-0 ml-1 text-muted" to="/login">
            Login
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default RegisterComponent
