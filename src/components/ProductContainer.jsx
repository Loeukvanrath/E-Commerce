import ProductsGrid from "./ProductsGrid";
import ProductList from "./ProductList"
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import {BsCart3, BsFillGridFill, BsList} from 'react-icons/bs';


const ProductContainer = () => {
  const {meta} = useLoaderData();
  const totalProducts = meta.pagination.total;
  const [layout, setLayout] = useState('grid')
  const setActiveStyles = (partern) =>{
    return `text-xl ben-circle btn-sm ${partern === layout
      ?'btn-primary text-primary-content'
      : 'btn-ghost text-based-content'
    }`
  };
    return(
        <>
        <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
          <h4 className="font-medium text-md">
              {totalProducts} product {totalProducts>1 && 's'}
          </h4>
          <div className="flex gap-x-2">
            <button
             type="button"
             onClick={()=>setLayout('grid')}
             className={setActiveStyles}
            >
              <BsFillGridFill/>
            </button>
             <button
             type="button"
             onClick={()=>setLayout('list')}
             className={setActiveStyles}
            >
              <BsList/>
            </button>
          </div>
        </div>
        <div>
          {
            totalProducts === 0?(
              <h5 className="text-2xl mt-16">
                Sorry, no products matched your search
              </h5>
            ):layout === 'grid'?(
              <ProductsGrid/>
            ):(
              <ProductList/>
            )
          }
        </div>     
        </>
    )
}
export default ProductContainer;