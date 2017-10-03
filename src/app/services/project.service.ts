import {Inject, Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Project} from '../domain/project.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ProjectService {

  private readonly domain = 'projects';
  public headers = new Headers({
    'Content-Type': 'application/json',
  });

  constructor(private http: Http, @Inject('BASE_CONFIG') private config) {
  }

  // post
  add(project: Project): Observable<Project> {
    project.id = null;
    const uri = this.config.uri + this.domain;
    return this.http
      .post(uri, JSON.stringify(project), {headers: this.headers})
      .map(res => res.json());
  }

  // patch
  update(project: Project): Observable<Project> {
    const uri = this.config.uri + this.domain + project.id;
    const toUpdate = {
      name: project.name,
      desc: project.desc,
      coverImg: project.coverImg
    };
    return this.http
      .patch(uri, JSON.stringify(toUpdate), {headers: this.headers})
      .map(res => res.json());
  }

  // delete
  delete(project: Project): Observable<Project> {
    const deltask$ = Observable.from(project.taskLists ? project.taskLists : [])
      .mergeMap(listId => this.http
        .delete(this.config.uri + '/taskLists/' + listId))
      .count();
    const uri = this.config.uri + '/' + this.domain + '/' + project.id;
    return deltask$.switchMap(p => this.http
      .delete(uri)
      .map(_ => project));
  }

  // GET /projects
  get(userId: string): Observable<Project[]> {
    const uri = `${this.config.uri}/${this.domain}`;   // 使用键盘左上角的符号，而不是单引号。
    // const uri = this.config.uri + `/` + this.domain;
    return this.http
      .get(uri, {params: {'members_like': userId}, headers: this.headers})
      .map(res => res.json() as Project[]);
  }



}
