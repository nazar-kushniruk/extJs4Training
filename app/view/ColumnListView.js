Ext.define('tableWieveExtJs.view.ColumnListView', {
        extend: 'Ext.view.View',
        alias: 'widget.columnList',
        width: 250,
        height: 500,
        xtype: 'dataview',
        itemSelector: 'div.list-item',
        emptyText: 'No images available',
        initComponent: function(){
            var me = this;

            Ext.apply(me, {
                tpl : new Ext.XTemplate(
                    '<tpl for=".">',
                    '<div class="list-item" style="padding: 10px; border: 1px solid black; background-color: white; cursor: pointer" >',
                    '{[this.getListSubTemplate(values)]}',
                    '</div>',
                    '</tpl>',{
                        getListSubTemplate: function (values){
                            return me.listTemplate && me.listTemplate.apply(values) ;
                        }
                    }
                )
            });

            me.callParent(arguments);
        }
    }
);

