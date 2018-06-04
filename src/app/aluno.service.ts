import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AlunoService {
    API_URL = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
    listar() {
        return this.http.get<any[]>(this.API_URL + '/alunos');
    }
    criar(professor: any) {
        return this.http.post(this.API_URL + '/alunos', professor);
    }
}
