Ext.define('tableWieveExtJs.model.ColumnModel', {
    extend: 'Ext.data.Model',
    idProperty: 'uid',
    fields: [{name: 'id' },
             {name: 'name'},
             {name: 'uid'}],
    idgen: 'sequential'

});
