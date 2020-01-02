import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'

import React from 'react'
import Logo from '../component/template/Logo'
import Nav from '../component/template/Nav'

import Footer from '../component/template/Footer'


export default props =>
    <BrowserRouter>
        <div className="app">
            <Logo></Logo>
            <Nav />
            <Router />
            <Footer />
        </div >
    </BrowserRouter>