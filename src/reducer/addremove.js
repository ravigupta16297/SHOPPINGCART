const inistate = [];
const addremove = (state = inistate, action) => {

    if (action.type === 'ADDTOCART') {
        return [...state,action.data];
    }
    else if (action.type === 'REMOVEFROMCART') {
       return state.filter((ele)=>ele.id !== action.data)
    }
    else if(action.type === 'EMPTYCART')
    {
        return [];
    }
else
return state;
}
export default addremove;