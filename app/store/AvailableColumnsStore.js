Ext.define('tableWieveExtJs.store.AvailableColumnsStore', {
    extend: 'Ext.data.Store',
    storeId: 'AvailableColumnsStore',
    model: 'tableWieveExtJs.model.ColumnModel',
    // data: [],

    filters: [
        Ext.create('Ext.util.Filter', {
            filterFn: function (record) {
                /*  return  Ext.getStore('SelectedColumnsStore').getRange().map(function (recordSelected) {
                      console.log(' recordSelected',  recordSelected.get('name'));
                      console.log(' record', record.get('name'));
                      return  recordSelected.get('name') ==  record.get('name');

                  });*/
                /* console.log('AvailableColumnsStore Filter record', record.get('name'));
                 return !Ext.getStore('SelectedColumnsStore').getRange().map(function (recordSelected) {
                      console.log('AvailableColumnsStore Filter recordSelected', recordSelected.get('name'));
                     // console.log('AvailableColumnsStore Filter record', record);
                     return recordSelected.get('name');

                 }).includes(record.get('name'));*/
                var selectedColumnNames = Ext.getStore('SelectedColumnsStore').getRange().map(function (recordSelected) {
                    return  recordSelected.get('name');
                });
                console.log('selectedColumnNames',  !selectedColumnNames.includes( record.get('name')));
                return !selectedColumnNames.includes( record.get('name'));
            }
        }),
        //
        Ext.create('Ext.util.Filter', {
            filterFn: function (record) {
                var store = record.store,
                    searchQuery = store.searchQuery;
                /*  console.log('AvailableColumnsStore Filter2 record', record);*/
                return searchQuery ? record.get('name').includes(searchQuery) : true;
            }
        })
    ],
    listeners: {
        load: function (store, records) {
            console.log('!!!!!inload!!!!!!!!!');
            store.filter();
        }
    },
    searchQuery: "",

    getData: function () {
        var data = Ext.getStore('AllColumnsStore').getRange().map(a => a.getData());
        this.add(data);
        this.filter();
    },
    getAvStoreFilters: function () {
        return [
            Ext.create('Ext.util.Filter', {
                filterFn: function (record) {
                    console.log('filter1');
                    return !Ext.getStore('SelectedColumnsStore').getRange().map(function (recordSelected) {
                        console.log('recordSelected.get(\'id\')', recordSelected.get('id'));
                        return recordSelected.get('id');
                    }).includes(record.get('id'));
                }
            }),

            // Ext.create('Ext.util.Filter', {
            //     filterFn: function (record) {
            //         console.log('filter query');
            //         return record.get('name').includes('name');
            //     }
            // })
        ];
    },


});

