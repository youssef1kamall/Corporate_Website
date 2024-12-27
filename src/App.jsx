import Header from "./Components/Header"
import AppHero from "./Components/Hero"
import AppAbout from "./Components/about"
import AppServices from "./Components/services"
import AppWork from "./Components/work"
import AppTeams from "./Components/teams"
import AppPricing from "./Components/pricing"
import AppBlog from "./Components/blog"
import AppContact from "./Components/contact"
import AppFooter from "./Components/footer"
function App() {


  return (
    <>
      <div className="App">
      <header id="header">
        <Header/>
      </header>
      <main>
          <AppHero />
          <AppAbout />
          <AppServices />
          <AppWork />
          <AppTeams />
          <AppPricing />
          <AppBlog />
          <AppContact />  
      </main>
      <footer id="footer">
        <AppFooter />
      </footer>
      </div>
    </>
  )
}

export default App
