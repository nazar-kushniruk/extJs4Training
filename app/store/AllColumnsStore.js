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
    listeners: {
        load: function (store, records) {
            if (!records.length) {
                store.add
                ({id: 1, name: "id"},
                    {id: 2, name: "name"},
                    {id: 3, name: "username"},
                    {id: 4, name: "email"},
                    {id: 5, name: "phone"},
                    {id: 6, name: "website"});
            }
        }
    },

    getSelectedColumnForGrid: function () {

        var dataAll = this.data.items || null,
            dataSelected = localStorage.getItem('selectedColumns')
                .split(',').map(i => +i) || null;
        if (dataAll && dataSelected) {
            return dataAll.filter(function (column) {
                return dataSelected.includes(column.data.id)
            }).map(function (column) {
                return {
                    text: column.data.name,
                    dataIndex: column.data.name,
                    flex: 1
                }
            })
        } else {
            alert("Something went wrong");
        }
    }
});