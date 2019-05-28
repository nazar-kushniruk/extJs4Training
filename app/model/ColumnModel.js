Ext.define('tableWieveExtJs.model.ColumnModel', {
    extend: 'Ext.data.Model',
    idProperty: 'uid',
    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'name',
            type: 'string'
        },
        {
            name: 'uid',
            type: 'int'
        }
    ],
    idgen: 'sequential'
});
