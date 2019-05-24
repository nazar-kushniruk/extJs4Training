Ext.define('tableWieveExtJs.store.TableStore', {
    extend: 'Ext.data.Store',
    model: 'tableWieveExtJs.model.TableModel',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'data/users.json'

    }
});