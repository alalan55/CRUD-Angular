import { Component, Input } from '@angular/core';

@Component({
    selector: 'v-message',
    templateUrl: './vmessage.component.html',
    
})
export class VmessageComponent{

    @Input() text: string = '';
}