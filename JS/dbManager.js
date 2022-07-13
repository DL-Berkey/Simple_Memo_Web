const DB_NAME = "memoDB";
const DB_VERSION = 1;

const dbRequest = indexedDB.open(DB_NAME, DB_VERSION);
let db = null;

dbRequest.addEventListener("success", (e) => {
    db = e.target.result;
});

dbRequest.addEventListener("error", (e) => {
    const error = e.target.error;
    console.log("error", error.name);
});

dbRequest.addEventListener("upgradeneeded", (e) => {
    db = e.target.result;
    
    const oldVersion = e.oldVersion;
    if(oldVersion < 1) {
        db.createObjectStore("memos", {keyPath: "id"});
    }
});

export {db};