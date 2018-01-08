//state
const state = {
    dbObject:{name:'my-tools',version:1,db:null}
};

// getters
const getters = {
    getDbObject:state =>state.dbObject
};
// actions
const actions = {
    openDb:({commit},storeName) => commit("openDb",storeName),
    IndexedDbAddData:({commit},Object) => commit("IndexedDbAddData",Object),

};

// mutations
const mutations = {
    openDb:(state,storeName) =>{
        let request = window.indexedDB.open(state.dbObject.name, state.dbObject.version);
        request.onerror = event =>console.log("打开IndexedDB失败", event);
        request.onupgradeneeded = (event) => {
            state.dbObject.db = event.target.result;
            if(!state.dbObject.db.objectStoreNames.contains(storeName.name)){
                state.dbObject.db.createObjectStore(storeName.name, { keyPath: storeName.keyPath});
            }
            console.log('IndexedDB version changed to name: '+ state.dbObject.name +' version: '+ state.dbObject.version);
        };
        request.onsuccess= event =>{
            console.log("成功打开IndexedDB");
            state.dbObject.db = event.target.result;
        }
    },
    IndexedDbAddData:(state,Object) =>{
        let store = state.dbObject.db.transaction(Object.store,'readwrite').objectStore(Object.store);
        for(let i=0;i<Object.dataObject.length;i++){
            store.add(Object.dataObject[i]);
        }

    }
};
export default {
    state,
    getters,
    actions,
    mutations
}