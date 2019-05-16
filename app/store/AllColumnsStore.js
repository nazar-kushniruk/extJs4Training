Ext.define('tableWieveExtJs.store.AllColumnsStore', {
    extend: 'Ext.data.Store',
    storeId: 'AllColumnsStore',
    model: 'tableWieveExtJs.model.ColumnModel',
    // data:  ["id",  "name",  "username",  "email",  "phone", "viber"]
    data: [
        {name: 'id'},
        {name: 'name'},
        {name: 'username'},
        {name: 'email'},
        {name: 'phone'},
        {name: 'viber'}
    ]
    ,
    proxy: {
        type: 'localstorage',
        id: 'twitter-Searches'
    }
});