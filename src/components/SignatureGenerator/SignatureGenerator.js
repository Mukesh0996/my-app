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
    return <div className={signatureGeneratorStyles.container}> {

            Object.entries(fields[step]).map((field, key) => <Field key={key} name={field[0]} onChangeHandler={onChangeHandler} { ...field[1] }/> )

            } </div>
}

export default SignatureGenerator;