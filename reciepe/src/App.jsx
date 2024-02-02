import './App.css'
import Categories from './components/Categories'
import Delievery from './components/Delievery'
import Featured from './components/Featured'
import Footer from './components/Footer'
import Meals from './components/Meals'
import TopNav from './components/TopNav'
import TopPicks from './components/TopPicks'

function App() {


  return (
    <>
      <TopNav />
      <Featured />
      <Delievery />
      <TopPicks />
      <Meals />
      <Categories />
      <Footer/>
    </>
  )
}

export default App
