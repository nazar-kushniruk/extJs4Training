Ext.define('tableWieveExtJs.store.SelectedColumnsStore', {
    extend: 'Ext.data.Store',
    storeId: 'SelectedColumnsStore',
    model: 'tableWieveExtJs.model.ColumnModel',
    //autoSync: true,
    data: [],

    getSelectedColumns :  function () {
        var data = localStorage.getItem('selected') || null;
        if (data) {
            this.add(JSON.parse(data));
        }
        this.add([]);
    }
});