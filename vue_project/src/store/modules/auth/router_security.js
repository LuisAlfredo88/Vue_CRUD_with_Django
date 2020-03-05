var allowed_menu_options = [];

const checkUserAuth = (to, from, next) => {
    var logged_user = JSON.parse(localStorage.getItem('user')); 
    if(!logged_user && (to.path != '/login' && to.path != '/request'))
        next('/login');
    else
        next();
}

const validateMenu = (element) => {
    return true;
}

const verifyMenu = (options) => {
    options = options.filter(validateMenu);
    options.forEach((e, index, array) => {
        if(e.children){
            array[index].children = verifyMenu(e.children);
        }
    });

    return options;
}

const getUserMenu = (menu_options, allowed_options) => {
    allowed_menu_options = allowed_options;
    verifyMenu(menu_options);
    return menu_options;
}

export default {
    checkUserAuth: checkUserAuth,
    getUserMenu: getUserMenu
}