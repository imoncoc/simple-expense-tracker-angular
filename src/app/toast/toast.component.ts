import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
})
export class ToastComponent implements OnInit {
  @Input() message: string = ''; // Message to display
  @Input() type: 'success' | 'error' = 'success'; // Type of toast

  showToast(message: string, type: 'success' | 'error' = 'success'): void {
    this.message = message;
    this.type = type;
  }

  ngOnInit(): void {}
}
