import React, { Component } from 'react'
import Navbar from './Navbar'
import API from '../ServiceApi/Index'
import Produk from './Produk'
//import Pagination from 'react-js-pagination'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Produk: [],
           // activePage : 0
        }
    }

    // handlerChange = (pageNumber) =>{
    //     console.log(pageNumber)
    //     this.setState({activePage:pageNumber})
    // }



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
                {/* <Pagination
                    activePage = {this.state.activePage}
                    itemsCountPerPage = {4}
                    totalItemsCount ={10}
                    pageRangeDisplayed = {3}
                    onChange = {this.handlerChange}
                /> */}
            </div>
        )
    }
}

export default Home