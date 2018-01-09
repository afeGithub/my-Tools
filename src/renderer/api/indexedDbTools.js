import * as configs from './config'
let dbInfo = null;
export default {
    openDb:(storeName)=> {
        /** @namespace window.indexedDB */
        let request = window.indexedDB.open(configs.INDEXEDDB_NAME, configs.INDEXEDDB_VERSION);
        request.onerror = event =>console.log("打开IndexedDB失败", event);
        request.onupgradeneeded = (event) => {
            dbInfo = {dbName:configs.INDEXEDDB_NAME,dbVersion:configs.INDEXEDDB_VERSION,db:event.target.result};

            if(!dbInfo.db.objectStoreNames.contains(storeName.name)){

                dbInfo.db.createObjectStore(storeName.name, { keyPath: storeName.keyPath});
            }
            console.log("数据库初始化成功==");
        };
        request.onsuccess= event =>{
            dbInfo = {dbName:configs.INDEXEDDB_NAME,dbVersion:configs.INDEXEDDB_VERSION,db:event.target.result}
            console.log("数据库初始化成功");
        }
    },
    closeDB:()=>{
        dbInfo.db.close();
    },
    insertData:(storeName,dataList)=>{
        //创建事务并访问事务中的objectStore;
        let store =dbInfo.db.transaction(storeName, 'readwrite').objectStore(storeName);
        dataList.forEach(t=>store.add(t))
    },
    getAllData:storeName =>{
        let data =dbInfo.db.transaction(storeName, 'readwrite').objectStore(storeName).getAll();
        data.onsuccess = e => data = e.target.result;
        return data
    },
    getDataByKey:(storeName,key) => dbInfo.db.transaction(storeName, 'readwrite').objectStore(storeName).get(key),
    deleteDataByKey:(storeName,key)=>dbInfo.db.transaction(storeName, "readwrite").objectStore(storeName).delete(key),

    updateDataByKey:(storeName,data) =>dbInfo.db.transaction(storeName, "readwrite").objectStore(storeName).put(data),

}