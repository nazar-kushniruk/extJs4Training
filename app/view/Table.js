Ext.define('tableWieveExtJs.view.Table', {
    alias: ['widget.mytable'],
    extend: 'Ext.grid.Panel',
    title: 'Users',
    store: 'TableStore',



   /* store: Ext.create('Ext.data.Store', {
        storeId:'simpsonsStore',
        fields:['name', 'email', 'phone'],
        data:{'items':[
                { 'name': 'Lisa',  "email":"lisa@simpsons.com",  "phone":"555-111-1224"  },
                { 'name': 'Bart',  "email":"bart@simpsons.com",  "phone":"555-222-1234" },
                { 'name': 'Homer', "email":"homer@simpsons.com",  "phone":"555-222-1244"  },
                { 'name': 'Marge', "email":"marge@simpsons.com", "phone":"555-222-1254"  }
            ]},
        proxy: {
            type: 'memory',
            reader: {
                type: 'json',
                root: 'items'
            }
        }
    }),*/
    columns: [
        { text: 'Id',  dataIndex: 'id',  flex: 1 },
        { text: 'Name',  dataIndex: 'name',  flex: 1 },
        { text: 'UserName',  dataIndex: 'username',  flex: 1 },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 },
        { text: 'Website', dataIndex: 'website', flex: 1 },

    ],
})