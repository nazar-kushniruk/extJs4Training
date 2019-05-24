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
                beforerender: function(){
                    Ext.getStore('AvailableStore').filter();
                },
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
        console.log(' availableColumnsStore.searchQuery',  availableColumnsStore.searchQuery);
        availableColumnsStore.filter();

    }
});