import { Component, OnInit } from '@angular/core';
import {TurmaService} from '../turma.service';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-lista-de-turmas',
  templateUrl: './lista-de-turmas.component.html',
  styleUrls: ['./lista-de-turmas.component.css']
})
export class ListaDeTurmasComponent implements OnInit {
    turmas: Array<any>;
    turma: any;

    constructor(private turmaService: TurmaService) {
    }

    ngOnInit() {
        this.turma = {};
        this.turmaService.listar().subscribe(resposta => this.turmas = resposta);
        this.listar();
    }

    listar() {
        this.turmaService.listar().subscribe(dados => this.turmas = dados);
    }

    criar(frm: FormGroup) {
        this.turmaService.criar(this.turma).subscribe(resposta => {
            this.turmas.push(resposta);

            frm.reset();
        });

    }
}
