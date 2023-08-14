const zoomImg=(state=[],action)=>{
    if(action.type === 'ZOOMIMG')
    {
        return [action.data];
    }
    else
    return [];
}
export default zoomImg;