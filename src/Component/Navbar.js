import React,{Component} from 'react'
import {Link,Redirect} from 'react-router-dom'

class Navbar extends Component{
    render(){
        if (sessionStorage.getItem('isLogin')) {
            return(<Redirect to="/user" />)
        }
        if (sessionStorage.getItem('isAdmin')) {
            return(<Redirect to="/admin" />)
        }
        return(
            <div className="navbar navbar-inverse">
                <div className="container">
                    <div className="navbar-haeder">
                        <Link to="/" className="navbar-brand" > HOME</Link>
                        <ul className="nav navbar-nav navbar-right">
                           <li><Link to="/about" >ABOUT</Link></li> 
                           <li> <Link to="/login" >LOGIN</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar