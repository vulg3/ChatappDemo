import { Message } from "./message";
import { User } from "./user";

export interface IRoom {
    roomID: string;
    title: string;
    messages: Message[];
    owner: User[];
    members: User[];
}

export interface AddRoomDto {
    title: string;
}

export interface UpdateRoomDto {
    roomID: number;
    title?: string;
}

export interface SearchRoomsDto {
    title?: string;
}

export interface addMemberToRoom{

}

export interface deleteMemberToRoom{

}
