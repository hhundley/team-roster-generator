const Manager = require('../lib/Manager');
const testManager = new Manager('test3','3','test3@gmail.com','testOffice')

describe('testManager', () => {
    it('Name of employee should be stored as test3', () => {
      expect(testManager.name).toBe('test3');
    });
    it('id of employee should be stored as 3', () => {
        expect(testManager.id).toBe('3');
    });
    it('Email of employee should be stored as test3@gmail.com', () => {
        expect(testManager.email).toBe('test3@gmail.com');
    });
    it('Office number of employee should be stored as testOffice', () => {
        expect(testManager.officeNumber).toBe('testOffice');
    });
});

describe('getName', () => {
    it('should get the name', () => {
      expect(testManager.getName()).toBe('test3');
    });
});

describe('getID', () => {
    it('should get the id', () => {
      expect(testManager.getId()).toBe('3');
    });
});

describe('getEmail', () => {
    it('should get the email', () => {
      expect(testManager.getEmail()).toBe('test3@gmail.com');
    });
});

describe('getOfficeNumber', () => {
    it('should get the office number', () => {
      expect(testManager.getOfficeNumber()).toBe('testOffice');
    });
});

describe('getRole', () => {
    it('should get the role', () => {
      expect(testManager.getRole()).toBe('Manager');
    });
});