function wordcount(){
    const lyrics = document.getElementById("lyrics");
    const words = [...lyrics.value.matchAll(/[\w']+/g)].map(a => a[0].toLowerCase());
    const map = new Map();
    words.forEach(word => {
        if(!map.has(word)){
            map.set(word, 0);
        }
        map.set(word, map.get(word) + 1);
    });
    const entries = [...map.entries()].sort((a,b) => b[1] - a[1]);
    const table = document.getElementById("outputTarget");
    table.innerHTML = "";
    entries.forEach(entry => {
        table.innerHTML += `<tr><td>${entry[0]}</td><td>${entry[1]}</td></tr>`;
    });
}
