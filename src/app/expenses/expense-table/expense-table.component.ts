import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense-table',
  templateUrl: './expense-table.component.html',
  styleUrls: ['./expense-table.component.css'],
})
export class ExpenseTableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  tableData = [
    {
      name: 'John Doe',
      category: 'Category 1',
      date: new Date(),
      amount: 1200,
    },
    {
      name: 'Jane Smith',
      category: 'Category 2',
      date: new Date(),
      amount: 800,
    },
    {
      name: 'Mike Johnson',
      category: 'Category 3',
      date: new Date(),
      amount: 500,
    },
  ];

  // Edit row action
  editRow(row: any): void {
    alert(`Editing row: ${JSON.stringify(row)}`);
  }

  // Delete row action
  deleteRow(row: any): void {
    const index = this.tableData.indexOf(row);
    if (index !== -1) {
      this.tableData.splice(index, 1);
    }
  }
}
