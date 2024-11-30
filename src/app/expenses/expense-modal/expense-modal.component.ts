import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-expense-modal',
  templateUrl: './expense-modal.component.html',
  styleUrls: ['./expense-modal.component.css'],
})
export class ExpenseModalComponent implements OnInit {
  // categories = [
  //   { label: 'Food', value: 'food' },
  //   { label: 'Travel', value: 'travel' },
  //   { label: 'Other', value: 'other' },
  // ];

  constructor() {}

  ngOnInit(): void {}

  @Input() isOpen: boolean = false;
  @Input() categories: any[] = [];
  @Input() editingRow: any = null;

  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<any>();

  closeModal(): void {
    this.close.emit();
  }

  closeModalOnBackdrop(event: Event): void {
    this.close.emit();
  }

  onSubmit(form: any): void {
    if (form.valid) {
      const formData = {
        id: this.editingRow?.id || new Date().getTime(),
        name: form.value.name,
        date: form.value.date,
        amount: form.value.amount,
        category: form.value.category,
      };

      this.save.emit(formData);
      form.reset();
    }
  }
}
