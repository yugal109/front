export interface userInterface{
  accountType: string;
  isAdmin: boolean | null;
  image: string;
  _id: string;
  fullname: string;
  username: string;
  email: string;
  password?: string;
  friends?: [];

}
export interface notiInterface{
    status: string;
    _id: string;
    requestType: string;
    acceptor: string;
    requestor: {
      accountType: string;
      isAdmin: boolean | null;
      image: string;
      _id: string;
      fullname: string;
      username: string;
      email: string;
      password?: string;
      friends?: [];
    };
    createdAt?: string;
    updatedAt?: string;
}

export interface notificationInterface {
  loading: boolean;
  notifications: notiInterface[];
  error?: string;
  acceptInviteLoading:boolean,
  invitationAccepted:boolean,
  roomId?:string,
  open:boolean,
  notification_length:number

}

export interface notificationActionInterface {
  type: string;
  payload?: object;
}
