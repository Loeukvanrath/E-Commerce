import ProdcutsGrid from "./ProductsGrid";
import SectionTitle from "./SectionTitle";


const FeaturedProducts = () =>{
    return(
        <div className="pt-24 mt-4">
            <SectionTitle text='featured products'/>
            <ProdcutsGrid/>
        </div>
    )
}
export default FeaturedProducts;