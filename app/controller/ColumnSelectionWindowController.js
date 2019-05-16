Ext.define('tableWieveExtJs.controller.ColumnSelectionWindowController', {
    extend: 'Ext.app.Controller',
    views: [
        'ColumnSelectionWindow',
        'ColumnSelectionView',
        'ColumnListView'
    ],

    refs: [{
        ref: 'list',
        selector: 'columnList'
    }],
    init() {
        this.control({
            /* 'selectedColumns' : this.selectedColumnsClick,*/
            '#avaliablecolumns' : {
                click:  this.avaliableColumnsClick
            }
        });
        console.log("ColumnSelectorController inited")
    },
    avaliableColumnsClick:  function () {
        console.log('avaliableColumnsClick work');
    }

});