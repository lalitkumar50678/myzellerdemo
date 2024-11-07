import { getFirstNameOfName, toCamelCase } from "../../src/utility/Utils"



describe('Untils function testing',()=>{
    it('Should return first latter of name',()=>{
       expect(getFirstNameOfName('Lalit')).toMatch('L');  
    })
    it('Return camel case string', ()=>{
        expect(toCamelCase('MANAGER')).toMatch('Manager');
    })
})