/**
* The initial values for the vuex state.
*/
export default {
	grid_headers: [
		{
			sortable: true,
			text: 'name',
			value: 'name'
		},
		{
			sortable: true,
			text: 'record_status',
			value: 'is_active_description',
			align: 'center'
        },
        {
			text: 'actions',
			value: 'actions',		
            align: 'right',
            sortable: false
		}        
    ],

    form: {
        id: 0,
        name: '',
        identification: '',
        sex: '',
        address: '',
        photo_url: '',
    }
};
