import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  trainer={
    name:"",
    email:"",
    phone:"",
    address:"",
    qualification:"",
    skillset:"",
    company:"",
    designation:"",
    ictakcourses:"",
    photo:"",
    ID:"",
    employment:'',
    approved:'',
    startdate:'',
    enddate:'',
    time:'',
    coursename:'',
    courseid:'',
    batchid:'',
    meetingvenue:'',
    _id:''
  }
  
   User= {
    email: '',
    password    : '',
};
courses:any;
  constructor(public http : HttpClient) { }

  newTrainer(image:any, trainer : any)
  {
    this.courses=JSON.stringify(trainer.ictakcourses);
    const formData = new FormData();
    formData.append('file', image);  
     
    formData.append('name', trainer.name); 
    formData.append('email', trainer.email); 
    formData.append('phone', trainer.phone); 
    formData.append('address', trainer.address); 
    formData.append('qualification', trainer.qualification); 
    formData.append('skillset', trainer.skillset ); 
    formData.append('company', trainer.company ); 
    formData.append('designation', trainer.designation ); 
    formData.append('ictakcourses',  this.courses); 
    formData.append('photo', trainer.photo); 
    formData.append('ID', trainer.ID ); 
    return this.http.post<any>('http://localhost:3000/userhome/form',formData);
    
  }
  
   getTrainers(){
    return this.http.get('http://localhost:3000/adminhome/requests')
  };
  getTrainer(email:any){
    return this.http.get("http://localhost:3000/userhome/trainerprofile/"+email);
  };
  trainer_access(id:any){
    return this.http.get("http://localhost:3000/adminhome/trainer/"+id);
  }
  calendar_access(email:any){
    return this.http.get("http://localhost:3000/adminhome/calender/"+email);
  }
  editTrainer(trainer:any)
  {   
    console.log(`editTrainer : ${trainer.name}`);
   return this.http.put("http://localhost:3000/update",trainer)
     .subscribe(data =>{console.log(data)})
  }
 
  AcceptTrainer(id:any){
    return this.http.get("http://localhost:3000/adminhome/requests/accept/"+id)
  }
  RejectTrainer(id:any){
    return this.http.delete("http://localhost:3000/adminhome/requests/delete/"+id)
  }
EditTrainer(trainer:any){
  return this.http.put("http://localhost:3000/userhome/trainerprofile/edit",trainer)
  
}
   newAllocation(trainer : any)
  {
  
    // const formData = new FormData();
    // formData.append('_id', IDE);
    // formData.append('startdate', trainer.startdate); 
    // formData.append('enddate', trainer.enddate); 
    // formData.append('time', trainer.time); 
    // formData.append('coursename', trainer.coursename); 
    // formData.append('courseid', trainer.courseid); 
    // formData.append('batchid', trainer.batchid ); 
    // formData.append('meetingvenue', trainer.meetingvenue ); 
   
    return this.http.put<any>('http://localhost:3000/adminhome/allocation',{"trainer":trainer})
    
    
  }

   deleteTrainer(id:any)
  {

    return this.http.delete("http://localhost:3000/adminhome/trainerprofiles/delete/"+id)

  }

 

  allocateTrainer(trainer:any)
  {
    return this.http.get("http://localhost:3000/trainerprofiles/allocate/",trainer)
    
  }
  
  
  getTrainer2(){
    return this.http.get("http://localhost:3000/adminhome/trainerprofiles" );

  };

 searchTrainer(search:any){
    return this.http.put("http://localhost:3000/adminhome/trainerprofiles/search",{"search":search})
  }
  
  editTrainers2(trainer:any)
  {   
    console.log(`editTrainers`);
    
   return this.http.put<any>("http://localhost:3000/adminhome/trainerprofiles/edit",trainer)
  }

  getTrainer4(id:any){
    return this.http.get("http://localhost:3000/adminhome/trainerprofiles/"+id);
  };

  
}
