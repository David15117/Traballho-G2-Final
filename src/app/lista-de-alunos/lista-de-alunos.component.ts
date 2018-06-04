import { Component, OnInit } from '@angular/core';
import {ProfessorService} from '../professor.service';
import {AlunoService} from '../aluno.service';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-lista-de-alunos',
  templateUrl: './lista-de-alunos.component.html',
  styleUrls: ['./lista-de-alunos.component.css']
})
export class ListaDeAlunosComponent implements OnInit {
    alunos: Array<any>;
    aluno: any;
  constructor(private alunoService: AlunoService) { }

  ngOnInit() {
      this.aluno = {};

      this.alunoService.listar()
          .subscribe(resposta => this.alunos = resposta);
      this.listar();
  }
    listar(){
        this.alunoService.listar().subscribe(dados => this.alunos = dados);
    }
    criar(frm: FormGroup) {
        this.alunoService.criar(this.aluno).subscribe(resposta => {
            this.alunos.push(resposta);

            frm.reset();
        });
    }
}
