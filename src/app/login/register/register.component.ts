import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
// import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
// import * as fromRoot from '../../reducers';
// import * as actions from '../../actions/auth.action';
import {extractInfo, getAddrByCode, isValidAddr} from '../../utils/identity.util';
import {isValidDate, toDate} from '../../utils/date.util';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  selectedTab = 0;

  form: FormGroup;
  items: string[];
  avatars$: Observable<string[]>;
  private _sub: Subscription;
  private readonly avatarName = 'avatars';


  constructor(private fb: FormBuilder) {
    this.avatars$ = Observable
      .range(1, 16)
      .map(i => `${this.avatarName}:svg-${i}`)
      .reduce((r, x) => [...r, x], []);

  }

  ngOnInit() {

    const img = '${this.avatarName}:svg-${Math.floor(Math.random() * 16).toFixed(0)}';

    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    this.items = nums.map(d => 'avatars:svg-' + d);
    this.form = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.maxLength(20)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.maxLength(20)])],
      repeat: ['', Validators.required],
      avatar: [img],
      dateOfBirth: [''],
      address: ['', Validators.maxLength(80)],
      identity: []
    });
    const id$ = this.form.get('identity').valueChanges
      .debounceTime(300)
      .filter(v => this.form.get('identity').valid);

    this._sub = id$.subscribe(id => {
      const info = extractInfo(id.identityNo);
      if (isValidAddr(info.addrCode)) {
        const addr = getAddrByCode(info.addrCode);
        this.form.patchValue({address: addr});
        this.form.updateValueAndValidity({onlySelf: true, emitEvent: true});
      }
      if (isValidDate(info.dateOfBirth)) {
        const date = info.dateOfBirth;
        this.form.patchValue({dateOfBirth: date});
        this.form.updateValueAndValidity({onlySelf: true, emitEvent: true});
      }
    });


    // this.items = [
    //   'avatars:svg-1',
    //   'avatars:svg-2',
    //   'avatars:svg-3',
    //   'avatars:svg-4',
    //   'avatars:svg-5',
    //   'avatars:svg-6',
    //   'avatars:svg-7',
    //   'avatars:svg-8',
    //   'avatars:svg-9',
    //   'avatars:svg-10',
    //   'avatars:svg-11',
    //   'avatars:svg-12',
    //   'avatars:svg-13',
    //   'avatars:svg-14',
    //   'avatars:svg-15',
    //   'avatars:svg-16',
    // ];

  }

  prevTab() {
    this.selectedTab = 0;
  }

  nextTab() {
    this.selectedTab = 1;
  }

  onTabChange(index) {
    this.selectedTab = index;
  }



  onSubmit({value, valid}, ev: Event) {
    ev.preventDefault();
    if (!valid) {
      return;
    }
    console.log(value);
  }

}
