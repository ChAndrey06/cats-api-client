import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { delay, Observable, of } from 'rxjs';
import { CatInterface } from '../types';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // readonly apiUrl = 'https://api.thecatapi.com/v1';
  // readonly apiKey = 'live_E4Du8YVgj2pF181db6CzXwnPqVEbA5qQxCjKXxjzYtfGvHgL6aEU1OQpenJuyFme';

  // headers = new HttpHeaders({ 'x-api-key': this.apiKey });

  // constructor(private http: HttpClient) { }

  // searchCats(params: any): Observable<any> {
  //   return this.http.get(`${this.apiUrl}/search`, { 'headers': this.headers, 'params': params });
  // }

  getCats(): Observable<CatInterface[]> {
    const cats = [
      { url: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg', description: '1' },
      { url: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Cat_August_2010-4.jpg', description: '3' },
      { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg', description: '4' },
      { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Calico_tabby_cat_-_Savannah.jpg/1200px-Calico_tabby_cat_-_Savannah.jpg', description: '2' },
      { url: 'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403', description: '4' },
      { url: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Cat_November_2010-1a.jpg', description: '1' },
      { url: 'https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg', description: '3' },
      { url: 'https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=ZhplzyJ9', description: '3' },
      { url: 'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png', description: '2' },
      { url: 'https://cdn.britannica.com/91/181391-050-1DA18304/cat-toes-paw-number-paws-tiger-tabby.jpg', description: '4' },
      { url: 'https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg', description: '4' },
      { url: 'https://image.petmd.com/files/styles/863x625/public/orange-tabby-kitten-walking-across-floor.jpg', description: '4' },
      { url: 'https://media.wired.co.uk/photos/60c8730fa81eb7f50b44037e/16:9/w_2560%2Cc_limit/1521-WIRED-Cat.jpeg', description: '4' },
      { url: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', description: '4' },
      { url: 'https://media.newyorker.com/photos/5dfab39dde5fcf00086aec77/1:1/w_1706,h_1706,c_limit/Lane-Cats.jpg', description: '4' },
      { url: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg', description: '1' },
      { url: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Cat_August_2010-4.jpg', description: '3' },
      { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg', description: '4' },
      { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Calico_tabby_cat_-_Savannah.jpg/1200px-Calico_tabby_cat_-_Savannah.jpg', description: '2' },
      { url: 'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403', description: '4' },
      { url: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Cat_November_2010-1a.jpg', description: '1' },
      { url: 'https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg', description: '3' },
      { url: 'https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=ZhplzyJ9', description: '3' },
      { url: 'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png', description: '2' },
      { url: 'https://cdn.britannica.com/91/181391-050-1DA18304/cat-toes-paw-number-paws-tiger-tabby.jpg', description: '4' },
      { url: 'https://cdn.britannica.com/91/181391-050-1DA18304/cat-toes-paw-number-paws-tiger-tabby.jpg', description: '4' },
      { url: 'https://cdn.britannica.com/91/181391-050-1DA18304/cat-toes-paw-number-paws-tiger-tabby.jpg', description: '4' },
      { url: 'https://cdn.britannica.com/91/181391-050-1DA18304/cat-toes-paw-number-paws-tiger-tabby.jpg', description: '4' },
      { url: 'https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg', description: '4' }
    ];

    return of(cats).pipe(delay(2000));
  }
}
