import { useContext } from "react";
import Field from "../Fields/Field";
import { AppContext } from "../../utils/context";
import signatureGeneratorStyles from './SignatureGenerator.module.css';

const SignatureGenerator = () => {

    const  { step, fields, setStepValue, setFieldValue } = useContext(AppContext);

    const onChangeHandler = ( value, name ) => {

       setFieldValue(prevValue => {

        let updatedFields = { ...prevValue };
        updatedFields[step][name].value = value;
        return updatedFields;        
       })
    }

    const onStepChange = (value) => {

        if( step == 4 && value == 1  ) {
            
            return;
        }
        setStepValue(prevValue => prevValue + value);
    }

    return <div className={signatureGeneratorStyles.container}> 
                {
                    Object.entries(fields[step]).map((field, key) => <Field key={key} name={field[0]} onChangeHandler={onChangeHandler} { ...field[1] }/> )
                } 
                <div className={signatureGeneratorStyles.buttons}>
                    <button 
                        onClick={()=> { onStepChange(-1) }} 
                        disabled={ step == 1 ? true : false } 
                        className={signatureGeneratorStyles.previous}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left mr-1 h-4 w-4"><path d="m15 18-6-6 6-6"></path></svg>
                        Previous
                    </button>
                    <button 
                        onClick={()=> { onStepChange(1) }}  
                        className={signatureGeneratorStyles.next}> 
                        Next
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right ms-1 h-4 w-4"><path d="m9 18 6-6-6-6"></path></svg>
                    </button>
                </div>
            </div>
}

export default SignatureGenerator;