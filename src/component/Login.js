import { React, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const userAccountData = [
    {
        "account": "tienminh0801",
        "password": "0123456789"
    }
]


let accountDataSend = []



export default function Login() {
    const [account, setAccount] = useState('')
    const [pw, setPw] = useState('')



    function handleSubmit(e) {
        e.preventDefault();
        for (let userAccount of userAccountData) {
            if (userAccount.account == account && userAccount.password == pw) {
                // accountDataSend = accountDataSend.concat({
                //     "account": account,
                //     "password": pw
                // }) 
                // console.log(accountDataSend)
                window.location.href = "/Admin"
                return
            } // send request login
        }
        // e.preventDefault();
        // alert("Tài khoản hoặc mật khẩu không đúng")
        toast.error('Mật khẩu hoặc tài khoản không đúng', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    return (
        <div>
            <div className="container-md container-xs container-xl text-center" style={{ width: "30%", minWidth: "350px", paddingTop: "150px", paddingBottom: "200px" }} >
                <form>
                    <p className="display-5 mb-5 fw-normal text-center ">Log in</p>
                    <div className="form-floating mb-2">
                        <input type="account" className="form-control" id="floatingInput" placeholder="name@example.com"
                            onChange={(event) => setAccount(event.target.value)} />
                        <label for="floatingInput">Account</label>
                    </div>
                    <div className="form-floating mb-2">
                        <input type="password" className="form-control" id="floatingPassword" value={pw}
                            placeholder="Password" onChange={(event) => setPw(event.target.value)} />
                        <label for="floatingPassword">Password</label>
                    </div>
                    {/* {userAccountData.} */}
                    <div className="form-check mx-2 mt-3 mb-3" style={{ maxWidth: "150px" }}>
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" for="flexCheckDefault">
                            Remember me
                        </label>
                    </div>
                    <div class="d-flex">
                        <button className="w-75 btn btn-lg btn-primary mb-5" type="submit" onClick={handleSubmit}>Log in</button>
                    </div>
                </form>
                <ToastContainer />
            </div>
        </div>
    )
}