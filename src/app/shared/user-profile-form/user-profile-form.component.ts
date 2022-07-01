import { Component } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-user-profile-form',
  templateUrl: './user-profile-form.component.html',
  styleUrls: ['./user-profile-form.component.css'],
})
export class UserProfileFormComponent {
  private emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';

  constructor(private fb: FormBuilder) {}

  profileForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
  });

  onSubmit() {
    if (this.profileForm.valid) {
    }
    console.log(this.profileForm);
  }

  onTemplateFormSubmit(contactForm: any) {
    console.log('sss',contactForm)
  }
}
