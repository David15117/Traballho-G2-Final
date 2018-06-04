import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProfessorService} from '../professor.service';
import {Disciplina} from '../disciplina.model';
import {FormGroup} from '@angular/forms';


@Component({
  selector: 'app-lista-de-professor',
  templateUrl: './lista-de-professor.component.html',
  styleUrls: ['./lista-de-professor.component.css']
})
export class ListaDeProfessorComponent implements OnInit {
    professores: Array<any>;
    professor: any;

  constructor(private professorService: ProfessorService) { }

  ngOnInit() {
      this.professor = {};

      this.professorService.listar()
          .subscribe(resposta => this.professores = resposta);
      this.listar();
      console.log(this.professores);
  }
    listar(){
      this.professorService.listar().subscribe(dados => this.professores = dados);
    }
    criar(frm: FormGroup) {
        this.professorService.criar(this.professor).subscribe(resposta => {
            this.professores.push(resposta);

            frm.reset();
        });
    }

}
