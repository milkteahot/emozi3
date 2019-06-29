import React, {Component} from 'react';

class Signin extends React.Component {
    render() {
        return (
            <form className="form-signin">
                <h2 className="form-siginin-heading"> Please sign in </h2>
                <label for="inputEmail" className="sr-only">Email Address</label>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                <label for="inputPassword" className="sr-only"> Password</label>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                <button className="btn btn-lg btn-primary btn-block" type="button"> Sign in
                </button>
            </form>
        )
    }
}
        )
    }
}