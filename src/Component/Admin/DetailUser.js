import React,{Component} from 'react'
import NavbarA from './NavbarA'

class DetailUser extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount = () => {
        const id = this.props.match.params.id
        console.log(id)
    }

    render(){
        return(
            <div>
                <NavbarA/>
            </div>
        )
    }
}

export default DetailUser