import React from 'react'
import { Route } from 'react-router-dom'
import loadable from '@loadable/component'

const Home = loadable(() => import('../components/Home/Home'))
const Login = loadable(() => import('../components/Login/Login'))
const Register = loadable(()=>import('../components/Register/Register'))

export const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/',
    component: Home
  }
]

export const SubRoute = (route) => {
    if (route.path === "/") {
    return (<Route
      path={route.path}
      exact
      render={(props) => {
        return <route.component {...props} children={route.children} />
      }}
    />)
  } else {
    return (<Route
      path={route.path}
      render={(props) => {
        return <route.component {...props} children={route.children} />
      }}
    />)
  }
}