import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  get aliasies() {
    return this.formGroup.get('aliases') as FormArray;
  }
  add() {
    this.aliasies.push(this.fb.control(''));
  }

  constructor(private fb: FormBuilder) {}
  submit() {
    console.log('stiscem');
    console.log(this.formGroup.value);
  }

  images: any[] | undefined;
  formGroup = this.fb.group({
    firstName: ['Ime', Validators.required],
    lastName: ['', Validators.required],
    aliases: this.fb.array([this.fb.control('')]),
  });

  ngOnInit(): void {}

  form = new FormControl('');
}
