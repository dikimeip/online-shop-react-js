import React, { Component } from 'react'
import NavbarU from './NavbarU'
import API from '../../ServiceApi/Index'
import ProdukU from './ProdukU'


class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mhs: []
        }
    }

    componentDidMount = () => {
        API.GetProduk().then(res => {
           // console.log(res)
            this.setState({
                mhs: res
            })
        })
    }

    render() {
        return (
            <div>
                <NavbarU />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <ProdukU data={this.state.mhs} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Index