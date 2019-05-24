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
    selectedColumnForGrid:'',
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
            }console.log('in load this.getSelectedColumnForGrid();', this.getSelectedColumnForGrid());
            this.getSelectedColumnForGrid();
            Ext.getStore('AvailableColumnsStore').getData();
        }
    },

   /* getAllColumns: function () {
        var data = localStorage.getItem('all') || null;
        if (data) {
            this.add(JSON.parse(data));
        }
    },*/
    getSelectedColumnForGrid : function ( ) {

        var dataAll = this.data.items || null,
            dataSelected = localStorage.getItem('selectedColumns')
            .split(',').map(i => +i) || null;
        if( dataAll && dataSelected) {
          return   dataAll.filter( function (column) {
              console.log('dataAll.filter -> ', column.data.id);
                return  dataSelected.includes(column.data.id)
            }).map(function (column) {
                return {
                    text: column.data.name,
                    dataIndex: column.data.name,
                    flex: 1
                }
            })
        }/*else if ( dataAll && !dataSelected) {
            return dataAll.map(function (item) {
                return item.name.toLowerCase();
            })
        }*/else {
            alert("Something went wrong");
        }



    }
});