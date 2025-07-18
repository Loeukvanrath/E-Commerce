import { useState } from "react"
import {formatPrice} from '../utils'

const FormRange = ({label, name, size, price}) =>{
    const step = 1000;
    const maxPrice = 10000;
    const [selectPrice, setSelectPrice] = useState(price || maxPrice)
    return(
        <>
          <div className="form-control">
            <label htmlFor={name} className="label cursor-pointer">
                <span className="label-text capitalize">{label}</span>
                <span>{formatPrice(selectPrice)}</span>     
            </label>
            <input
              className={`range range-secondary ${size}`}
              type="range"
              name={name}
              min={0}
              max={maxPrice}
              value={selectPrice}
              onChange={(e) => setSelectPrice(e.target.value)}
              step ={step}
            />
            <div className="w-full flex justify-between text-xs mt-2">
                <span className="font-bold text-md">0</span>
                <span className="font-bold text-md">Max: {formatPrice(maxPrice)}</span>
            </div>
          </div>
        </>
    )
}
export default FormRange;