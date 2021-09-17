export interface chatRoomCreateStateInterface{

    loading:boolean,
    error?:string,
    modalLoading:boolean


}
export interface chatRoomActionInterface{
    type:string,
    payload?:object|string

}

export interface chatRoomListStateInterface{
    loading:boolean,
    rooms?:object,
    error?:string
}


export interface chatRoomListActionInterface{
    type:string,
    payload?:object|string
}


export interface chatIndividualList{
    roomType:string,
    _id:string,
    admin:string,
    name:string,
    users:any[]
}

export interface chatRoomMessageInterface{
    messages:any[],
    loading:boolean

}

export interface chatRoomMessageAction{
    type:string,
    payload?:object|any[]|string
}