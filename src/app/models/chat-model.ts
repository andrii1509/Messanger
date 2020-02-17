export class ChatModel {

    room_id: number;
    contact_name: string;
    room_pic: string;
    assigned_operator: string;
    messenger: string;
    last_message: string;
    last_update: string;
    is_readed: boolean;

    deserialize(input: any): ChatModel {
        return Object.assign(new ChatModel(), input);
    }
}
