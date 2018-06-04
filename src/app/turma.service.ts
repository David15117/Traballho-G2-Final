import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Disciplina} from './disciplina.model';

@Injectable()
export class TurmaService {
    API_URL = 'http://localhost:3000';

    constructor(private http: HttpClient) {
    }

    listar() {
        return this.http.get<any[]>(this.API_URL + '/turmas');
    }
    criar(turma: any) {
        return this.http.post(this.API_URL + '/turmas', turma);
    }
}
