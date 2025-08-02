import SignatureGenerator from "../SignatureGenerator/SignatureGenerator";
import SignaturePreview from "../SignaturePreview/SignaturePreview";
import signatureStyles from './signature.module.css'

const Signature = () => {

    return <div className={signatureStyles.signature}> 
                <SignatureGenerator/> 
                <SignaturePreview/>
            </div>
}


export default Signature;