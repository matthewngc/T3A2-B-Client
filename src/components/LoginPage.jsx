import React, { useState } from "react"
import './styles/LoginPage.css'

const Login = ({ userLogin, registerUser }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [company, setCompany] = useState('')
    const [mobile, setMobile] = useState('')
    const [isEmployer, setIsEmployer] = useState('')

    function submitLogin(evt) {
        evt.preventDefault()
        userLogin(email, password)
    }

    function submitRegister(evt) {
        evt.preventDefault()
        registerUser(name, company, email, mobile, isEmployer, password)
        // userLogin(email, password)
    }

    const [authMode, setAuthMode] = useState("signin")

    const changeAuthMode = () => {
        setAuthMode(authMode === "signin" ? "signup" : "signin")
    }
    if (authMode === "signin") {
        return (
        <div className="Auth-form-container">
            <form onSubmit={submitLogin} className="Auth-form">
            <div className="Auth-form-content">
                <h3 className="Auth-form-title">Sign In</h3>
                <div className="text-center">
                Not registered yet?{" "}
                <span className="link-primary" onClick={changeAuthMode}>
                    Sign Up
                </span>
                </div>
                <div className="form-group mt-3">
                <label>Email address</label>
                <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="form-control mt-1"
                    placeholder="Enter email"
                    required
                />
                </div>
                <div className="form-group mt-3">
                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className="form-control mt-1"
                    placeholder="Enter password"
                    required
                />
                </div>
                <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
                </div>
                <p className="text-center mt-2">
                Forgot <a href="#">password?</a>
                </p>
            </div>
            </form>
        </div>
        )
        }


    return (
        <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={submitRegister}>
            <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
                Already registered?{" "}
                <span className="link-primary" onClick={changeAuthMode}>
                Sign In
                </span>
            </div>
            <div className="form-group mt-3">
                <label>Full Name</label>
                <input
                type="name"
                value = {name}
                onChange={(event) => setName(event.target.value)}
                className="form-control mt-1"
                placeholder="e.g Jane Doe"
                />
            </div>
            <div className="form-group mt-3">
                <label>Company</label>
                <input
                type="company"
                value = {company}
                onChange={(event) => setCompany(event.target.value)}
                className="form-control mt-1"
                placeholder="e.g ABC Ltd"
                />
            </div>
            <div className="form-group mt-3">
                <label>Email address</label>
                <input
                type="email"
                value = {email}
                onChange={(event) => setEmail(event.target.value)}
                className="form-control mt-1"
                placeholder="Email Address"
                required
                />
            </div>
            <div className="form-group mt-3">
                <label>Mobile</label>
                <input
                type="mobile"
                value = {mobile}
                onChange={(event) => setMobile(event.target.value)}
                className="form-control mt-1"
                placeholder="Mobile"
                />
            </div>
            <div className="form-group mt-3">
                <label>Are you an Employer or a Jobseeker?</label>
                <select
                type="isEmployer"
                onChange={(event) => setIsEmployer(event.target.value)}
                className="form-control mt-1"
                required
                >
                    <option>Select:</option>
                    <option value={true}>Employer</option>
                    <option value={false}>Jobseeker</option>
                </select>
            </div>
            <div className="form-group mt-3">
                <label>Password</label>
                <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="form-control mt-1"
                placeholder="Password"
                required
                />
            </div>
            <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary">
                Submit
                </button>
            </div>
            {/* <p className="text-center mt-2">
                Forgot <a href="#">password?</a>
            </p> */}
            </div>
        </form>
        </div>
    )
}

export default Login
//   const history = useHistory();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const { login } = useAuth();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       await login(email, password);
//       history.push('/');
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h1>Login</h1>
//       <div>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(event) => setEmail(event.target.value)}
//         />
//       </div>
//       <div>
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(event) => setPassword(event.target.value)}
//         />
//       </div>
//       <button type="submit">Login</button>
//     </form>
//   );


