
import { myAxios } from './helper';


export const register=(user)=>{
    return myAxios
    .post("/api/users/",user)
    .then((response)=>response.data);
};


