import fieldCss from './Field.module.css';

const TextField = ({ name, changeHandler, ...rest}) => {

    let label = name.split("_").map(value => value.charAt(0).toUpperCase() + value.slice(1)).join(" ");

    return <div className={fieldCss.inputContainer}>
                <label>
                    <span>{ label }</span> 
                    <input name={name} onChange={(e) => { changeHandler(e.target.value, name); }} { ...rest } />
                </label>
                
            </div>   
}

const FileUploadField = ({name, changeHandler , ...rest}) => {


    const fileChangeHandler = (e) => {

        changeHandler(e);
    }

    return <div className={fieldCss.inputContainer}> 
                <input name={name} onChange={fileChangeHandler} { ...rest }/>
            </div>
}

const Field = ( { name, onChangeHandler, ...rest } ) => {


    switch (rest.type) {

        case "text": return  <TextField  name={name} changeHandler={onChangeHandler} {...rest}/>;
        case "file": return <FileUploadField  name={name} changeHandler={onChangeHandler} {...rest}/>;
        default: return null;
    }
}

export default Field;