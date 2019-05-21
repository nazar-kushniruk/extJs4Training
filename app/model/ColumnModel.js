Ext.define('tableWieveExtJs.model.ColumnModel', {
    extend: 'Ext.data.Model',
    fields: [{name: 'id' },
             {name: 'name'}]/*,

    proxy: {
        type: 'localstorage',
        id: 'selected-columns'
    }*/
});
