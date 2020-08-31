
const cutText = (text, cutNumber) => {
    if(text != null){
        if(text.length > 150){
            return text.substr(0,150)+ ' ...'
        }else{
            return text
        }
    } 
    return '' 
}

export default cutText