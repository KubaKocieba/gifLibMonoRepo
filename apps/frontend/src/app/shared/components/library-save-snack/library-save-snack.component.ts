import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-library-save-snack',
  templateUrl: './library-save-snack.component.html',
  styleUrls: ['./library-save-snack.component.scss']
})
export class LibrarySaveSnackComponent implements OnInit {
  public notificationImage = 'https://media.giphy.com/media/UBVE6ZGaZDX7a/giphy.gif';

  constructor() { }

  ngOnInit() {
  }

}
