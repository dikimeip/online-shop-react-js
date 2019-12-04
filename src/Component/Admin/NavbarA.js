import React, { Component } from 'react'
import {Link,Redirect} from 'react-router-dom'

class NavbarA extends Component {
    constructor(props){
        super(props)
        this.state = {
            login : false
        }
        this.logout = this.logout.bind(this)
    }

    logout = () => {
        sessionStorage.setItem('isAdmin','')
        sessionStorage.clear()
        this.setState({
            login : true
        })
    }

    componentDidMount = () => {
        if(sessionStorage.getItem('isAdmin')){
            console.log('ADMIN')
        } else {
            this.setState({
                login : true
            })
        }
    }

    render() {
        if (this.state.login) {
            return( <Redirect to='/login' /> )
        }
        return (
            <div>
                <div className="navbar navbar-inverse">
                    <div className="container">
                        <div className="navbar-haeder">
                            <Link to="/admin" className="navbar-brand" > HOME</Link>
                            <ul className="nav navbar-nav navbar-right">
                                <li><Link to="/produka" >PRODUK</Link></li>
                                <li> <Link to="/pemesanana" >PEMESANAN</Link></li>
                                <li> <Link  to="/usera" >USER</Link></li>
                                <li> <Link to="/hadmin" >ADMIN</Link></li>
                                <li> <Link onClick={this.logout} >LOGOUT</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavbarA