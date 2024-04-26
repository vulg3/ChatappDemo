import { io, Socket } from "socket.io-client";
import { ClientToServerEvents, ServerToClientEvents } from "../models/event";

import { AddMessageDto } from "../models/message";

class SocketService {
    public readonly socket: Socket<ServerToClientEvents, ClientToServerEvents> = io('http://192.168.1.3:3000/');

    connectWithAuthToken(token: string) {
        try {
            this.socket.auth = { token };
            this.socket.connect();
        } catch (error) {
            console.log('error : ', error);
        }
    }

    disconnect() {
        this.socket.disconnect();
    }

    sendMessage(data: AddMessageDto) {
        this.socket.emit("message", data);
    }

    notifyTyping(roomId: number) {
        this.socket.emit("isTyping", roomId);
    }

    subscribeToMessages(messageHandler: ServerToClientEvents["message"]) {
        this.socket.on("message", messageHandler);
    }

    subscribeToTypingNotifications(
        typingNotificationsHandler: ServerToClientEvents["isTyping"]
    ) {
        this.socket.on("isTyping", typingNotificationsHandler);
    }

    joinRoom(roomId: number) {
        this.socket.emit("join", roomId);
    }

    leaveRoom(roomId: number) {
        this.socket.emit("leave", roomId);
    }
}

export const socketService = new SocketService();
