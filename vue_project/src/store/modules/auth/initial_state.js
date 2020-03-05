/**
* The initial values for the vuex state.
*/
export default {
	users_grid_row_header: [
		{
			sortable: true,
			text: 'name',
			value: 'name'
		},
		{
			sortable: true,
			text: 'last_access_grid',
			value: 'last_access'
		},
		{
			sortable: true,
			text: 'is_active',
			value: 'is_active',
			align: 'center'
        },
        {
			text: 'actions',
			value: 'actions',		
            align: 'right',
            sortable: false
		}        
	]
};
