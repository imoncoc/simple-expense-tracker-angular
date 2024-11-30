import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense-modal',
  templateUrl: './expense-modal.component.html',
  styleUrls: ['./expense-modal.component.css'],
})
export class ExpenseModalComponent implements OnInit {
  categories = [
    { label: 'Food', value: 'food' },
    { label: 'Travel', value: 'travel' },
    { label: 'Other', value: 'other' },
  ];

  constructor() {}

  ngOnInit(): void {}
  isModalOpen: boolean = false; // Modal state
  expenseData = {
    name: '',
    amount: null,
    date: '',
  };

  // Open the modal
  openModal(): void {
    this.isModalOpen = true;
  }

  // Close the modal
  closeModal(): void {
    this.isModalOpen = false;
    this.resetForm();
  }
  closeModalOnBackdrop(event: Event): void {
    if (event.target === event.currentTarget) {
      this.closeModal();
    }
  }

  // Reset form data
  resetForm(): void {
    this.expenseData = {
      name: '',
      amount: null,
      date: '',
    };
  }

  // Submit data
  // onSubmit(): void {
  //   console.log('Expense Data:', this.expenseData);
  //   this.closeModal();
  // }
  onSubmit(form: any) {
    if (form.valid) {
      const formData = {
        ...form.value,
        id: new Date().getTime(), // Generate a unique ID
      };

      // Get existing data from localStorage
      const existingData = JSON.parse(localStorage.getItem('formData') || '[]');

      // Add the new data
      existingData.push(formData);

      // Store updated data back into localStorage
      localStorage.setItem('formData', JSON.stringify(existingData));

      console.log('Form Data Submitted:', formData);
      this.closeModal();
    }
  }
}
