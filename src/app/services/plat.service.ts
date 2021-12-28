import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlatService {
  platUrl = 'http://localhost:3000/api/plats';
  constructor(private httpClient: HttpClient) { }

  httpSendRequestToGetAllPlats()
  {
    return this.httpClient.get<{message: string, plats: any}>(this.platUrl);
  }

  httpSendRequestToDeletePlat(id:any)
  {
    return this.httpClient.delete<{message: string}>(`${this.platUrl}/${id}`);
  }

  httpSendRequestToAddPlat(obj:any)
  {
    return this.httpClient.post<{message: string}>(this.platUrl,obj);
  }

  httpSendRequestToGetPlatById(id: any)
  {
    return this.httpClient.get<{message: string, plat: any}>(`${this.platUrl}/${id}`);
  }

  httpSendRequestToEditPlat(obj: any){
    return this.httpClient.put<{message: string}>(`${this.platUrl}/${obj._id}`,obj);
  }

  httpSendRequestToGetPlatByName(obj: any){
    return this.httpClient.post<{allPlats: any}>(`${this.platUrl}/search`, obj);
  }


}
