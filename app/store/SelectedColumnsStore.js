Ext.define('tableWieveExtJs.store.SelectedColumnsStore', {
    extend: 'Ext.data.Store',
    storeId: 'SelectedColumnsStore',
    model: 'tableWieveExtJs.model.ColumnModel',
    // data:  ["id",  "name",  "username",  "email",  "phone", "viber"]
    proxy: {
        type: 'localstorage',
        id: 'twitter-Searches'
    }
});