Ext.define('tableWieveExtJs.store.AllColumnsStore', {
    extend: 'Ext.data.Store',
    storeId: 'AllColumnsStore',
    model: 'tableWieveExtJs.model.ColumnModel',
    autoSync: true,
    data: [],
    getAllColumns :  function () {
        var data = localStorage.getItem('all') || null;
        if (data) {
            this.add(JSON.parse(data));
        };
    }
});