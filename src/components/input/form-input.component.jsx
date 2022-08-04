import "./form-input.styles.scss";

const FormInput =({label, ...otherProps }) => { //inputOptions (cambiar en todos los que dice otherProps)
    return (
        <div className="group"> 
           <input className="form-input"{...otherProps} /> 
            { label && (
            <label 
            
            className={`${
                otherProps.value.length ? "shrink" : ''
            }form-input-label`}
            >
                {label}
            </label>
            )}
           
        </div>
    );
};

export default FormInput;