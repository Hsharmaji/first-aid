import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-healthprofile',
  templateUrl: './healthprofile.component.html',
  styleUrls: ['./healthprofile.component.css']
})
export class HealthprofileComponent {
  animate: boolean = false;
  bloodGroup: string='';
  height: number | undefined;
  weight: number | undefined;
  constructor(private router: Router) { }
  ngOnInit(): void {
    // Delay the animation by 0.5 seconds (500 milliseconds)
    setTimeout(() => {
      this.animate = true;
    }, 500);
  }
  healthProblemsInput: string = '';
  pastHealthProblemsInput: string = '';
  pastHealthProblems: string[] = [];
  healthProblems: string[] = [];
  medicationMap: { [key: string]: string[] } = {
    headache: ['Aspirin.', ' paracetamol'],
    fever: ['paracetamol', ' ibuprofen'],
      cold: [' Acetaminophen', 'Decongestants'],
  };
  relevantMedications: string[] = []; // Array to store relevant medications

  submitHealthProblems() {  
    if (this.bloodGroup && this.height && this.weight && this.pastHealthProblemsInput && this.healthProblemsInput) {
      this.healthProblems = this.healthProblemsInput.split(',').map(problem => problem.trim());
      this.pastHealthProblems = this.pastHealthProblemsInput.split(',').map(problem => problem.trim());
  
      const allHealthProblems = [...this.healthProblems, ...this.pastHealthProblems];
  
      this.relevantMedications = [];
      allHealthProblems.forEach(problem => {
        if (this.medicationMap[problem]) {
          this.relevantMedications.push(...this.medicationMap[problem]);
        }
      });
    } else {
      alert('Please fill in all fields.');
    }
}
setreminder(){
  this.router.navigate(['/reminder']);
};
}