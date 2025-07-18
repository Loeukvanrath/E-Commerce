import { Filters, ProductContainer, PaginationContainer } from "../components";
import {fetchFeactureProduct} from '../utils';

const url = '/products';

export const loader = async({request}) =>{
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  
  console.log(params)
  const resp = await fetchFeactureProduct(url,{
    params
  })
  const products = resp.data.data;
  const meta = resp.data.meta;

  return {products, meta, params}
}

const Products = () =>{
    return(
        <>
          <Filters/>
          <ProductContainer/>
          <PaginationContainer/>
        </>
    )
}
export default Products;