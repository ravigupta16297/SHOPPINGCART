const user=(val=[],action)=>{
   
    if(action.type === 'USER')
    {
        return [action.data];
    }
    else if(action.type === 'EMPTYUSER')
    return [];
 
    else
    return val;
}
export default user;