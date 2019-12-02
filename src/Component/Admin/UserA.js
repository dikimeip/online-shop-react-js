import React,{Component} from 'react'
import NavbarA from './NavbarA'
import API from '../../ServiceApi/Index'
import DUsera from './DUsera'

class UserA extends Component{
    constructor(props){
        super(props)
        this.state = {
            user : []
        }
        this.hapusHandler = this.hapusHandler.bind(this)
    }

    hapusHandler = (id) => {
        if (window.confirm('Hapus Akun..??')) {
           API.DeleteUser(id).then(res=>{
               if (res === 1) {
                   this.getHandler()
               } else {
                   console.log('gagal')
               }
           })
        }
    }

    getHandler = () => {
        API.GetUser().then(res=>{
            this.setState({
                user : res
            })
        })
    }

    componentDidMount=() => {
        this.getHandler()
    }

    render(){
        return(
           <div>
               <NavbarA/>
               <div className="container">
                   <h1>DAFTAR USER</h1>
                   <br/>
                   <DUsera data={this.state.user} remove={this.hapusHandler} />
               </div>
           </div>
        )
    }
}

export default UserA