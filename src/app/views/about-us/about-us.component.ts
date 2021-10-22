import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/app/shared/services/load-scripts.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  public entryList: any;
  constructor(private slider: LoadScriptsService) {
     slider.Load(["slider"]);
  }
 
  ngOnInit(): void {
  }

  public showTitle(title: string): void {
  alert(`Entrada seleccionada: ${ title }.`);
  }
}
