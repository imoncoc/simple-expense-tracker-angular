import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense-modal',
  templateUrl: './expense-modal.component.html',
  styleUrls: ['./expense-modal.component.css'],
})
export class ExpenseModalComponent implements OnInit {
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
  onSubmit(): void {
    console.log('Expense Data:', this.expenseData);
    this.closeModal();
  }
}
