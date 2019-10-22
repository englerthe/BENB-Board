export interface IUser {
    firstname:string;
    lastname:string;
    username:string;
    password:string;
    email: string;
}


export interface ILogin{
    errorMessage:string;
}


export interface IUI {
    counter: number;
    loggedIn: boolean;
    waitingForResponse: boolean;
    Login: ILogin;
}

export interface IAdvertiseData {
    _id: string;
    advertise_type: string;
    advertise_category: [];
    advertise_description: string;
    advertise_price: string;
    advertise_pictureUrl: string;
    advertise_owner: string;
    advertise_comment: string;
    advertise_counter: number;
    advertise_status: string;
    advertise_message: string;
    advertise_city: string;
  }


export interface IBM{
    user:IUser;
    advertises:IAdvertiseData[]
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
        Login: {errorMessage:""}
    },
	BM: {
        user:{
            firstname:"",
            lastname:"",
            username:"",
            password:"",
            email: ""
        },
        advertises:[]
	}
};
