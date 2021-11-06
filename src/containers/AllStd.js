import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { setAdd } from '../redux/action/action'
import "../style/css/allstd.scss"
import StdList from './stdlist'
const AllStd = () => {
    
    const dispatch=useDispatch();
    const [name, setName] = useState("");
    const [nclass, setNclass] = useState("")
    
    
    const handelSubmit=(e)=>{
        
            e.preventDefault();
            dispatch(setAdd(name,nclass));
            setName('');
      
       
}
    const handleName=(e) => {
     setName(e.target.value);
}
const selectHandel= (e) => {
    setNclass(e.target.value);
}

    return (
        <section className="allstd-container">
            
            <article className="allstd-change">
                
               <form onSubmit={handelSubmit} className="form-container"> 
                     <div className="allstd-add"> 
                         <div>
                        <label htmlFor="">Student Name:
                        <input type="text"  value={name} onChange={handleName} required/>
                        </label>
                        </div>
                    
                        <div>
                        <label htmlFor="">Class Number:
                        <select value={nclass} onChange={selectHandel}>
                            <option>one</option>
                            <option>two </option>
                            <option>three</option>
                        </select>
                        </label>
                        </div>
                           
                    
                    </div>
                    
                    <button type="submit">Add Std</button>
               </form>
            </article>
            <div className="allstd-show">
                 <StdList/>
            </div>
        </section>
    )
}

export default AllStd
