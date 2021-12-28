import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  pathUrl= 'http://localhost:3000/api/users';

  sendRequestToGetAllUsers()
  {
    return this.httpClient.get(this.pathUrl);
  }

  sendRequesToDeleteUser(id:number)
  {
    return this.httpClient.delete(`${this.pathUrl}/${id}`);
  }

  httpSendRequestToAddUser(obj: any)
  {
    return this.httpClient.post<{code: string}>(this.pathUrl,obj);
  }

  httpSendRequestToLogin(obj: any)
  {
    return this.httpClient.post<{message: string, user: any}>(`${this.pathUrl}/login`,obj);
  }

}
