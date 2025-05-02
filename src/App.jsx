
import './App.css'
import Chatbot from './components/ChatBot/Chatbot'
import Faq from './components/FAQ/Faq'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Courses from './components/OurCourses/Courses'

function App() {

  return (
    <div> 
      <Navbar></Navbar>
      <Chatbot></Chatbot>
      <Courses></Courses>
      <Faq></Faq>
      <Footer></Footer>
      
    </div>
  )
}

export default App
