const FormInput = ({label, name, type, defaultValue, size}) =>{
    return(
        <div className="form-control">
            <label className="form-control">
                <span className="label-text">{label}</span>
            </label>      
            <input type={type}
                   name={name}
                   className={`input input-bordered ${size}`}
                   defaultValue={defaultValue}
            />   
        </div>
    );
}
export default FormInput;