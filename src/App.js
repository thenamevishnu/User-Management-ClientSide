import React from 'react'
import './App.css'
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import LoginPage from './Pages/Users/LoginPage'
import HomePage from './Pages/Users/HomePage'
import SignupPage from './Pages/Users/SignupPage'
import ProfilePage from './Pages/Users/ProfilePage'
import AdminLogin from './Pages/Admins/AdminLogin'
import AdminManage from "./Pages/Admins/AdminManage"
import AdminEdit from './Pages/Admins/AdminEdit'
import AdminAddUser from './Pages/Admins/AdminAddUser'

function App() {
  return (
    <div>
      <Router>
            <Routes>
                {/* User Routers */}
                <Route Component={HomePage} exact path='/' />
                 <Route Component={LoginPage} path='/login' />
                 <Route Component={SignupPage} path='/signup' />
                 <Route Component={ProfilePage} path='/profile' />

                {/* Admin Routers */}

                 <Route Component={AdminLogin} path='/admin/login' />
                 <Route Component={AdminManage} path='/admin' />
                 <Route Component={AdminEdit} path='/admin/edit_user' />
                 <Route Component={AdminAddUser} path='/admin/add_user' />
            </Routes>
      </Router>
    </div>
  )
}

export default App
