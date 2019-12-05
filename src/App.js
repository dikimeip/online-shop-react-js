import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './Component/Home';
import About from './Component/AboutShop'
import Login from './Component/Login';
import Index from './Component/Admin/Index';
import User from './Component/User/Index'
import Register from './Component/Register';
import Detail from './Component/Detail';
import AkunU from './Component/User/AkunU';
import DetailU from './Component/User/DetailU';
import AboutU from './Component/User/AboutU';
import Cart from './Component/User/Cart';
import Pemesanan from './Component/User/Pemesanan';
import ProdukA from './Component/Admin/ProdukA';
import TProdukA from './Component/Admin/TProdukA';
import EditProduk from './Component/Admin/EditProduk';
import DetailProdukA from './Component/Admin/DetailProdukA';
import PemesananA from './Component/Admin/PemesananA';
import EditPemesanan from './Component/Admin/EditPemesanan';
import UserA from './Component/Admin/UserA';
import DetailUser from './Component/Admin/DetailUser';
import HAdmin from './Component/Admin/HAdmin';
import TambahAdmin from './Component/Admin/TambahAdmin';
import EAdmin from './Component/Admin/EAdmin';
import EditUser from './Component/User/EditUser';

function App() {
  return (
    <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/aboutu" component={AboutU} />
        <Route path="/login" component={Login} />
        <Route path="/admin" component={Index} />
        <Route path="/user" component={User} />
        <Route path="/akunU" component={AkunU} />
        <Route path="/register" component={Register} />
        <Route path="/detail/:id" component={Detail} />
        <Route path="/detailu/:id" component={DetailU} />
        <Route path="/cart" component={Cart} />
        <Route path="/pesanu" component={Pemesanan} />
        <Route path="/produka" component={ProdukA} />
        <Route path="/tproduk" component={TProdukA} />
        <Route path="/editpa/:id" component={EditProduk} />
        <Route path="/detailpa/:id" component={DetailProdukA} />
        <Route path="/pemesanana" component={PemesananA} />
        <Route path="/editpesan/:id" component={EditPemesanan} />
        <Route path="/usera" component={UserA} />
        <Route path='/detailuser/:id' component={DetailUser}/>
        <Route path='/hadmin' component={HAdmin}/>
        <Route path='/tadmin' component={TambahAdmin}/>
        <Route path='/editadmin/:id' component={EAdmin}/>
        <Route path='/edituser/:id' component={EditUser}/>


    </BrowserRouter>
  );
}

export default App;
