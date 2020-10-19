import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('main') main: ElementRef;

  @ViewChild('aboutPugs') aboutPugs: ElementRef;

  @ViewChild('historyPugs') historyPugs: ElementRef;

  public previousScroll = 0;

  @HostListener('scroll', ['$event']) onScroll($event:Event) {
    console.log($event);
    // if (this.previousScroll < ($event.target as HTMLElement).scrollTop) {
    //   console.log('1');
    // }
    // else{
    //   console.log('2');
    // }
    // this.previousScroll = ($event.target as HTMLElement).scrollTop;
    };

  scrollToMain() {
    this.main.nativeElement.scrollIntoView({ behavior: 'smooth'})
  }

  scrollToSecondPage() {
    this.aboutPugs.nativeElement.scrollIntoView({ behavior: 'smooth'})
  }
  
  scrollToThirdPage() {
    this.historyPugs.nativeElement.scrollIntoView({ behavior: 'smooth'})
  }
  
}
