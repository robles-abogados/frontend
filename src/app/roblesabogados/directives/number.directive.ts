import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[number]'
})
export class NumberDirective {

  private regexStr = "^[0-9]*$";

  constructor(private _el: ElementRef) { }

  @HostListener("keypress", ["$event"])
  onKeyPress(event:any) {
    return new RegExp(this.regexStr).test(event.key);
  }

  @HostListener('paste', ['$event']) 
  blockPaste(e: KeyboardEvent) {
    this.validateFields(e);
  }

  validateFields(event:any) {
    setTimeout(() => {
      this._el.nativeElement.value = this._el.nativeElement.value.replace(/[^0-9]/g, "").replace(/\s/g, "");
      event.preventDefault();
    }, 100);
  }

}
