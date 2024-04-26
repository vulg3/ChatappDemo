import { AddMessageDto, Message } from "./message";

export interface ServerToClientEvents {
    message: (data: Message) => void;
    isTyping: (name: string) => void;
}

export interface ClientToServerEvents {
    message: (data: AddMessageDto) => void;
    join: (roomId: number) => void;
    leave: (roomId: number) => void;
    isTyping: (roomId: number) => void;
}
