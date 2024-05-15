import { Component } from '@angular/core';
import { IPais } from '../../interfaces/pais.interface';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PaisesService } from '../paises.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrl: './paises.component.css'
})
export class PaisesComponent {
  list : IPais[] | null =[];


  public form: FormGroup = this.fb.group({
    searchInput: [],
  });

  constructor(private fb: FormBuilder,private paisesService: PaisesService,private toastr: ToastrService){}

  onSearch(){
    let queryString: string = this.form.get('searchInput')?.value;

    if (!queryString) return;

    this.paisesService.getPaises(queryString).subscribe({
      next: res => {
       this.list = res;
      },
     // error: error => this.toastr.error('Error while trying to complete the operation.')

    });
  }
}
