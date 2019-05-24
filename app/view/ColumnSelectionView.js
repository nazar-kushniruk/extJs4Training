Ext.define('tableWieveExtJs.view.ColumnSelectionView', {
    extend: 'Ext.container.Container',
    alias: 'widget.columnselectionview',
    layout: {
        type: 'hbox',
        pack: 'start',
        align: 'stretch'
    },

    initComponent: function () {
        var me = this;
        this.items = [
            {
                xtype: 'container',
                padding: 10,
                items: [
                    {
                        xtype: 'component',
                        html: 'Avalaible',
                        cls: 'list-title'
                    },
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Search',
                        id: 'searchField',
                        width: 250
                    },

                    {
                        xtype: 'columnList',
                        itemId: 'avaliableColumns',
                        store: Ext.create('Ext.data.Store', {
                            storeId: 'AvailableStore',
                            selectedItems: [],
                            searchQuery: "",
                            model: 'tableWieveExtJs.model.ColumnModel',
                            data: Ext.getStore('AllColumnsStore').getRange().map(record=>record.getData()),
                            filters: [
                                Ext.create('Ext.util.Filter', {
                                    filterFn: function (record) {
                                        return !Ext.getStore('SelectedStore').getRange().some(function(selectedRecord){
                                            return selectedRecord.get('id') === record.get('id');
                                        });
                                    }
                                }),
                                Ext.create('Ext.util.Filter', {
                                    filterFn: function (record) {
                                        var store = record.store,
                                            searchQuery = store.searchQuery;
                                        console.log('AvailableColumnsStore from filter record.store,', record.store);
                                        /*  console.log('AvailableColumnsStore Filter2 record', record);*/
                                        return searchQuery ? record.get('name').includes(searchQuery) : true;
                                    }
                                })

                            ]

                        }),
                        cls: 'list-container',

                        tpl: Ext.create('tableWieveExtJs.templates.ListTpl', {
                            button: '<div class="button-container"><div class="add-button">+</div></div>'
                        })
                    }
                ]
            },
            {
                xtype: 'container',
                padding: 10,
                items: [
                    {
                        xtype: 'component',
                        html: 'Selected',
                        cls: 'list-title'
                    },
                    {
                        xtype: 'columnList',
                        itemId: 'selectedColumns',
                        store: Ext.create('Ext.data.Store', {
                            storeId: 'SelectedStore',
                            model: 'tableWieveExtJs.model.ColumnModel',
                            data: me.getSelectedColumns(),
                            filters: me.getAvStoreFilters(false)
                        }),
                        height: 527,
                        tpl: Ext.create('tableWieveExtJs.templates.ListTpl', {
                            button: '<div class="button-container"><div class="remove-button">x</div></div>'
                        }),
                        cls: 'list-container'
                    }
                ]
            }

        ];
        this.callParent(arguments);

    },

    a: function () {
        var data = Ext.getStore('AllColumnsStore').getRange().map(a => a.getData());
        return data;
    },

    getAvStoreFilters: function (toggle) {
        return [
            Ext.create('Ext.util.Filter', {
                filterFn: function (record) {
                    console.log('filter1');
                    return toggle ? !Ext.getStore('SelectedStore').getRange().map(function (record) {
                        return record.get('id');
                    }).includes(record.get('id')) : !Ext.getStore('AvailableStore').getRange().map(function (record) {
                        return record.get('id');
                    }).includes(record.get('id'));
                }
            })
        ];
    },

    getSelectedColumns: function () {
        var selectedColumns = localStorage.getItem('selectedColumns').split(',').map(i => +i);
        if (selectedColumns) {
            return Ext.getStore('AllColumnsStore').getRange().filter(function (i) {
                console.log(i.get('id'), selectedColumns.includes(i.get('id')));
                return selectedColumns.includes(i.get('id'));
            }).map(r=>r.getData());
        }

        return  [];
    },

    getAvalaibleColumns: function () {
        var selectedColumns = localStorage.getItem('selectedColumns').split(',').map(i => +i);
        if (selectedColumns) {
            return Ext.getStore('AllColumnsStore').getRange().filter(function (i) {
                console.log(i.get('id'), selectedColumns.includes(i.get('id')));
                return !selectedColumns.includes(i.get('id'))
            }).map(record=>record.getData())
        }
    },


     //to-do
    // z : function(){
    //
    //     var data =  Ext.getStore('AllColumnsStore').getRange().map(r=>r.getData());
    //
    //
    //     return {
    //         selected: [],
    //         available: []
    //     };
    // }


});