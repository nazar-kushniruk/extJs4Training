Ext.define('tableWieveExtJs.store.AvailableColumnsStore', {
    extend: 'Ext.data.Store',
    storeId: 'AvailableColumnsStore',
    model: 'tableWieveExtJs.model.ColumnModel',
    data: [],
    filters: [
        Ext.create('Ext.util.Filter', {
            filterFn: function (record) {
                return !Ext.getStore('SelectedColumnsStore').getRange().map(function (recordSelected) {
                    return recordSelected.get('id');
                }).includes(record.get('id'));
            }
        }),
        //
        Ext.create('Ext.util.Filter', {
            filterFn: function (record) {
                var store = record.store,
                    searchQuery = store.searchQuery;

                return searchQuery?  record.get('name').includes(searchQuery): true;
            }
        })
    ],

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
    }

});

