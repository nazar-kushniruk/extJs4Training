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
                itemclick: this.selectedColumnsClick,
                render: this.addDnDSelectedColumns,
            },
            '#avaliableColumns': {
                beforerender: this.updateAvailableColumnsStore,
                render: this.addDnDAvailableColumns,
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
    },

    addDnDAvailableColumns: function (myDataView) {
        console.log(myDataView);
        myDataView.dragZone = new Ext.dd.DragZone(myDataView.getEl(), {

//    Получив событие mousedown, проверьте, находится ли оно в узле DataView.
//    Возвращаем объект данных перетаскивания, если так.
            getDragData: function (e) {
                console.log('getDragData', e);
//          Use the DataView's own itemSelector (a mandatory property) to
//          test if the mousedown is within one of the DataView's nodes.
                var sourceEl = e.getTarget(myDataView.itemSelector, 10);

//          If the mousedown is within a DataView node, clone the node to produce
//          a ddel element for use by the drag proxy. Also add application data
//          to the returned data object.
                if (sourceEl) {
                    d = sourceEl.cloneNode(true);
                    d.id = Ext.id();
                    return {
                        ddel: d,
                        sourceEl: sourceEl,
                        repairXY: Ext.fly(sourceEl).getXY(),
                        sourceStore: myDataView.store,
                        draggedRecord: myDataView.getRecord(sourceEl)
                    }
                }
            },

//      Provide coordinates for the proxy to slide back to on failed drag.
//      This is the original XY coordinates of the draggable element captured
//      in the getDragData method.
            getRepairXY: function () {
                return this.dragData.repairXY;
            }
        });
    },

    addDnDSelectedColumns: function (selectedColumnsView) {
            console.log(selectedColumnsView.scroller);
        selectedColumnsView.dropZone = new Ext.dd.DropZone(selectedColumnsView.scroller, {

            // If the mouse is over a grid row, return that node. This is
            // provided as the "target" parameter in all "onNodeXXXX" node event handling functions
            getTargetFromEvent: function (e) {
               // return e.getTarget(selectedColumnsView.getView().rowSelector);
              //  return e.getTarget(selectedColumnsView);
               alert (e);
                //e.getTarget(selectedColumnsView);
            },

            // // On entry into a target node, highlight that node.
            // onNodeEnter: function (target, dd, e, data) {
            //     Ext.fly(target).addCls('my-row-highlight-class');
            // },
            //
            // // On exit from a target node, unhighlight that node.
            // onNodeOut: function (target, dd, e, data) {
            //
            //     Ext.fly(target).removeCls('my-row-highlight-class');
            // },
            //
            // // While over a target node, return the default drop allowed class which
            // // places a "tick" icon into the drag proxy.
            // onNodeOver: function (target, dd, e, data) {
            //     return Ext.dd.DropZone.prototype.dropAllowed;
            // },
            // On node drop we can interrogate the target to find the underlying
            // application object that is the real target of the dragged data.
            // In this case, it is a Record in the GridPanel's Store.
            // We can use the data set up by the DragZone's getDragData method to read
            // any data we decided to attach in the DragZone's getDragData method.
            onNodeDrop: function (target, dd, e, data) {
               /* var rowIndex = selectedColumnsView.getView().findRowIndex(target);
                var r = selectedColumnsView.getStore().getAt(rowIndex);*/
                Ext.Msg.alert('Drop gesture', 'Dropped Record id ' + data.draggedRecord.id +
                    ' on Record id ' + r.id);
                return true;
            }

        })
    }
});