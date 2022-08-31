const Intern = require('../lib/Intern');
const testIntern = new Intern('test4','4','test4@gmail.com','testSchool')

describe('testIntern', () => {
    it('Name of employee should be stored as test4', () => {
      expect(testIntern.name).toBe('test4');
    });
    it('id of employee should be stored as 4', () => {
        expect(testIntern.id).toBe('4');
    });
    it('Email of employee should be stored as test4@gmail.com', () => {
        expect(testIntern.email).toBe('test4@gmail.com');
    });
    it('School of employee should be stored as testSchool', () => {
        expect(testIntern.school).toBe('testSchool');
    });
});

describe('getName', () => {
    it('should get the name', () => {
      expect(testIntern.getName()).toBe('test4');
    });
});

describe('getID', () => {
    it('should get the id', () => {
      expect(testIntern.getId()).toBe('4');
    });
});

describe('getEmail', () => {
    it('should get the email', () => {
      expect(testIntern.getEmail()).toBe('test4@gmail.com');
    });
});

describe('getOfficeNumber', () => {
    it('should get the school', () => {
      expect(testIntern.getSchool()).toBe('testSchool');
    });
});

describe('getRole', () => {
    it('should get the role', () => {
      expect(testIntern.getRole()).toBe('Intern');
    });
});