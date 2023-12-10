console.log('es.1');

class User {
    constructor(firstName, lastName, age, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.locaton = location;
    
    }
    
        compara(user1, user2) {
            if (user1 < user2) {
                console.log( user1.firstName + ' è minore di ' + user2.firstName)
            }else {
                console.log(user1.firstName + ' è maggiore di ' + user2.firstName);
            }
        }
        
    }
   

  
  const user1 = new User('Massimo', 'Rossi', '80', 'Roma');
  //console.log(user1);
  

  const user2 = new User('Maurizio', 'Vitale', '56', 'Bergamo');
  //console.log(user2);


  user1.compara(user1, user2);




 