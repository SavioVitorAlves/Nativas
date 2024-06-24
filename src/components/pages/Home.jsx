import Header from '../Layout/main/Header';
import Benefict from '../Layout/main/Benefict';
import SalesArea from '../Layout/main/SalesArea';
import Cards from '../Layout/main/Cards';
import Products from '../Layout/main/Products';
function Home(){
    return (
        <div>
            <Header/>
            <Benefict/>
            <SalesArea/>
            <Cards/>
            <Products/>
        </div>
    )
}
export default Home