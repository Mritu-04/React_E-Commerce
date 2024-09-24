import { Navbar, Main, Product, Footer } from "../components";
import ChatBotComponent from "../components/ChatBotComponent";

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Product />
      <Footer />
      <div className="chatbot-container">
        <ChatBotComponent />
      </div>
    </>
  )
}

export default Home;