export interface IUser {
    _id?: string;
    firstname:string;
    lastname:string;
    username:string;
    password:string;
    email: string;
}

export interface ICommentData {
    _id?: string;
    comment_user: string;
    comment_text: string;
  }


export interface ILogin{
    errorMessage:string;
}
export interface IRegister{
    errorMessage:string;
}

export interface IUI {
    counter: number;
    loggedIn: boolean;
    waitingForResponse: boolean;
    Login: ILogin;
    Register: IRegister;
    searchcategory: string;
}

export interface IAdvertiseData {
    _id: string;
    advertise_title: string;
    advertise_type: string;
    advertise_category: string;
    advertise_description: string;
    advertise_price: string;
    advertise_pictureUrl: string;
    advertise_owner?: string;
    advertise_comment?: string;
    advertise_counter: number;
    advertise_status: string;
    advertise_message?: string;
    advertise_city: string;
  }



export interface IBM{
    user:IUser;
    advertises:IAdvertiseData[];
    comment: ICommentData;
}


export interface IState{
    UI:IUI;
    BM:IBM;
}

// initial state 
export const initial:IState = {
	UI: {
		counter: 0,
		loggedIn: false,
        waitingForResponse: false,
        Login: {errorMessage:""},
        Register: {errorMessage:""},
        //searchcategory: "clothes & fashion"
        searchcategory: ""
    },
	BM: {
        user:{
            firstname:"",
            lastname:"",
            username:"",
            password:"",
            email: ""
        },
        advertises:[],
        comment:{
            comment_user: "",
            comment_text: ""
        }
	}
};
