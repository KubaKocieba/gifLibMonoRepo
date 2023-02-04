import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { GIFObject } from "../../../core/types/gif-object.type";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MainService } from "../../../shared/services/main.service";
import { CopiedNotificationComponent } from "./shared/copied-notification.component";

interface DetailsCluesInterface {
  category: string;
  el: number;
}

@Component({
  selector: "app-library-image",
  templateUrl: "./library-image.component.html",
  styleUrls: ["./library-image.component.scss"],
})
export class LibraryImageComponent implements OnInit {
  @Input() img: GIFObject;
  @Input() detailsClues: DetailsCluesInterface;
  @Output() showTools: EventEmitter<number>;
  @ViewChild("URL", { static: true }) public URLtextarea: ElementRef;

  public imageSrc: string;
  public toolsVisible = false;
  isMobile = /android/i.test(navigator.userAgent) || /iPad|iPhone|iPod/.test(navigator.userAgent);

  constructor(
    private router: Router,
    private notify: MatSnackBar,
    private mainServ: MainService
  ) {}

  ngOnInit() {
    this.imageSrc = this.getLibImgSrc();
  }

  public imageDetail(): void {
    this.router.navigate([
      "images",
      this.detailsClues.category,
      this.detailsClues.el,
    ]);
  }

  public imageRemove(): void {
    this.mainServ.deleteImage(this.detailsClues.category, this.img);
  }

  public getLibImgSrc(): string {
    if (this.img) {
      return this.img.images.preview_gif.url || this.img.images.downsized.url;
    }
  }

  public getWidth(): string {
    return this.img.images.preview_gif.width || this.img.images.downsized.width;
  }

  public getHeight(): string {
    return (
      this.img.images.preview_gif.height || this.img.images.downsized.height
    );
  }

  public toggleTools(): void {
    this.toolsVisible = !this.toolsVisible;
  }

  public async copyUrl(): Promise<void> {
    const img = document.createElement('img');
    img.src = this.img.images.original.url;
    const div = document.createElement('div')
    div.contentEditable = 'true';
    div.appendChild(img);
    document.body.appendChild(div);
    const range = document.createRange();
    const selection = window.getSelection();
    selection.removeAllRanges();
    range.selectNodeContents(div);
    selection.addRange(range);
    document.execCommand('copy');
    selection.removeAllRanges();
    document.body.removeChild(div);
    this.notify.openFromComponent(CopiedNotificationComponent);
  }
}
