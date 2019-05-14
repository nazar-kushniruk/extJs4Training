Ext.define('tableWieveExtJs.model.TableModel', {
    extend	: 'Ext.data.Model',
  // idProperty: 'id',
    fields: ['name', 'email','username', 'phone','website']
   /* fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'name',
        type: 'string'
    }, {
        name: 'username',
        type: 'string'
    }, {
        name: 'phone',
        type: 'string'
    }, {
        name: 'email',
        type: 'string'
    }, {
        name: 'website',
        type: 'string'
    }],
    proxy: {
        type: 'ajax',
        url : 'users.json',
        reader: {type: 'json'}
    }*/
});





