Ext.define('tableWieveExtJs.store.AllColumnsStore', {
    extend: 'Ext.data.Store',
    storeId: 'AllColumnsStore',
    model: 'tableWieveExtJs.model.ColumnModel',
    autoSync: true,
    //  data: [],
    proxy: {
        type: "localstorage",
        id: "add"
    },
    autoLoad: true,
    listeners: {
        load: function (store, records) {
            if (!records.length) {
                store.add
                (   {id: 1,name: "id"},
                    {id: 2,name: "name"},
                    {id: 3,name: "username"},
                    {id: 4,name: "email"},
                    {id: 5,name: "phone"},
                    {id: 6,name: "website"});
               // store.sync();
                console.log('AllColumnsStore add')
            }
            Ext.getStore('AvailableColumnsStore').getData();
        }
    },

    getAllColumns: function () {
        var data = localStorage.getItem('all') || null;
        if (data) {
            this.add(JSON.parse(data));
        }
        ;
    }
});