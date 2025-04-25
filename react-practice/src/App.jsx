import './App.css'
import {TestComponents, MyListComponents} from './components/TestComponents'
import Header from './components/Header'
import Footer from './components/Footer'
import ItemComponent from './components/ItemComponent'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return(
    <div className='App'>
      <Header /> 
        <ItemComponent />
      <Footer />
    </div>
  )
  
}

export default App
