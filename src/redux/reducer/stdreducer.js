import { ActionType } from "../constants/actionType";

const initialState={
    allStds:[]
};
export const allStds=(state=initialState,{type,payload})=>{
    switch (type) {
        case ActionType.Add:
            const {id,allStds,nclass}=payload;
            return{
                allStds:[
                    ...state.allStds,
                    {id,allStds,nclass}
                ]
            }
    
        default:
            return state
    }

}