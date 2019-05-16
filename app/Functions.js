Ext.define('tableWieveExtJs.Functions', {
    singleton: true,

    getAllColumns: function () {

        Ext.Ajax.request({
            url: 'data/users.json',

            success: function (response) {
                console.log(response.responseText);
                return response.responseText;
                // process server response here
                //console.log(text);

            }
        });

    }

});
