export default function onWatchedHandler (key){
    let array;
    const data = localStorage.getItem(key)
    if(data.length === 0) {
        return
    }
    array = JSON.parse(data);
    return array;
}