export default {
	MENU: [
        
      

        {
            icon: 'mdi-view-dashboard',
            text: 'admin',
            children: [
                {
                    to: '/admin/dashboard',
                    icon: 'mdi-view-dashboard',
                    text: 'dashboard'
                },
                {
                    to: '/admin/client',
                    icon: 'mdi-worker',
                    text: 'client'
                },  
            ]
        },

        /*{
            to: '/admin/mantainance',
            icon: 'mdi-worker',
            text: 'earnings',
            children: [
                {
                    to: '/admin/payments',
                    icon: 'mdi-arrow-up-bold-circle',
                    text: 'department',
                    children: [
                        {
                            to: '/admin/earnings2',
                            icon: 'mdi-worker',
                            text: 'department',   
                        }                        
                    ]
                }
            ]
        },  */     

    ]
}
