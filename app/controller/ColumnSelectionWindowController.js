Ext.define('tableWieveExtJs.controller.ColumnSelectionWindowController', {
    extend: 'Ext.app.Controller',
    views: [
        'ColumnSelectionWindow',
        'ColumnSelectionView',
        'ColumnListView'
    ],

    refs: [{
        ref: 'confirmButton',
        selector: 'button#confirmButton'
    }],
    buttonAddDisabled: true,
    buttonAddRendered: false,
    init() {
        this.listen({
                store: {
                    '#SelectedColumnsStore': {
                        datachanged: this.onSelectedStoreChange
                        /* add: this.onSelectedStoreChange,
                         scope: this*/
                    }
                },
                component: {
                    '#confirmButton': {
                        click: this.onConfirmButtonClick
                    }
                }
            }
        )
    },

    onSelectedStoreChange: function () {
        console.log('onSelectedStoreChange work');
        var button = this.getConfirmButton(),
            selectedColumnsStore = Ext.getStore('SelectedColumnsStore');
            selectedColumnsStore = Ext.getStore('SelectedColumnsStore');

        if (button && button.rendered) {
            selectedColumnsStore.getStorageData();
            /*var needToDisableButton = !selectedColumnsStore.getCount()
                || Ext.Array.equals(selectedColumnsStore.getStorageData().map(a => a.id).sort(),
                    selectedColumnsStore.getRange().map(a => a.get('id')).sort());
            button.setDisabled(needToDisableButton);*/
        }
    },
    onConfirmButtonClick : function () {
        console.log('onConfirmButtonClick work');
    }

});