import { Component}     from '@angular/core';
import { HttpClient  }  from '@angular/common/http';
import { Observable }   from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // VARS -------------------------------------
  private path:       string;
  public  pedidoList: any;




  // ACTIONS ----------------------------------
  /**
   * Set JSON to pedidoList
   * @memberof AppComponent
   */
  public print(): void {
    this.query().subscribe(data => {
      this.pedidoList = data.relatorio;
    }, error => {
      console.log('Erro', error);
    });
  }

  /**
   * Clear pedidoList
   * @memberof AppComponent
   */
  public clear(): void {
    this.pedidoList = null;
  }




  // HTTP ------------------------------------
  /**
   * Returns a list of the resource.
   * @returns {Observable<any>}
   */
  public query(): Observable<any> {
    return this.http.get(this.path, {});
  }




  // OTHERS ----------------------------------
  /**
   * Creates an instance of AppComponent.
   * @param {HttpClient} http
   * @memberof AppComponent
   */
  constructor(private http: HttpClient) {
    this.path = `./assets/relatorio.json`;
  }
}
