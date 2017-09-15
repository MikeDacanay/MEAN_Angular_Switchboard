import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Switchboard';
	
	switch1: Boolean = true ;
	switch2: Boolean = true ;
	switch3: Boolean = true ;

	flip(val: String) {
		if (val==='flip1'){
			this.switch1=!this.switch1;
		}
		if (val==='flip2'){
			this.switch2=!this.switch2;
		}
		if (val==='flip3'){
			this.switch3=!this.switch3;
		}				
	}
}
