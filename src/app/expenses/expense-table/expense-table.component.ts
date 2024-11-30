import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense-table',
  templateUrl: './expense-table.component.html',
  styleUrls: ['./expense-table.component.css'],
})
export class ExpenseTableComponent implements OnInit {
  tableData: any[] = []; // Initialize as an empty array

  constructor() {}

  ngOnInit(): void {
    // Fetch data from localStorage on initialization
    const storedData = localStorage.getItem('formData');
    this.tableData = storedData ? JSON.parse(storedData) : [];
  }

  // Edit row action
  editRow(row: any): void {
    alert(`Editing row: ${JSON.stringify(row)}`);
    // Implement edit functionality here
  }

  // Delete row action
  deleteRow(row: any): void {
    const index = this.tableData.indexOf(row);
    if (index !== -1) {
      this.tableData.splice(index, 1);

      // Update localStorage after deletion
      localStorage.setItem('formData', JSON.stringify(this.tableData));
    }
  }
}
