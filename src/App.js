import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
const Home = lazy(() => import('./components/home/Home'));
const About = lazy(() => import('./components/about/About'));
const Education = lazy(() => import('./components/education/Education'));
const Expriance = lazy(() => import('./components/expriance/Expriance'));
const Certification = lazy(() => import('./components/certifications/Certification'));
//const NoMatch = lazy(() => import('./Components/NoMatch'));
const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div className="container">Loading...</div>}>
    
				       
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/About" element={<About />} />
					<Route path="/Education" element={<Education />} />
					<Route path="/Expriance" element={<Expriance />} />
					<Route path="/Certification/" element={<Certification />} />
					
				</Routes>
			</Suspense>
			<Footer />
    </>
  )
}

export default App