import {useLoaderData, Link} from "react-router-dom"
import {fetchFeactureProduct,formatPrice ,generateAmountOptions} from '../utils'
import { useState } from "react"
// import { useState } from "react"

export const loader = async({params})=>{
    const resp = await fetchFeactureProduct(`/products/${params.id}`)
    console.log(resp)

    return {products: resp.data.data};
}
const SingleProduct = () =>{
    //    Get product from loader data
     const {products} = useLoaderData();

    // Step 2: Get individual properties from product  
     const {image, title, price, description, colors, company} = products.attributes;

     const [productColor, setProductColor] = useState(colors[0])

     const [amountNumber, setAmountNumber] = useState(1)

     const handleAmount = (e) =>{
      setAmountNumber(parseInt(e.target.value));
     }

    return(
    <section>
      <div className='text-md breadcrumbs'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/products'>Products</Link>
          </li>
        </ul>
      </div>
      <div className='mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16'>
        <img
          src={image}
          alt={title}
          className='w-96 h-96 object-cover rounded-lg lg:w-full'
        />
        <div>
            <h1 className="capitalize text-3xl font-bold">{title}</h1>
            <h4 className="text-xl text-neutral-content font-bold mt-">{company}</h4>
            {/* <p className='mt-3 text-xl'>{dollarsAmount}</p> */}
            <p className='mt-6 leading-8'>{description}</p>

            <div clasName='mt-6'>
                <h4 className='text-md font-medium tracking-wider capitalize'>
                  colors
                </h4>
                 <div className="mt-2">
                    {colors.map((color)=>{
                      return(
                      <button
                        key={color}
                        type='button'
                        className={`badge w-6 h-6 mr-2 ${color === productColor && 'border-2 border-secondary'}`}
                        style={{backgroundColor:color}}
                        onClick={()=> setProductColor(color)}
                        >
                      </button>
                      )
                    })}
                  </div>  
            </div>
            <div className="form-control w-full max-w-xs">
              <label className='label' htmlFor='amountNumber'>
                <h4 className='text-md font-medium -tracking-wider capitalize'>
                  amount
                </h4>
              </label>
              <select
                className='select select-secondary select-bordered select-md'
                id='amountNumber'
                value={amountNumber}
                onChange={handleAmount}
              >
                 {generateAmountOptions(10)}
               </select>
            </div>
            <div className='mt-10'>
                <button className='btn btn-secondary btn-md'>
                  Add to bag
                </button>
           </div>    
        </div>
      </div>
    </section>  
     
    )
}
export default SingleProduct;