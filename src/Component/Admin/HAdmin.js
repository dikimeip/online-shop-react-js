import React,{Component} from 'react'
import NavbarA from './NavbarA'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import API from '../../ServiceApi/Index'
import AllAdmin from './AllAdmin'

class HAdmin extends Component{
    constructor(props){
        super(props)
        this.state = {
            admin : []
        }
    }
    componentDidMount=()=> {
         API.GetAdmin().then(res=>{
             this.setState({
                 admin : res
             })
         })
    }
    render(){
        return(
            <div>
                <NavbarA/>
                <div className="container">
                    <h1>HALAMAN ADMIN</h1>
                    <br/>
                    <Link to="/tadmin" className="btn btn-info">TAMBAH ADMIN</Link>
                    <hr/>
                    <AllAdmin data={this.state.admin} />
                </div>
            </div>
        )
    }
}

export default HAdmin