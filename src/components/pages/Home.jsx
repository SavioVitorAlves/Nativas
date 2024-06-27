import Header from '../Layout/main/Header';
import Benefict from '../Layout/main/Benefict';
import SalesArea from '../Layout/main/SalesArea';
import Cards from '../Layout/main/Cards';
import Products from '../Layout/main/Products';
import Creator from '../Layout/main/Creator';
function Home(){
    return (
        <div>
            <Header/>
            <Benefict/>
            <Creator/>
            <SalesArea/>
            <Cards/>
            <Products/>
        </div>
    )
}
export default Home