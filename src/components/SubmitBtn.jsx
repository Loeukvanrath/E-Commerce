import { useNavigation } from 'react-router-dom';

const SubmitBtn = ({text})=>{
    const navigation = useNavigation()
    const isSubmitting = navigation.state === 'submitting'
    return(
        <button type='submit' className="btn btn-primary btn-block" disabled={isSubmitting}>
            {isSubmitting?(
                <>
                    <span className="loading loading-ring loading-xs"></span>
                    <span className="loading loading-ring loading-sm"></span>
                    <span className="loading loading-ring loading-md"></span>
                    <span className="loading loading-ring loading-lg"></span>
                    <span className="loading loading-ring loading-xl"></span>
                    Sending.........
                </>
            ):(
                text || 'submit'
            )}  
        </button>
    )
}
export default SubmitBtn;