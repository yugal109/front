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
  notifications: notiInterface[],
  error?: string;
}

export interface notificationActionInterface {
  type: string;
  payload?: object;
}
