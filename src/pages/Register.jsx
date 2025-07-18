import { FormInput, SubmitBtn } from "../components";
import {Form, Link} from "react-router-dom"

const Register = () =>{
    return(
        <section className="h-screen grid place-items-center">
            <Form method="post" className="card bg-neutral-950 shadow-lg w-96 p-8 flex-col
            gap-y-4">
                <h4 className="text-center text-3xl font-bold">Register</h4>
                <FormInput
                  type='text'
                  label='name'
                  name='Username'
                />
                <FormInput
                  type='email'
                  label='email'
                  name='identifier'
                  defaultValue='test@test.com'
                />
                <FormInput
                   type='password'
                   label='password'
                   name='password'
                   defaultValue='secret'
                />
                <div className="mt-4">
                    <SubmitBtn text='Register'/>
                </div>
                <p className='text-center'>
                       Already a member?{' '}
                        <Link
                         to='/login'
                         className='ml-2 link link-hover link-primary capitalize'
                         >
                           Login
                        </Link>    
                </p>

            </Form>
        </section>
    )
}
export default Register;