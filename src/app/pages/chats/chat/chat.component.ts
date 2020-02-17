import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ChatModel} from '../../../models/chat-model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {

  constructor(
      private router: Router
  ) { }

  @Input() chat: ChatModel;


  ngOnInit() {}

  redirect() {
    this.router.navigate(['messages'], {queryParams: {chatId: this.chat.room_id || 1}}).then();
  }
}
