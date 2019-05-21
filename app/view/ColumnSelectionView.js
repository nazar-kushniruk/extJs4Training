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
                        store: "AvailableColumnsStore",
                        // getSearchFilterFn: function(record){
                        //     return record.get('name') !== 'name';
                        // },
                        /* store: Ext.create('Ext.data.Store', {
                             storeId: 'Z',
                             selectedItems: [],
                             model: 'tableWieveExtJs.model.ColumnModel',
                             data: me.a(),
                             filters: me.getAvStoreFilters()
                         }),*/
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
                        store: 'SelectedColumnsStore',
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

    getAvStoreFilters: function () {
        return [
            Ext.create('Ext.util.Filter', {
                filterFn: function (record) {
                    console.log('filter1');
                    return !Ext.getStore('SelectedColumnsStore').getRange().map(function (record) {
                        return record.get('id');
                    }).includes(record.get('id'));
                }
            }),

            // Ext.create('Ext.util.Filter', {
            //     filterFn: function (record) {
            //         console.log('filter query');
            //         return record.get('name').includes('name');
            //     }
            // })
        ];
    }

});