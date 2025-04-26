import React, {useState, useEffect, createContext} from 'react'
import './App.css'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
// import DateFetcher from './components/useEffect'
import MyUseContext1 from './components/MyUseContext1'
import FetchFood from './components/MyUseContextFood'



export const UserFromAppContext = createContext();
export const FoodFromMyUseContext = createContext();

function App() {
  const [user, setUser] = useState(
    {
      name: "山田",
      age: 20
    }
  );
  const food = FetchFood();

  return(
    <div className='App'>
      <Header /> 
        {/* <ItemComponent /> */}
        {/* <EventListener /> */}
        {/* <Counter /> */}
        <UserFromAppContext.Provider value={user}>
          <FoodFromMyUseContext.Provider value={food}>
            <MyUseContext1 />
          </FoodFromMyUseContext.Provider>
        </UserFromAppContext.Provider>
        {/* <DateFetcher /> */}
    </div>
  )
  
}

export default App;
