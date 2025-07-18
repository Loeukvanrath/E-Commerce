import {fetchFeactureProduct} from '../utils';
import { FeaturedProducts, Hero} from '../components';

const url = '/products?featured=true';

export const loader = async() =>{
    const resp = await fetchFeactureProduct(url);
    const products = resp.data.data;
    return {products};

}

const Landing = () =>{
    return(
        <>
          <Hero/>
          <FeaturedProducts/>
        </>
    )
}
export default Landing;