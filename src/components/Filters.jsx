import {Form, useLoaderData, Link} from 'react-router-dom'
import FormInput from "./FormInput";
import FormSelect from './FormSelect';
import FormRange from './FormRange';
import FormCheckbox from './FormCheckbox';

const Filters = () => {
    const {meta, params} = useLoaderData();
    const {search, company, category, shipping, order, price} = params
    return(
        <>
            <Form className='bg-base-200 rounded-md px-8 py-4 grid gap-x-8 gap-y-8
                          sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
                <FormInput
                    label='search product'
                    type='search'
                    name='search'
                    size='input-sm'
                    defaultValue={search}
                />

                <FormSelect
                    label='select company'
                    name='company'
                    list={meta.companies}
                    size='select-sm'
                    defaultValue={company}
                />

                <FormSelect
                    label='select category'
                    name='category'
                    list={meta.categories}
                    size='select-sm'
                    defaultValue={category}
                />

                <FormSelect
                    label='sort by'
                    name='order'
                    list={['a-z','z-a','high','low']}
                    size='select-sm'
                    defaultValue={order}
                />

                <FormRange
                    label = 'select price'
                    name = 'price'
                    size = 'range-sm'
                    price = {price}
                    defaultValue={price}
                />

                <FormCheckbox
                    name = 'shipping'
                    label = 'free shiping'
                    size = 'checkbox-sm'
                    defaultValue={shipping}
                />
                <button type='submit' className='btn btn-primary btn-sm'>Search</button>
                <Link to='/products' className='btn border-t-green-100 btn-accent btn-sm'>
                    Reset
                </Link>
            </Form>
        </>
    )
}
export default Filters;