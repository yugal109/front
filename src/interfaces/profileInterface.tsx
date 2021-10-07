export interface finalProfileInterface{
  id: string;
  fullname: string;
  username: string;
  accountType: string;
  email: string;
  image: string;
  password?: string;
  token:string

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

export interface profileInterface {
    loading:boolean,
    error?:string,
    profileDetail:profileDetailInterface,
    status:string,
    statusloading?:boolean,
    editLoading?:boolean,
    open?:boolean,
   
  }

  export interface profileActionInterface{
      type:string,
      payload?:object
  }

