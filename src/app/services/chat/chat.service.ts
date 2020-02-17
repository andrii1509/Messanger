import { Injectable } from '@angular/core';
import {ChatModel} from '../../models/chat-model';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {environmentUrl} from '../../../environments/environment';
import {UserService} from '../../user-store/user.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
      private http: HttpClient,
      private userService: UserService,
  ) { }

    getChats(page: number): Observable<ChatModel[]> {
        const requestHeaders = new HttpHeaders();
        requestHeaders.append('token', this.userService.getAuthToken());
        requestHeaders.append('page', page.toString());
        return this.http.get(environmentUrl.url + '', {headers: requestHeaders})
            .pipe(
                map((response: any) => {
                    if (response && response.status) {
                        if (response.data && response.data.chat_rooms && response.data.chat_rooms.length) {
                            return response.data.chat_rooms.map(cr => new ChatModel().deserialize(cr));
                        }
                    } else {
                        return [];
                    }
                })
            );
    }
}
