import { profiles } from "../profiles/profiles";



export const authReducer=(state, action)=>{
    switch (action.type) {
        case profiles.loginuser:
            return {
                logged:true,
                admin:false,
                user:action.payload
            }
        
        case profiles.logout:
                return {
                    logged:false,
                    
                }
        
        default:
            return state
    }
}