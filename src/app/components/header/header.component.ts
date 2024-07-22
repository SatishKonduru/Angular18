import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AngularMaterialModule } from '../../modules/angular-material/angular-material.module';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header', 
  standalone: true,
  imports: [CommonModule, AngularMaterialModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  preserveWhitespaces: true,
})
export class HeaderComponent {
  activatedRoute = inject(ActivatedRoute)
  ngOnInit(){
    this.activatedRoute.fragment.subscribe(data => {
      this.jumpToSection(data)
    })
  }

  jumpToSection(section: any){
    document.getElementById(section).scrollIntoView({behavior: 'smooth'})
  }
}
