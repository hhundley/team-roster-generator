const Engineer = require('../lib/Engineer');
const testEngineer = new Engineer('test2','2','test2@gmail.com','testgit')

describe('testEngineer', () => {
    it('Name of employee should be stored as test', () => {
      expect(testEngineer.name).toBe('test2');
    });
    it('id of employee should be stored as 2', () => {
        expect(testEngineer.id).toBe('2');
    });
    it('Email of employee should be stored as test2@gmail.com', () => {
        expect(testEngineer.email).toBe('test2@gmail.com');
    });
    it('Github of employee should be stored as testgit', () => {
        expect(testEngineer.github).toBe('testgit');
    });
});

describe('getName', () => {
    it('should get the name', () => {
      expect(testEngineer.getName()).toBe('test2');
    });
});

describe('getID', () => {
    it('should get the id', () => {
      expect(testEngineer.getId()).toBe('2');
    });
});

describe('getEmail', () => {
    it('should get the email', () => {
      expect(testEngineer.getEmail()).toBe('test2@gmail.com');
    });
});

describe('getGithub', () => {
    it('should get the github', () => {
      expect(testEngineer.getGithub()).toBe('testgit');
    });
});

describe('getRole', () => {
    it('should get the role', () => {
      expect(testEngineer.getRole()).toBe('Engineer');
    });
});