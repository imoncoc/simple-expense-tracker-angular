import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { ExpenseTableComponent } from './expenses/expense-table/expense-table.component';
import { ExpenseModalComponent } from './expenses/expense-modal/expense-modal.component';
import { FormsModule } from '@angular/forms';
import { ToastComponent } from './toast/toast.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ExpensesComponent,
    ExpenseTableComponent,
    ExpenseModalComponent,
    ToastComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
