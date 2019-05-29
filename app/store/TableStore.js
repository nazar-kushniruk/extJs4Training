Ext.define('tableWieveExtJs.store.TableStore', {
    extend: 'Ext.data.Store',
    model: 'tableWieveExtJs.model.TableModel',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'https://jsonplaceholder.typicode.com/users'
    }
});