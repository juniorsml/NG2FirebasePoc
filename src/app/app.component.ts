import { Component } from '@angular/core';
import { database} from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

constructor(){

  var root = database().ref('messages/2');

  root.on('value', function(snap){
    console.log(snap.key, snap.val());
  })
}

}
