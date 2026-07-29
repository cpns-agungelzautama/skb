import Header from "../components/Header/Header";
import Layout from "../components/Layout/Layout";
import ResultCard from "../components/ResultCard/ResultCard";
import BiodataCard from "../components/BiodataCard/BiodataCard";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
    <Header/>

    <Layout>

        <ResultCard/>

        <BiodataCard/>


    </Layout>
    
        <Footer/>
</>
  );
}

export default Home;