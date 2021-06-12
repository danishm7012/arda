import './App.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/layout/Header'

import Footer from './components/layout/Footer'
import Home from './screens/Home'
import ServiceDetail from './components/serviceDetails/ServiceDetail'
import Career from './components/career/Career'
import QuoteForm from './components/quoteForm/quoteForm'
import Clients from './components/clients/Clients'
import Blogs from './components/Blogs/Blogs'
import BlogDetail from './components/Blogs/blogDetail'
import ScrollToTop from './components/common/scrollToTop'

function App() {
  Aos.init({ duration: 500, offset: 150 })
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <main>
        <Switch>
          <Route path='/info/career' exact component={Career} />
          <Route path='/info/GetQuote' exact component={QuoteForm} />
          <Route path='/info/news' exact component={Blogs} />
          <Route path='/info/clients' exact component={Clients} />
          <Route path='/blogs/:_id' exact component={BlogDetail} />
          <Route path='/:_id' component={ServiceDetail} />
          <Route path='/' exact component={Home} />
        </Switch>
      </main>
      <Footer />
    </Router>
  )
}

export default App
