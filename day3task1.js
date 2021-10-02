 var emp = [{
         name: "ravi",
         Phone: 996,
         company: "tech"
     },
     {
         name: "kavi",
         Phone: 878,
         company: "tech"
     },
     {
         name: "nirmal",
         Phone: 984,
         company: "tech"
     },
     {
         name: "vivek",
         Phone: 367,
         company: "tech"
     }

 ];
 //normal for loop
 for (var i = 0; i < emp.length; i++) {
     console.log(emp[i].name);
 }

 //for of loop
 for (rrt of emp) {
     console.log(rrt.Phone);
 }

 //for in loop 
 for (mou in emp) {
     console.log(emp[mou].company);
 }

 //for each loop
 emp.forEach(function(sajb) {
     console.log(sajb.name);
     console.log(sajb.Phone);
     console.log(sajb.company);
 });