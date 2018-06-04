import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Disciplina} from './disciplina.model';

@Injectable()
export class ProfessorService {
    API_URL = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

    listar() {
        return this.http.get<any[]>(this.API_URL + '/Professores');
    }
    criar(professor: any) {
        return this.http.post(this.API_URL + '/Professores', professor);
    }
}
