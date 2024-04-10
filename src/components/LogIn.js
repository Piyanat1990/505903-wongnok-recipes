import "./Login.css"
export default function Login() {
    return (
     
            <div className="containerx">
                <form className="form">
                    <p>Register Form</p>
                    <div className="form-control">
                        <label>Username</label>
                        <input type="text" />
                    
                    </div>
                    <div className="form-control">
                        <label>Email</label>
                        <input type="text" />
                  
                    </div>
                    <div className="form-control">
                        <label>Password</label>
                        <input type="text" />
                       
                    </div>
                    <div className="form-control">
                        <label>Re-Password</label>
                        <input type="text" />
                    </div>
                    <button type="submit">Register</button>
                </form>
            </div>
   
    )
}