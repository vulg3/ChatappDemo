import { Message } from "./message";
import { User } from "./user";

export interface Room {
    roomID: string;
    title: string;
    messages: Message[];
    owner: User[];
    members: User[];
    imgMess:string;
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

export interface addMemberToRoomDto {
    roomID: string;
    memberID: string; 
}

export interface deleteMemberToRoomDto {
    roomID: string;
    memberID: string; 
}

