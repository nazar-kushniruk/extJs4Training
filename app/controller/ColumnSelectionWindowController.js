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
    },
        {
            ref: 'myTable',
            selector: '#usergridId'
        }
    ],
    buttonAddDisabled: true,
    buttonAddRendered: false,
    init() {
        this.listen({
                store: {
                    '#SelectedStore': {
                        datachanged: this.onSelectedStoreChange
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
        var button = this.getConfirmButton(),
            localStorageSelectedColumns = localStorage.getItem('selectedColumns').split(',').map(i => +i),
            selectedColumnsStoreNowData = Ext.getStore('SelectedStore')

        if (button && button.rendered) {
            var needToDisableButton = !selectedColumnsStoreNowData.getCount() ||
                Ext.Array.equals(localStorageSelectedColumns.sort(),
                    selectedColumnsStoreNowData.getRange().map(a => a.get('id')).sort());
            button.setDisabled(needToDisableButton);
        }
    },
    onConfirmButtonClick : function (me) {
        console.log('onConfirmButtonClick work', me);
        var localStorageSelectedColumns = localStorage.getItem('selectedColumns').split(',').map(i => +i);
        localStorage.setItem('selectedColumns',  Ext.getStore('SelectedStore').getRange().map(a => a.get('id')).sort());
        var button = this.getConfirmButton();
        var myTable = this.getMyTable();
        console.log('myTable', myTable.getView());
       myTable.updateCol();
        button.up().up().close();
    }

});