import progressbarcss from './ProgressBar.module.css';

const ProgressBar = () => {

  return  <div className ={progressbarcss.container}>  
           <div className={progressbarcss.percent}></div>
         </div>
}
export default ProgressBar;