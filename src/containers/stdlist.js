import React from 'react'
import {useSelector} from 'react-redux';
import "../style/css/stdlist.scss";
const StdList = () => {
    const State=useSelector(state => state.allStudent.allStds);
        const showState= State.map((item) => {
            const {id,allStds,nclass}=item;
            
            return(
                <div key={id} className="stdlist-container">
                    <h4>{id}</h4>
                    <h4>{allStds}</h4>
                    <h4>{nclass}</h4>
                </div>
            )

        
    });
       
    return (
        <>
            {showState}
        </>
    )
}

export default StdList
