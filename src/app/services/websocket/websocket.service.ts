import {EventEmitter, Injectable} from '@angular/core';
import {HubConnection, HubConnectionBuilder, HttpTransportType, LogLevel, IHttpConnectionOptions} from '@aspnet/signalr';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../../user-store/user.service';
import {environmentUrl} from '../../../environments/environment';
import {MessageModel} from '../../models/message-model';
import {ChatModel} from '../../models/chat-model';

@Injectable()
export class WebsocketService {


    private hubConnection: HubConnection;
    public onMessageReceived = new EventEmitter<MessageModel>();
    public onChatReceived = new EventEmitter<ChatModel>();

    constructor(
        private http: HttpClient,
        private userStore: UserService
    ) {}

    public connect() {
        const socketUrl = `${environmentUrl.url}/`;

        const options = {
            accessTokenFactory: this.userStore.getAuthToken(),
            transport: 1,
            skipNegotiation: true
        };

        this.hubConnection = new HubConnectionBuilder()
            .withUrl(socketUrl)
            .configureLogging(LogLevel.Information)
            .build();

        this.hubConnection.on('message',
            (data: any) => this.processMessage(data));

        this.hubConnection.on('chat',
            (data: any) => this.processChat(data));

        this.hubConnection
            .start()
            .then(() => {
                console.log('connected to socket');
            })
            .catch((e) => {
                console.log('error connecting to socket', e);
            });

    }

    private processChat(data: any) {
        if (data) {
            this.onChatReceived.emit(new ChatModel().deserialize(data));
        }
    }

    private processMessage(data: any) {
        if (data) {
            this.onMessageReceived.emit(new MessageModel().deserialize(data));
        }
    }
}
