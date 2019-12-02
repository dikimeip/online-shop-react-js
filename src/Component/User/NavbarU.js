import React, { Component } from 'react'
import {Link,Redirect} from 'react-router-dom'

class NavbarU extends Component {
    constructor(props){
        super(props)
        this.state = {
            login:false
        }
    }

    Logout = () => {
        sessionStorage.setItem('isLogin','')
        sessionStorage.clear()
        this.setState({
            login:true
        })

    }

    componentDidMount = () => {
        if (sessionStorage.getItem('isLogin')) {
           // console.log('Ok')
        } else {
            this.setState({
                login:true
            })
        }
    }
    render() {
        if (this.state.login) {
            return( <Redirect to="/login" /> )
        }
        return (
            <div>
                <div className="navbar navbar-inverse">
                    <div className="container">
                        <div className="navbar-haeder">
                            <Link to="/user"  className="navbar-brand" > HOME</Link>
                            <ul className="nav navbar-nav navbar-right">
                                <li><Link to="/aboutu" >ABOUT</Link></li>
                                <li> <Link to="/cart" >KERANJANG</Link></li>
                                <li> <Link to="/pesanu"  >PESAN</Link></li>
                                <li> <Link to="/akunU" >AKUN</Link></li>
                                <li> <Link onClick={this.Logout} >LOGOUT</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavbarU