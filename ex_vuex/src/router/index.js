import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import About from '../components/About'
import ContactList from '../components/ContactList'
import ContactForm from '../components/ContactForm'
import UpdatePhoto from '../components/UpdatePhoto'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', redirect: '/home'
    },
    {
      path: '/home', name: 'home', component: Home
    },
    {
      path: '/about', name: 'aboout', component: About
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: ContactList,
      children: [
        { path: 'add', name: 'addcontact', component: ContactForm },
        { path: 'update/:no', name: 'updatecontact', component: ContactForm, props: true },
        { path: 'photo/:no', name: 'updatephoto', component: UpdatePhoto, props: true }
      ]
    }
  ]
})
