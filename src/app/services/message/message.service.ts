import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {MessageModel} from '../../models/message-model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {environmentUrl} from '../../../environments/environment';
import {UserService} from '../../user-store/user.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(
      private http: HttpClient,
      private userService: UserService,
  ) { }

    getMessages(roomId: number, page: number): Observable<MessageModel[]> {
    const requestHeaders = new HttpHeaders();
    requestHeaders.append('token', this.userService.getAuthToken());
    requestHeaders.append('room_id', roomId.toString());
    requestHeaders.append('page', page.toString());
    return this.http.get(environmentUrl.url + '', {headers: requestHeaders})
        .pipe(
            map((response: any) => {
              if (response && response.status) {
                  if (response.data && response.data.chat_room_history && response.data.chat_room_history.length) {
                      return response.data.chat_room_history.map(ch => new MessageModel().deserialize(ch));
                  }
              } else {
                return [];
              }
            })
        );
    }
}
