import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChefService {

  chefUrl = 'http://localhost:3000/api/chefs';

  constructor(private httpClient: HttpClient) { }

  httpSendRequestToGetAllChefs()
  {
    return this.httpClient.get<{chefs: any , message: string}>(this.chefUrl);
  }
  httpSendRequestToAddChef(obj:any, img:File)
  {
    console.log('here into service img: ', img);
    console.log('here into service obj: ', obj);
    
    let formData = new FormData();
    formData.append('name',obj.name);
    formData.append('speciality',obj.speciality);
    formData.append('experience',obj.experience);
    formData.append('img',img);
    return this.httpClient.post<{message: string}>(this.chefUrl, formData);
  }
  httpSendRequestToDeleteChef(id:number)
  {
    return this.httpClient.delete<{message: string}>(`${this.chefUrl}/${id}`);
  }

  httpSendRequestToGetChefById(id:number)
  {
    return this.httpClient.get<{chef: any , message: string}>(`${this.chefUrl}/${id}`);
  }

  httpSendRequestToEditChef(obj: any)
  {
    return this.httpClient.put(`${this.chefUrl}/${obj._id}`,obj);
  }

  httpSendRequestToSearchChefByName(obj: any)
  {
    //return this.httpClient.post<{allPlats: any}>(`${this.platUrl}/search`, obj);
    return this.httpClient.post<{allChefs: any}>(`${this.chefUrl}/search`,obj);
  }
}
