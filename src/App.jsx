import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar'
import Programs from './Components/Programs/Programs'
import Testimonials from './Components/Testimonials/Testimonials'
import Title from './Components/Title/Title'

function App() {
  return (
    <div>
<Navbar/>
<Hero/>
<div className='container'>
  <Title subTitle='Our PROGRAM' title='What we offer'/>
<Programs/>
<About/>
<Title subTitle='GALLERY' title='Campus Photos'/>
<Campus/>
<Title subTitle='TESTIMONIALS' title='What Student Says'/>
<Testimonials/>
<Title subTitle='CONTACT US' title='Get in Touch'/>
<Contact/>
<Footer/>
</div>
    </div>
  )
}

export default App
