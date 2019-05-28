Ext.define('tableWieveExtJs.controller.ColumnSelectionController', {
    extend: 'Ext.app.Controller',
    stores: ['TableStore', 'AllColumnsStore'],
    views: [
        'ColumnSelectionWindow',
        'ColumnSelectionView',
        'ColumnListView'
    ],
    init() {
        this.searchFieldChangeDebounce = Ext.Function.createBuffered(this.searchFieldChange, 150, this);

        this.control({
            '#selectedColumns': {
                itemclick: this.selectedColumnsClick
            },
            '#avaliableColumns': {
                beforerender: this.updateAvailableColumnsStore,
                itemclick: this.availableColumnsClick
            },
            '#searchField': {
                change: this.searchFieldChangeDebounce
            }
        });
    },

    selectedColumnsClick: function (thisThis, record, item, index, e) {
        if (e.target.classList.contains('remove-button')) {
            Ext.getStore('SelectedStore').remove(record);
            this.updateAvailableColumnsStore();
        }
    },

    availableColumnsClick: function (thisThis, record, item, index, e) {
        if (e.target.classList.contains('add-button')) {
            Ext.getStore('SelectedStore').add(record);
            this.updateAvailableColumnsStore();
        }
    },

    searchFieldChange: function (searchField, newValue) {
        Ext.getStore('AvailableStore').updateSearchFilterQuery(newValue);
    },

    updateAvailableColumnsStore: function () {
        Ext.getStore('AvailableStore').filter();
    }
});