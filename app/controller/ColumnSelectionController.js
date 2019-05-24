Ext.define('tableWieveExtJs.controller.ColumnSelectionController', {
    extend: 'Ext.app.Controller',
    stores: ['TableStore',
        'AllColumnsStore'],
    views: [
        'ColumnSelectionWindow',
        'ColumnSelectionView',
        'ColumnListView'
    ],
    init() {
        this.control({
            '#selectedColumns': {
                itemclick: this.selectedColumnsClick
            },
            '#avaliableColumns': {
                beforerender: function () {
                    Ext.getStore('AvailableStore').filter();
                },
                itemclick: this.availableColumnsClick
            },
            '#searchField': {
                change: this.searchFieldChange
            }
        });

    },
    selectedColumnsClick: function (thisThis, record, item, index, e) {
        if (e.target.classList.contains('remove-button')) {
            var selectedColumnsStore = Ext.getStore('SelectedStore'),
                availableColumnsStore = Ext.getStore('AvailableStore');
            selectedColumnsStore.remove(record);
            availableColumnsStore.filter();
        }
    },

    availableColumnsClick: function (thisThis, record, item, index, e) {
        if (e.target.classList.contains('add-button')) {
            var selectedColumnsStore = Ext.getStore('SelectedStore'),
                availableColumnsStore = Ext.getStore('AvailableStore');
            selectedColumnsStore.add(record);
            availableColumnsStore.filter();
        }
    },
    searchFieldChange: function (my, newValue, oldValue) {
        var availableColumnsStore = Ext.getStore('AvailableStore');
        availableColumnsStore.searchQuery = newValue;
        availableColumnsStore.filter();
    }
});