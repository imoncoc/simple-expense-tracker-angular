import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastComponent } from '../toast/toast.component';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css'],
})
export class ExpensesComponent implements OnInit {
  @ViewChild(ToastComponent) toast!: ToastComponent;

  isModalOpen: boolean = false;
  categories = [
    { value: 'food', label: 'Food 🍽️' },
    { value: 'travel', label: 'Travel ✈️' },
    { value: 'shopping', label: 'Shopping 🛒' },
    { value: 'health', label: 'Health ❤️' },
    { value: 'education', label: 'Education 🎓' },
    { value: 'utilities', label: 'Utilities 💡' },
    { value: 'transport', label: 'Transport 🚗' },
    { value: 'others', label: 'Others ⚙️' },
  ];
  tableData: any[] = [];
  filteredTableData: any[] = [];
  filters = {
    startDate: '',
    endDate: '',
    category: '',
  };
  editingRow: any = null;
  localStorageKey = 'expenseData';
  total: number = 0;

  ngOnInit(): void {
    const storedData = localStorage.getItem(this.localStorageKey);
    this.tableData = storedData ? JSON.parse(storedData) : [];
    this.applyFilters();
  }

  saveToLocalStorage(): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.tableData));
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
      const index = this.tableData.findIndex(
        (row) => row.id === this.editingRow.id
      );
      this.toast.showToast('Expense Updated!', 'success');
      if (index !== -1) this.tableData[index] = data;
    } else {
      this.tableData.push(data);
      this.toast.showToast('New expense added.', 'success');
    }
    this.saveToLocalStorage();
    this.applyFilters();
    this.closeModal();
  }

  editRow(row: any): void {
    this.openModal(row);
  }

  deleteRow(row: any): void {
    this.tableData = this.tableData.filter((r) => r !== row);
    this.saveToLocalStorage();
    this.applyFilters();
    this.toast.showToast('Expense deleted!', 'error');
  }

  applyFilters(): void {
    if (
      this.filters.startDate.length > 0 &&
      this.filters.endDate.length > 0 &&
      new Date(this.filters.startDate) > new Date(this.filters.endDate)
    ) {
      return alert('Start date must be earlier than the end date.');
    }
    this.filteredTableData = this.tableData.filter((row) => {
      const matchesCategory =
        !this.filters.category || row.category === this.filters.category;

      const matchesDate =
        (!this.filters.startDate ||
          new Date(row.date) >= new Date(this.filters.startDate)) &&
        (!this.filters.endDate ||
          new Date(row.date) <= new Date(this.filters.endDate));

      return matchesCategory && matchesDate;
    });

    // Update total dynamically
    this.total = this.filteredTableData.reduce(
      (sum, row) => sum + row.amount,
      0
    );
  }
}
