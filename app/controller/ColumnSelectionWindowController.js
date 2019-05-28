Ext.define('tableWieveExtJs.controller.ColumnSelectionWindowController', {
    extend: 'Ext.app.Controller',
    views: [
        'ColumnSelectionView',
        'ColumnListView',
        'ColumnSelectionWindow'
    ],
    refs: [
        {
            ref: 'confirmButton',
            selector: 'button#confirmButton'
        }
    ],

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
        );
    },

    onSelectedStoreChange: function (selectedColumnsStore) {
        var button = this.getConfirmButton(),
            calStorageSelectedColumns = App.LocalStorageTools.getSelectedColumnsFromLocalStorage();

        if (button && button.rendered) {
            var needToDisableButton = !selectedColumnsStore.getCount()
                || Ext.Array.equals(
                    calStorageSelectedColumns.sort(),
                    selectedColumnsStore.getRange().map(a => a.get('id')).sort()
                );

            button.setDisabled(needToDisableButton);
        }
    },

    onConfirmButtonClick: function (button) {
        var columnSelectionPopup = button.up('#columnSelectionPopup'),
            selectedColumnsIds = Ext.getStore('SelectedStore').getRange().map(a => a.get('id')).sort();

        App.LocalStorageTools.setSelectedColumnsToLocalStorage(selectedColumnsIds);
        columnSelectionPopup.onSaveCallback();
        columnSelectionPopup.close();
    }
});