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

        Ext.apply(me, {
            items: [
                me.buildAvailableColumns(),
                me.buildSelectedColumns()
            ]
        });

        me.callParent(arguments);
    },

    getSelectedColumns: function () {
        var selectedColumnsIds = App.LocalStorageTools.getSelectedColumnsFromLocalStorage();

        if (selectedColumnsIds.length) {
            return Ext.getStore('AllColumnsStore').getRange().filter(function (i) {
                return selectedColumnsIds.includes(i.get('id'));
            }).map(r => r.getData());
            // refactor to reduce
        }

        return [];

        // return Ext.getStore('AllColumnsStore').getRange().reduce();
    },

    buildAvailableColumns: function () {
        return {
            xtype: 'container',
            flex: 1,
            padding: 10,
            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'component',
                    html: 'Avalaible',
                    cls: 'list-title'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Search',
                    id: 'searchField'
                },
                {
                    xtype: 'columnList',
                    flex: 1,
                    itemId: 'avaliableColumns',
                    store: Ext.create('Ext.data.Store', {
                        storeId: 'AvailableStore',
                        searchQuery: "",
                        model: 'tableWieveExtJs.model.ColumnModel',
                        data: Ext.getStore('AllColumnsStore').getRange().map(record => record.getData()),
                        filters: [
                            Ext.create('Ext.util.Filter', {
                                filterFn: function (record) {
                                    return !Ext.getStore('SelectedStore').getRange().some(function (selectedRecord) {
                                        return selectedRecord.get('id') === record.get('id');
                                    });
                                }
                            }),
                            Ext.create('Ext.util.Filter', {
                                filterFn: function (record) {
                                    var searchQuery = record.store.searchQuery;
                                    return searchQuery ? record.get('name').includes(searchQuery) : true;
                                }
                            })
                        ],
                        updateSearchFilterQuery: function (queryString) {
                            this.searchQuery = queryString;
                            this.filter();
                        }
                    }),
                    cls: 'list-container',
                    tpl: Ext.create('tableWieveExtJs.templates.ListTpl', {
                        actionButton: '<div class="button-container"><button class="add-button">+</button></div>'
                    })
                }
            ]
        };
    },
    
    buildSelectedColumns: function () {
        var me = this;

        return {
            xtype: 'container',
            flex: 1,
            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'stretch'
            },
            padding: 10,
            items: [
                {
                    xtype: 'component',
                    html: 'Selected',
                    cls: 'list-title',
                    margin: '0 0 27 0'
                },
                {
                    xtype: 'columnList',
                    flex: 1,
                    itemId: 'selectedColumns',
                    store: Ext.create('Ext.data.Store', {
                        storeId: 'SelectedStore',
                        model: 'tableWieveExtJs.model.ColumnModel',
                        data: me.getSelectedColumns()
                    }),
                    autoScroll: true,
                    tpl: Ext.create('tableWieveExtJs.templates.ListTpl', {
                        actionButton: '<div class="button-container"><div class="remove-button">x</div></div>'
                    }),
                    cls: 'list-container'
                }
            ]
        };
    }
});