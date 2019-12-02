import React, { Component } from 'react'
import Navbar from './Navbar'
import API from '../ServiceApi/Index'
import Produk from './Produk'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Produk: []
        }
    }



    componentDidMount = () => {
        API.GetProduk().then(res => {
            this.setState({
                Produk: res
            })
        })
    }
    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Produk data={this.state.Produk} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home