Ext.define('tableWieveExtJs.controller.ColumnSelectionController', {
    extend: 'Ext.app.Controller',
    stores: ['TableStore',
        'AllColumnsStore',
        'SelectedColumnsStore',
        'AvailableColumnsStore'],
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
                itemclick: this.availableColumnsClick
            },
            '#searchField' : {
                change: this.searchFieldChange
            }
        });
        /*  var data =   [
              {name: 'id'},
              {name: 'name'},
              {name: 'username'},
              {name: 'email'},
              {name: 'phone'},
              {name: 'viber'}
          ] ;

          data.map(
              function (dataItem) {
                  localStorage.setItem('all-columns', JSON.stringify( dataItem));
              }
          );*/

        var allColumnsLSKeys = localStorage.getItem('all-columns');

        /* var dataToAllColumns =  data.filter(function (dataItem) {
             allColumnsLSKeys.map(function (allColumnsitem) {
                       console.log(localStorage.getItem(allColumnsitem));
                  })
              }
          )*/


        // var selectedColumnsLS = localStorage.getItem('all-columns');
        // console.log("ColumnSelectorController inited", allColumnsLS,selectedColumnsLS )
    },
    selectedColumnsClick: function (thisThis, record, item, index, e) {
        if (e.target.classList.contains('remove-button')) {
            var selectedColumnsStore = Ext.getStore('SelectedColumnsStore'),
                availableColumnsStore = Ext.getStore('AvailableColumnsStore');

            selectedColumnsStore.remove(record);
            availableColumnsStore.filter();
        }

    },

    availableColumnsClick: function (thisThis, record, item, index, e) {
        if (e.target.classList.contains('add-button')) {

            console.log('record-> ', record);
            var selectedColumnsStore = Ext.getStore('SelectedColumnsStore'),
                availableColumnsStore = Ext.getStore('AvailableColumnsStore');
            console.log('availableColumnsClick record',record);
          // delete record.data.uid;
            selectedColumnsStore.add(record.data);
           // selectedColumnsStore.save();

            availableColumnsStore.filter();
        }
    },
    searchFieldChange: function (my, newValue, oldValue) {
        var availableColumnsStore = Ext.getStore('AvailableColumnsStore');
        availableColumnsStore.searchQuery = newValue;
        availableColumnsStore.filter();

    }
});