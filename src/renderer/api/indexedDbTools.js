export default {
    openNewDb:(dbName)=>{
        return new Promise((resolve, reject) => {
            let request = window.indexedDB.open(dbName);
            request.onerror = event => reject('打开IndexedDB失败')
            request.onsuccess = event => {
                console.log("数据库初始化成功");
                resolve(event.target.result)
            }
        })
    },
    openDb:(dbname,version,storeName)=> {
        /** @namespace window.indexedDB */
        return new Promise((resolve, reject) => {
            let request = window.indexedDB.open(dbname, version);
            request.onerror = event =>reject('打开IndexedDB失败')
            request.onupgradeneeded = (event) => {
                let db = event.target.result;
                if(!db.objectStoreNames.contains(storeName.name)){
                    db.createObjectStore(storeName.name, { keyPath: storeName.keyPath});
                }
                resolve(db)
            };
            request.onsuccess= event =>{
                console.log("数据库初始化成功");
                resolve(event.target.result)
            }
        })

    },
    updateData:(db,storeName,data)=>{
        let store = db.transaction(storeName, 'readwrite').objectStore(storeName);
        console.log(data)
        store.put(data)
    },
    getAllData:(db,storeName) =>{
        return new Promise((resolve, reject) => {
            let data = db.transaction(storeName, 'readwrite').objectStore(storeName).getAll();
            data.onsuccess = e => resolve(e.target.result);
            data.onerror = e => reject("读取数据失败")
        })
    },
    getDataByKey:(db,storeName,key) => {
        return new Promise((resolve, reject) => {
            let data = db.transaction(storeName, 'readwrite').objectStore(storeName).get(key);
            data.onsuccess = e => resolve(e.target.result);
            data.onerror = e => reject("读取数据失败")
        })

    },
    deleteDataByKey:(db,storeName,key)=>{
        let data =  db.transaction(storeName, "readwrite").objectStore(storeName).delete(key);
        data.onsuccess = e => resolve('删除数据成功');
        data.onerror = e => reject("删除数据失败")
    },
}