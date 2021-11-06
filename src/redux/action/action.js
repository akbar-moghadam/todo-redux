import { ActionType } from "../constants/actionType";

let nextId=0;
export const setAdd= (allStds,nclass) =>{
return {
    type:ActionType.Add,
    payload:{
        id:++nextId,
        allStds,
        nclass
       
        
    }
}
}