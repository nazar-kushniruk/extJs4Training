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
    selectedColumnsClick: function (thisThis, record, item, index, e) {

        console.log('selectedColumnsClick work',e.target.classList.contains('remove-item-button'));
       // console.log('selectedColumnsClick work',e.target.classList);
        //debugger;
    },
    avaliableColumnsClick: function (thisThis, record, item, index, e) {
        if ( e.target.classList.contains('add-item-button')){
            var store = Ext.getStore('SelectedColumnsStore');
        store.add(record.raw);
            /*console.log(record.raw);
            console.log(thisThis.store.add(record.raw));
            console.log(thisThis.getStore('SelectedColumnsStore').add(record.raw));*/
        }
        //console.log('avaliableColumnsClick work', e.target.classList.contains('add-item-button'));
    }
});