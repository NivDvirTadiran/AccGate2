import {
  Component,
  Input,
  ViewChild,
  OnInit,
  AfterViewInit,
  ComponentFactoryResolver,
  ChangeDetectionStrategy,
  ApplicationRef,
  Output,
  EventEmitter,
  Type
} from '@angular/core';
import { DynamicCompDirective } from '../dynamic-comp.directive';
import { PopoverOptions } from '../popover.interface'
import {ActionInputComponent} from "src/stories/actions/action-input/action-input.component";


@Component({
  selector: 'bubble-input',
    templateUrl: './bubble-input.component.html',
  styleUrls: ['./bubble-input.component.scss']
})
export class BubbleInputComponent implements OnInit, AfterViewInit{
  @Input() display: any;
  @Input() popover: any;
  @Input()  options?: PopoverOptions;
  show: boolean = false;
  isDynamic: boolean = false;
  @ViewChild(DynamicCompDirective, {static: true}) content!: DynamicCompDirective;
  @Output() triggerDetectionChange: EventEmitter<void> = new EventEmitter<void> ();
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {

  }
  ngOnInit(): void {
    if (this.options && typeof this.options.content !== "string") {
      this.isDynamic = true;
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(<Type<any>>this.options.content);
      const viewContainerRef = this.content.viewContainerRef;
      viewContainerRef.clear();
      viewContainerRef.createComponent(componentFactory);
    }

  }
  ngAfterViewInit(): void {}

  showPopup() {
    this.show = true;
    this.triggerDetectionChange.emit();
  }

  hidePopup() {
    this.show = false;
    this.triggerDetectionChange.emit();
  }

  loadCarComponent(){
    const _viewContainerRef = this.content.viewContainerRef;

    //removes all views in that container
    _viewContainerRef.clear();

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(<Type<any>>this.options?.content);

    //Create an instance of the component
    const carComponentRef = _viewContainerRef.createComponent<ActionInputComponent>(componentFactory);
/*
    //Pass data to the component
    carComponentRef.instance.image = 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80';
*/
  }
}
