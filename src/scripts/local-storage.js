export function store(data) {
    if (localStorage.length === 0) {
        localStorage.setItem('lastKey', "0");
        localStorage.setItem('0', JSON.stringify(data));
    } else {
        var lastKey = localStorage.getItem("lastKey");
        var newKey = parseInt(lastKey) + 1;
        localStorage.setItem('lastKey', newKey);
        localStorage.setItem(newKey, JSON.stringify(data));
    }
}