import React from 'react'
import { Link } from 'react-router-dom'


const Auth = () => {
  return (
    <div className="registration-wrapper">
    <div className="form-card">
        <h2>Create an Account</h2>
        
        <form>
            <input type="text" placeholder="Full Name "  required/>
            <input type="email" placeholder="Email Address " required />
            <input type="number" placeholder="Phone" required />

            <input type="password" placeholder="Password " required />
            <input type="password" placeholder="Confirm Password " required />


            <select id="role" required>
                <option value="" disabled selected hidden>Select Your Role</option>
                <option value="Customer">Customer</option>
                <option value="Staff">Staff</option>
                <option value="Admin">Admin</option>
            </select>

            <div className="checkbox-container">
                <input type="checkbox" required />

                <label>I agree to the <a href="/termscondition">Terms & Conditions </a></label>
            </div>

            <Link to="/login">
                <button className="btn-primary" type="button">Register</button>
            </Link>
            <Link to="/">
                <button className="btn-secondary" type="reset">Clear</button>
            </Link>
           </form>

        <p className="login-link">
            Already have an account? <a href="/login">Log in here</a>.
        </p>
    </div>
</div>
  )
}

export default Auth