import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Phone, PhoneData } from '../model/interface/phone';
import { Rolesservice } from '../rolesservice';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addrolescomponent',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './addrolescomponent.html',
  styleUrl: './addrolescomponent.css',
})
export class Addrolescomponent {
    phoneForm!: FormGroup;
  phonesList: Phone[] = [];
  editingPhoneId: string | null = null;
  loading: boolean = false;

  private fb = inject(FormBuilder);
  private phoneService = inject(Rolesservice);
  private toastr = inject(ToastrService);

  ngOnInit(): void {
    this.initForm();
    // this.loadPhones();
  }

  initForm() {
    this.phoneForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      year: [''],
      price: [''],
      cpuModel: [''],
      hardDiskSize: ['']
    });
  }

  // loadPhones() {
  //   this.loading = true;
  //   this.phoneService.getPhones().subscribe({
  //     next: res => {
  //       this.phonesList = res;
  //       this.loading = false;
  //     },
  //     error: () => {
  //       this.toastr.error('Failed to load phones');
  //       this.loading = false;
  //     }
  //   });
  // }

  submitPhone() {
    if (this.phoneForm.invalid) {
      this.toastr.warning('Please fill all required fields correctly');
      return;
    }

    this.loading = true;
    const formValue = this.phoneForm.value;
    const phonePayload: Phone = {
      name: formValue.name,
      data: {
        year: formValue.year,
        price: formValue.price,
        'CPU model': formValue.cpuModel,
        'Hard disk size': formValue.hardDiskSize
      }
    };

    const action$ = this.editingPhoneId
      ? this.phoneService.updatePhone(this.editingPhoneId, phonePayload)
      : this.phoneService.createPhone(phonePayload);

    action$.subscribe({
      next: (res) => {
        if (this.editingPhoneId) {
          const index = this.phonesList.findIndex(p => p.id === this.editingPhoneId);
          if (index > -1) this.phonesList[index] = res;
          this.toastr.success('Phone updated successfully!');
          this.editingPhoneId = null;
        } else {
          this.phonesList.push(res);
          this.toastr.success('Phone added successfully!');
        }
        this.phoneForm.reset();
        this.loading = false;
      },
      error: () => {
        this.toastr.error('Operation failed');
        this.loading = false;
      }
    });
  }

  editPhone(phone: Phone) {
    this.editingPhoneId = phone.id || null;
    this.phoneForm.patchValue({
      name: phone.name,
      year: phone.data?.year,
      price: phone.data?.price,
      cpuModel: phone.data?.['CPU model'],
      hardDiskSize: phone.data?.['Hard disk size']
    });
  }

  deletePhone(phoneId: string) {
    if (!confirm('Are you sure you want to delete this phone?')) return;

    this.loading = true;
    this.phoneService.deletePhone(phoneId).subscribe({
      next: () => {
        this.phonesList = this.phonesList.filter(p => p.id !== phoneId);
        this.toastr.success('Phone deleted successfully!');
        this.loading = false;
      },
      error: () => {
        this.toastr.error('Failed to delete phone');
        this.loading = false;
      }
    });
  }
}
