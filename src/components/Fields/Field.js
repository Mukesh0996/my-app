import { CONSTANTS } from '../../utils/fields';
import fieldCss from './Field.module.css';


const getLabel = (name) =>  name.split("_").map(value => value.charAt(0).toUpperCase() + value.slice(1)).join(" ");
const InputWrapper = ({ name, changeHandler, ...rest}) => {

    let label = getLabel(name);
    return <div className={fieldCss.inputContainer}>
                <label>
                    <span>{ label }</span> 
                    <input name={name} onChange={(e) => { changeHandler(e.target.value, name); }} { ...rest } />
                </label>
            </div>   

}
const TextField = ({ name, changeHandler, ...rest}) =>  <InputWrapper name={name} changeHandler={changeHandler} { ...rest }/>
const ColourPicker = ({name, changeHandler, ...rest}) => <InputWrapper name={name} changeHandler={changeHandler} {...rest}/>
const FileUploadField = ({name, changeHandler , ...rest}) => {

    const fileChangeHandler = (e) => {

        changeHandler(e);
    }
    return <InputWrapper name={name} changeHandler={fileChangeHandler} { ...rest }/>
}
const PickListField = ({name, changeHandler, ...rest}) => {

    let label = getLabel(name);


    return <div className={fieldCss.inputContainer}>
                <label htmlFor={name}>{ label }</label>
                <select id={name} name={name} onChange={(e) => changeHandler(e.target.value, name)}>
                    <option  value={"Verdana"}  >Verdana</option>
                    <option value={"Arial"}>Arial</option>
                    <option  value={"Times New Roman"}>Times New Roman</option>
                    <option  value={"Georgia"}>Georgia</option>
                    <option  value={"Courier New"}>Courier New</option>
                </select>
            </div>
}


const Field = ( { name, onChangeHandler, ...rest } ) => {

    switch (rest.type) {

        case CONSTANTS.TEXT:
        case CONSTANTS.EMAIL:
        case CONSTANTS.PHONE: return  <TextField  name={name} changeHandler={onChangeHandler} {...rest}/>;
        case CONSTANTS.FILE: return <FileUploadField  name={name} changeHandler={onChangeHandler} {...rest}/>;
        case CONSTANTS.COLORPALETTE: return <ColourPicker name={name} changeHandler={onChangeHandler}  { ...rest }/> 
        case CONSTANTS.PICKLIST: return <PickListField name={name} changeHandler={onChangeHandler} { ...rest }/>
        default: return null;
    }
}
export default Field;