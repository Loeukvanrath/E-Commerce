import axios from 'axios';

const productionUrl = 'https://strapi-store-server.onrender.com/api';

export const fetchFeactureProduct = axios.create({
    baseURL : productionUrl
})

export const formatPrice = (price) =>{
     const dollarsAmount = new Intl.NumberFormat('en-US',{
        style: 'currency',
        currency: 'USD',
        }).format((price/100).toFixed(2));
     return dollarsAmount;    
}

export const generateAmountOptions = (number) =>{
    return Array.from({length: number}, (_, index) => {
        const amountNumber = index + 1
        return(
            <option value="amountNumber" key={amountNumber}>
                {amountNumber}
            </option>
        )
    })
}
  

