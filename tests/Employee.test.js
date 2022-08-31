const Employee = require('../lib/Employee');
const testEmployee = new Employee('test','1','test@gmail.com')

describe('testEmployee', () => {
    it('Name of employee should be stored as test', () => {
      expect(testEmployee.name).toBe('test');
    });
    it('id of employee should be stored as 1', () => {
        expect(testEmployee.id).toBe('1');
    });
    it('Email of employee should be stored as test@gmail.com', () => {
        expect(testEmployee.email).toBe('test@gmail.com');
    });
});

describe('getName', () => {
    it('should get the name', () => {
      expect(testEmployee.getName()).toBe('test');
    });
});

describe('getID', () => {
    it('should get the id', () => {
      expect(testEmployee.getId()).toBe('1');
    });
});

describe('getEmail', () => {
    it('should get the email', () => {
      expect(testEmployee.getEmail()).toBe('test@gmail.com');
    });
});

describe('getRole', () => {
    it('should get the name', () => {
      expect(testEmployee.getRole()).toBe('Employee');
    });
});