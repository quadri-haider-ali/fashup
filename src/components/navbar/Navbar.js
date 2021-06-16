import React from 'react'
import './Navbar.css';
import Avatar from '@material-ui/core/Avatar';

const navbar = () => {
    return (
        <>
<<<<<<< HEAD
            <nav className="navbar navbar-expand navbar-light bg-gradient bg-primary py-5 ">
                <div className="p-4 fixed-top bg-primary">
                    <div className="container d-flex">
                    <a className="navbar-brand text-white" href="#">Fashup</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="w-100" id="navbarSupportedContent">
                        <form className="form-inline d-flex flex-row-reverse">
                            <div className="card search order-1 mx-3 card-body p-2">
=======
        <nav className="navbar navbar-expand-lg navbar-light bg-gradient bg-primary py-4">
            <div className="container">
                <a className="navbar-brand text-white" href="#">Fashup</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="w-100" id="navbarSupportedContent">
                    <form className="form-inline my-2 my-lg-0 d-flex flex-row-reverse debi">
                        <div className="card mb-2 search order-1 m-3">
                            <div className="card-body p-2">
>>>>>>> ff81e77a1caa8694b77b56eb6fa8c60839500082
                                <div className="input-group input-group-sm">
                                    <input type="text" className="form-control form-control-sm rounde bg-transparent text-white border-0" placeholder="Type Keywords" aria-label="Type Keywords" aria-describedby="basic-addon2" />
                                    <span><i className="fa fa-search m-2"></i></span>
                                </div>
                            </div>
<<<<<<< HEAD
                            <Avatar><i className="fa fa-user-circle text-right order-2" aria-hidden="false"></i></Avatar>
                        </form>
                    </div>
                </div>
                </div>
            </nav>
=======
                        </div>
                        <Avatar><i className="fa fa-user-circle text-right order-2" aria-hidden="false"></i></Avatar>
                    </form>
                </div>
            </div>
        </nav>
>>>>>>> ff81e77a1caa8694b77b56eb6fa8c60839500082
        </>
    )
}

export default navbar


