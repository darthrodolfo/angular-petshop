import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { ToastrService } from 'ngx-toastr';
import { CustomValidator } from 'src/app/validators/custom.validator';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
})
export class ProfilePageComponent implements OnInit {
  public form: FormGroup;
  public busy = false;

  constructor(
    private dataService: DataService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {
    this.form = this.formBuilder.group({
      name: [
        '',
        Validators.compose([
          Validators.minLength(3),
          Validators.maxLength(80),
          Validators.required,
        ]),
      ],
      document: [{ value: '', disabled: true }],
      email: [
        '',
        Validators.compose([
          Validators.minLength(5),
          Validators.maxLength(120),
          Validators.required,
          CustomValidator.EmailValidator,
        ]),
      ],
    });
  }

  ngOnInit() {
    this.busy = true;
    this.dataService.getProfile().subscribe(
      (data: any) => {
        this.busy = false;
        this.form.controls['name'].setValue(data.name);
        this.form.controls['document'].setValue(data.document);
        this.form.controls['email'].setValue(data.email);
      },
      (err: any) => {
        //console.log(err);
        this.busy = false;
      }
    );
  }

  submit() {
    this.busy = true;
    this.dataService.updateProfile(this.form.value).subscribe(
      (data: any) => {
        this.busy = false;
        this.toastr.success(data.message, 'Atualização Completa!');
      },
      (err: any) => {
        //console.log(err);
        this.busy = false;
      }
    );
  }
}
