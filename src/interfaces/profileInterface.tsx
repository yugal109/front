export interface profileInterface {
    loading:boolean,
    error?:string,
    profileDetail:{
        id: string;
        fullname: string;
        username: string;
        accountType: string;
        email: string;
        image: string;
        password?: string;

    },
    status:string,
    statusloading?:boolean,
    editLoading?:boolean,
    open?:boolean,
   
  }

  export interface profileActionInterface{
      type:string,
      payload?:object
  }

  export interface profileDetailInterface{
    id: string;
    fullname: string;
    username: string;
    accountType: string;
    email: string;
    image: string;
    password?: string;

  }