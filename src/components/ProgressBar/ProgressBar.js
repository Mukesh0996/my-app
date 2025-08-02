import { useContext } from 'react';
import progressbarcss from './ProgressBar.module.css';
import { AppContext } from '../../utils/context';

const ProgressBar = () => {

  const { step  } = useContext(AppContext);
 
  return  <div className ={progressbarcss.container}>  
            <div style={{ width: `${ step * 25  }%` }} className={progressbarcss.percent}> </div>
         </div>
}
export default ProgressBar;