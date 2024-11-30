import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css'],
})
export class ExpensesComponent implements OnInit {
  isModalOpen: boolean = false;
  categories = [
    { value: 'food', label: 'Food' },
    { value: 'travel', label: 'Travel' },
    { value: 'shopping', label: 'Shopping' },
  ];
  tableData: any[] = [];
  editingRow: any = null;
  localStorageKey = 'expenseData';
  total!: number;

  ngOnInit(): void {
    // Load data from localStorage on initialization
    const storedData = localStorage.getItem(this.localStorageKey);
    this.tableData = storedData ? JSON.parse(storedData) : [];
    this.updateTotal();
  }

  updateTotal(): void {
    // Recalculate the total amount
    this.total = this.tableData.reduce((sum, item) => sum + item.amount, 0);
  }

  saveToLocalStorage(): void {
    // Save table data to localStorage
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.tableData));
    this.updateTotal();
  }

  openModal(row: any = null): void {
    this.isModalOpen = true;
    this.editingRow = row ? { ...row } : null;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  handleSave(data: any): void {
    if (this.editingRow) {
      // Update existing entry
      const index = this.tableData.findIndex(
        (row) => row.id === this.editingRow.id
      );
      if (index !== -1) this.tableData[index] = data;
    } else {
      // Add new entry
      this.tableData.push(data);
    }

    this.saveToLocalStorage();
    this.closeModal();
  }

  editRow(row: any): void {
    this.openModal(row);
  }

  deleteRow(row: any): void {
    this.tableData = this.tableData.filter((r) => r !== row);
    this.saveToLocalStorage();
  }
}
