import './App.css'
import {TestComponents, MyListComponents} from './components/TestComponents'
import Header from './components/Header'
import Footer from './components/Footer'
import ItemComponent from './components/ItemComponent'
import 'bootstrap/dist/css/bootstrap.min.css'
import EventListener from './components/EventListener'
import Counter from './components/MyuseState'
import DateFetcher from './components/useEffect'

function App() {
  return(
    <div className='App'>
      <Header /> 
        {/* <ItemComponent /> */}
        {/* <EventListener /> */}
        {/* <Counter /> */}
        <DateFetcher />
      {/* <Footer /> */}
    </div>
  )
  
}

export default App
