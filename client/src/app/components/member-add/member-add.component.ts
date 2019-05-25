import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Location } from '@angular/common';

import { Member } from '../../models/member';
import { ValidationService } from '../../utils/validation.service';
import { MemberService } from '../../services/member.service';

@Component({
  selector: 'app-member-add',
  templateUrl: './member-add.component.html',
  styleUrls: ['./member-add.component.css']
})
export class MemberAddComponent implements OnInit {

  memberForm: FormGroup;

  constructor(
    private location: Location,
    private formBuilder: FormBuilder,
    private memberService: MemberService,
    private validationService: ValidationService,
    private router: Router
  ) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(): void {
    this.memberForm = this.formBuilder.group({
      name: ['', Validators.compose([
        Validators.required, // Field is required
        Validators.minLength(2), // Minimum length is 5 characters
        Validators.maxLength(30) // Maximum length is 30 characters
      ])],
      fatherName: ['', Validators.compose([
        Validators.required, // Field is required
        Validators.minLength(2), // Minimum length is 5 characters
        Validators.maxLength(30) // Maximum length is 30 characters
      ])],
      baptismName: '',
      street: '',
      postCode: ['', Validators.compose([
        this.validationService.validatePostCode
      ])],
      city: '',
      email: ['', Validators.compose([
        Validators.required, // Field is required
        Validators.minLength(5), // Minimum length is 5 characters
        Validators.maxLength(30), // Maximum length is 30 characters
        this.validationService.validateEmail // Custom validation
      ])],

    });
  }
  goBack(): void {
    this.location.back();
  }
}
