Ext.define('tableWieveExtJs.store.AllColumnsStore', {
    extend: 'Ext.data.Store',
    storeId: 'AllColumnsStore',
    model: 'tableWieveExtJs.model.ColumnModel',
    autoSync: true,
    autoLoad:true,
    proxy: {
        type: 'ajax',
        url: "http://www.mocky.io/v2/5cee4dbd30000095786e9a67"
    },
    getSelectedColumnForGrid: function () {
        var allColumns = this.getRange(),
            selectedColumnsIds = App.LocalStorageTools.getSelectedColumnsFromLocalStorage();

        return !selectedColumnsIds.length
            ? allColumns.map(record => record.getData())
            : selectedColumnsIds.reduce(function (result, id) {
                var column = allColumns.find(function (record) {
                    return record.get('id') === id;
                });

                column && result.push(column.getData());
                return result;
            }, []);
    }
});