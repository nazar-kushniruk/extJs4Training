Ext.define('tableWieveExtJs.controller.ColumnSelectionController', {
    extend: 'Ext.app.Controller',
    stores: ['TableStore',
        'AllColumnsStore',
        'SelectedColumnsStore'],
    views: [
        'ColumnSelectionWindow',
        'ColumnSelectionView',
        'ColumnListView'
    ],
    init() {
        this.control({
            '#avaliableColumns': {
                itemclick: this.avaliableColumnsClick
            },
            '#selectedColumns': {
                itemclick: this.selectedColumnsClick
            }
        });
        console.log("ColumnSelectorController inited")
    },
    selectedColumnsClick: function () {
        console.log('selectedColumnsClick work');
    },
    avaliableColumnsClick: function () {
        console.log('avaliableColumnsClick work');
    }
});