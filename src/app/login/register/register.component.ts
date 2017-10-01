import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  items: string[];

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {

    const img = '${this.avatarName}:svg-${Math.floor(Math.random() * 16).toFixed(0)}';

    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    this.items = nums.map(d => 'avatars:svg-' + d);
    this.form = this.fb.group({
      email: [],
      name: [],
      password: [],
      repeat: [],
      avatar: [img]
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

}
