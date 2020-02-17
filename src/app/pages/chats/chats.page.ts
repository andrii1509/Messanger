import { Component, OnInit } from '@angular/core';
import {ChatService} from '../../services/chat/chat.service';
import {ChatModel} from '../../models/chat-model';
import {WebsocketService} from '../../services/websocket/websocket.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
})
export class ChatsPage implements OnInit {

    chats: ChatModel[];
    page = 1;

  constructor(
      private chatService: ChatService,
      private websocketService: WebsocketService
  ) { }

  ngOnInit() {
    this.chatService.getChats(this.page).subscribe((chats: ChatModel[]) => {
      this.chats = chats;
    });

    this.websocketService.onChatReceived.subscribe((chat: ChatModel) => {
      this.chats.unshift(chat);
    });
  }

}
