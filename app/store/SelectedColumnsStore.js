Ext.define('tableWieveExtJs.store.SelectedColumnsStore', {
    extend: 'Ext.data.Store',
    storeId: 'SelectedColumnsStore',
    /*id:'SelectedColumnsStore',*/
    model: 'tableWieveExtJs.model.ColumnModel',
    //autoSync: true,
    data: [],
    proxy: {
        type: 'localstorage',
        id: 'selected'
    },

    listeners: {
        update: function () {
            console.log('data changed');
        },
        datachanged: function () {
            console.log('data changed');
        },
    },
    getSelectedColumns: function () {
        var data = this.getStorageData();

        data.length && this.add(data);
    },

    getStorageData: function () {
        var data = localStorage.getItem('selected') || null;
        if (data) {
            return JSON.parse(data)
        }

        return [];
    },
});