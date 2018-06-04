import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {ListaDeDisciplinasComponent} from './lista-de-disciplinas/lista-de-disciplinas.component';
import {EditorDeDisciplinaComponent} from './editor-de-disciplina/editor-de-disciplina.component';
import {DisciplinasService} from './disciplinas.service';
import {HttpClientModule} from '@angular/common/http';
import { ListaDeTurmasComponent } from './lista-de-turmas/lista-de-turmas.component';
import {TurmaService} from './turma.service';
import { ListaDeProfessorComponent } from './lista-de-professor/lista-de-professor.component';
import {ProfessorService} from './professor.service';
import { ListaDeAlunosComponent } from './lista-de-alunos/lista-de-alunos.component';
import {AlunoService} from './aluno.service';

@NgModule({
  declarations: [
    AppComponent,
    ListaDeDisciplinasComponent,
    EditorDeDisciplinaComponent,
    ListaDeTurmasComponent,
    ListaDeProfessorComponent,
    ListaDeAlunosComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DisciplinasService, TurmaService, ProfessorService,AlunoService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
