import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import BlogList from './components/BlogList';
import BlogDetail from './components/BlogDetail';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DarkModeToggle from './components/DarkModeToggle';
import ContactCard from './components/ContactCard';

export default function App() {
  return (
    <div>
      <DarkModeToggle />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <ContactCard />
              <About />
              <Projects />
              <BlogList />
              <Testimonials />
              <Contact />
            </>
          }
        />
       <Route path="/blog" element={<BlogList />} />
       <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}
