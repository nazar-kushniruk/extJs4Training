Ext.define('tableWieveExtJs.store.SelectedColumnsStore', {
    extend: 'Ext.data.Store',
    storeId: 'SelectedColumnsStore',
    /*id:'SelectedColumnsStore',*/
    model: 'tableWieveExtJs.model.ColumnModel',
    autoSync: true,
    autoLoad: true,
    //data: [],
    proxy: {
        type: 'localstorage',
        id: 'selected'
    },

    listeners: {
        load: function (store, records) {
           /* if (!records.length) {
                store.add
                ({id:1,  name: "id"});

                // store.sync();
                console.log('SelectedColumnsStore add')
            }*/
            Ext.getStore('AvailableColumnsStore').filter();
        },

        update: function (me, record, operation, modifiedFieldNames, eOpts) {
           // me.add(record).save();
            console.log(' update data changed arguments', arguments);
        },
        datachanged: function () {
            console.log('datachanged data changed');
        },
    },
   /* getSelectedColumns: function () {
        var data = this.getStorageData();
        data.length && this.add(data);
    },*/

    getStorageData: function () {
       // var data = localStorage.getItem('selected').split(',') || null;
        var data = localStorage.getItem('selected') || null;
        console.log('!!!!data !!!',data ? data.length : '----');
        var dataArr = [];
        data ? data.split(',').map( function(item) {
           dataArr.push( localStorage.getItem(`selected_${item}`))
        }) : [];
        console.log('!!!!data !!!',dataArr ? dataArr : '====');
      /*  if (data) {
            return JSON.parse(data).length
        }

        return 0;*/
    },
});