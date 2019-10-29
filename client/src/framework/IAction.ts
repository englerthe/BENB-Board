export enum ActionType {
    INIT = "@@INIT",
    login_error = "login_error",
    register_error = "register_error",
    user_logged_in = "user_logged_in",
    user_logged_out = "user_logged_out",
    update_user = "update_user",
    user_created = "user_created",
    user_exists = "user_exists",
    create_advertise = "create_advertise",
    update_advertise = "update_advertise",
    delete_advertise = "delete_advertise",
    render_test = "render_test",
    server_called = "server_called",
    advertise_updated = "advertise_updated",
    add_comment = "add_comment",
    add_advertises_from_server = "add_advertises_from_server",
    update_searchcategory= "update_searchcategory",
    clear_searchcategory="clear_searchcategory",
    update_searchbar= "update_searchbar"
}
export interface IAction {
    type: ActionType;
}
