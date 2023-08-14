export const additem=(data)=>{
    return{
        type:'ADDTOCART',
        data:data
    }
}
export const removeitem=(data)=>{
    return{
        type:'REMOVEFROMCART',
        data:data
    }
}
export const emptycart=(data)=>{
    return{
        type:'EMPTYCART',
        data:data
    }
}
export const user=(data)=>{
    return{
        type:'USER',
        data:data
    }
}
export const emptyuser=(data)=>{
    return{
        type:'EMPTYUSER',
        data:data
    }
}
export const zoomimg=(data)=>{
    return{
        type:'ZOOMIMG',
         data:data
    }
}
export const emptyzoom=(data)=>{
    return{
        type:'EMPTYZOOM',
         data:data
    }
}