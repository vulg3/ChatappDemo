
export interface Message {
    messID: string;
    content: string;
    senderName: string;
    sentTime: Date;
    isSeen: boolean;
}

export interface AddMessageDto {
    content: string;
    roomId: string;
}

export interface DeleteMessageDto {
    messID: string;
    roomId: string;
}
