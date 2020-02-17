import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MessageService} from '../../services/message/message.service';
import {MessageModel} from '../../models/message-model';
import {WebsocketService} from '../../services/websocket/websocket.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {

  private page = 1;
  private chatId: number;
  private messages: MessageModel[];

  constructor(
      private activatedRoute: ActivatedRoute,
      private messageService: MessageService,
      private websocketService: WebsocketService,
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: any) => {
        console.log(params);
        if (params.chatId) {
            this.chatId = params.chatId;
            console.log(params);
        }
    });

    this.messageService.getMessages(this.chatId, this.page).subscribe((messages: MessageModel[]) => {
        this.messages = messages;
    });

    this.websocketService.onMessageReceived.subscribe((message) => {
      this.messages.push(message);
    });
  }

}
