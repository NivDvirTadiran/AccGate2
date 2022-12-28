import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  ElementRef,
  HostListener,
  Input,
  ViewContainerRef
} from '@angular/core';
import { PopoverOptions } from '../popover.interface';
import {BubbleInputComponent} from "./bubble-input.component";
import {ActionInput} from "../../actions/action-input/action-input.interface";

@Directive({
  selector: '[inputPopover]',
})
export class PopoverInputDirective {
  @Input("inputPopover") popover?: PopoverOptions;

  popoverComponentRef?: ComponentRef<BubbleInputComponent>;
  @HostListener('mouseover', ['$event']) onMouseOver($event: any){
    this.popoverComponentRef?.instance.setData(this.data!);
    this.popoverComponentRef?.instance.showPopup();
    //this.eleRef.nativeElement.style.color = 'blue';
  }

  @HostListener('mouseleave', ['$event']) onLeave($event: any){
    this.popoverComponentRef?.instance.hidePopup();
  }

  @HostListener('click', ['$event']) onClick($event: any){
    this.popoverComponentRef?.instance.setData(this.data!);
    this.popoverComponentRef?.instance.showPopup();
  }

  @HostListener('keyup', ['$event']) onDataChange($event: any) {
    this.popoverComponentRef?.instance.setData(this.data!);
    this.popoverComponentRef?.instance.showPopup();
  }


  constructor(private eleRef: ElementRef,
              private el: ElementRef,
              private viewContainer: ViewContainerRef,
              private componentFactoryResolver: ComponentFactoryResolver) {}

  @Input() highlight: any;
  @Input() data?: ActionInput[] | undefined;
  @Input() header?: string = '';

/*
  @HostListener('mouseover') onMouseOver() {
    this.popoverComponentRef?.instance.showPopup();
    this.eleRef.nativeElement.style.color = this.colorName;
  }*/



  ngOnInit(): void {
    const factory =  this.componentFactoryResolver.resolveComponentFactory(BubbleInputComponent);

    const comp = factory.create(this.viewContainer.injector);
    comp.instance.display = "I test some content";
    comp.instance.popover = this.popover?.content;
    comp.instance.options = this.popover;
    comp.instance.data = this.data;
    comp.instance.header = this.header;

    this.popoverComponentRef = comp;
    this.el.nativeElement.classList.add("wrapper");
    this.el.nativeElement.appendChild(comp.location.nativeElement);

    comp.hostView.detectChanges();

    comp.instance.triggerDetectionChange.subscribe(() =>  {
      comp.hostView.detectChanges();
    });
  }

}
