export const NAV_ITEMS = [
    {
        displayName: 'dashboard',
        iconName: 'dashboard',
        route: 'admin/dashboard'
    },
    {
        displayName: 'posts',
        iconName: 'notes',
        children: [
            {
                displayName: 'posts',
                iconName: 'notes',
                route: 'admin/post',
            },
            {
                displayName: 'categories',
                iconName: 'list',
                route: 'admin/category',
            }
        ]
    },
    {
        displayName: 'user traits',
        iconName: 'fingerprint',
        children: [
            {
                displayName: 'education status',
                iconName: 'school',
                route: 'admin/education-status/list',
            }
        ]
    },     
];
