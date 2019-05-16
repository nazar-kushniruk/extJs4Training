Ext.define('tableWieveExtJs.Constants', {
  /*  requires: [
        'tableWieveExtJs.Functions'
    ],*/

    singleton: true,
    DEFAULT_COLUMNS: ['name', 'email'],
    ALL_COLUMNS : ["id",  "name",  "username",  "email",  "phone", "website"]
   /* ALL_COLUMNS:  Ext.Ajax.request({
        url: 'data/users.json',

        success: function (response) {
            console.log(response.responseText);
            return response.responseText;
            // process server response here
            //console.log(text);

        }
    }),*/

});