import About from "../pages/About"
import Contact from "../pages/Contact"
import New from "../pages/New"
import Offer from "../pages/Offer"
import Home from "../pages/Home"


export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/offers', component: Offer },
    { path: '/news', component: New },
    { path: '/contact', component: Contact }
]