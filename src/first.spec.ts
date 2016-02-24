
import { Person } from './person';

describe('my first test', () => {

   it('should return the correct name', () => {
      var person = new Person('Juri');
      expect(person.getName()).toEqual('Juri');
   });

});