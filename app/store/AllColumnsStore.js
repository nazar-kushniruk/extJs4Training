Ext.define('tableWieveExtJs.store.AllColumnsStore', {
    extend: 'Ext.data.Store',
    storeId: 'AllColumnsStore',
    model: 'tableWieveExtJs.model.ColumnModel',
    autoSync: true,
    proxy: {
        type: "localstorage",
        id: "add"
    },
    autoLoad: true,
    requires: ['tableWieveExtJs.LocalStorageTools'],
    listeners: {
        // todo load data from  https://www.mocky.io/
        //  "[{"id":1,"name":"id"},{"id":2,"name":"name"},{"id":3,"name":"username"},
        //  {"id":4,"name":"email"},{"id":5,"name":"phone"},{"id":6,"name":"website"}]"
        load: function (store, records) {
            if (!records.length) {
                store.add
                (
                    {id: 1, name: "id"},
                    {id: 2, name: "name"},
                    {id: 3, name: "username"},
                    {id: 4, name: "email"},
                    {id: 5, name: "phone"},
                    {id: 6, name: "website"},
                    {id: 21, name: "name 2"},
                    {id: 32, name: "username 2"},
                    {id: 42, name: "email 2"},
                    {id: 53, name: "phone 2"},
                    {id: 64, name: "website 2"}
                );
            }
        }
    },

    getSelectedColumnForGrid: function () {
        var dataAll = this.getRange() || [],
            dataSelected = App.LocalStorageTools.getSelectedColumnsFromLocalStorage();

        if (dataAll) {
            return dataSelected.length ? dataAll.filter(function (record) {
                return dataSelected.includes(record.get('id'));
            }).map(r => r.getData()) : dataAll.map(r => r.getData());
        }

        return [];
    }
});