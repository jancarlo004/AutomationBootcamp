const firstNames = require('./FirstName.json');
const lastNames = require('./LastName.json');
const DateOfBirthAndTaxID = require('./DateOfBirthAndtaxID.json')
const policyNumbers = require('./PolicyNumbers.json');
const address = require('./Address.json');
const basicInformation = require('./BasicInformation.json');
const injury = require('./Injury.json');
const addClaimInfo = require('./AddClaimInformation.json');
const injuryType = require('./InjuryType.json');
const bodyParts = require('./BodyPartDetails.json');


export class TestDataGenerators {

    async firstNameGenerator() {
        const firstName = firstNames.data[Math.floor(Math.random() * firstNames.data.length)];
        return firstName;
    }

    async lastNameGenerator() {
        const lastName = lastNames.data[Math.floor(Math.random() * lastNames.data.length)];
        return lastName;
    }

    async dateOfBirthAndTaxIdGenerator() {
        const dateOfBirthAndTaxId = DateOfBirthAndTaxID.data[Math.floor(Math.random() * DateOfBirthAndTaxID.data.length)];
        return dateOfBirthAndTaxId;
    }

    async policyNumbersGenerator() {
        const policyNumber = policyNumbers.data[Math.floor(Math.random() * policyNumbers.data.length)];
        return policyNumber;
    }

    async addresssGenerator() {
        const addresses = address.data[Math.floor(Math.random() * address.data.length)];
        return addresses;    
    }

    async basicInfoGenerator(keyWord) {
        const basicInfo = basicInformation.data[Math.floor(Math.random() * basicInformation.data.length)];
        let value = basicInfo.basicInformation.RelationToInsured[Math.floor(Math.random() * basicInfo.basicInformation.RelationToInsured.length)];
        return value;    
    }

    async injuryGenerator() {
        const injuries = injury.data[Math.floor(Math.random() * injury.data.length)];
        return injuries;      
    }

    async injuryTypeGenerator(){
        const injuriesType = injuryType.data[Math.floor(Math.random() * injuryType.data.length)];
        return injuriesType;  
    }

    async bodyPartsGenerator(){
        const bodyPartsGenerators = bodyParts.data[Math.floor(Math.random() * bodyParts.data.length)];
        return bodyPartsGenerators;  
    }

    async addClaimInformationGenerator(keyWord){
        const addClaimInformations = addClaimInfo.data[Math.floor(Math.random() * addClaimInfo.data.length)];
        let value;

        switch(keyWord){
            case "Injury Severity report":
               value = addClaimInformations.addClaimInformation.illnessResultToDeath[Math.floor(Math.random() * addClaimInformations.addClaimInformation.illnessResultToDeath.length)];
            break;

            case "Severity Medical report":
               value = addClaimInformations.addClaimInformation.MedicalAttentionRequired[Math.floor(Math.random() * addClaimInformations.addClaimInformation.MedicalAttentionRequired.length)];
            break;
            
            case "Severity":
                value = addClaimInformations.addClaimInformation.Severity[Math.floor(Math.random() * addClaimInformations.addClaimInformation.Severity.length)];
            break;

            case "Indemnity":
                value = addClaimInformations.addClaimInformation.IndemnityExposure[Math.floor(Math.random() * addClaimInformations.addClaimInformation.IndemnityExposure.length)];
            break;

            case "Employer Liability":
                value = addClaimInformations.addClaimInformation.EmployerLiabilityExposure[Math.floor(Math.random() * addClaimInformations.addClaimInformation.EmployerLiabilityExposure.length)];
        }
        return value; 
    }

    async generateCheck(length){ // Method usage: Returns a random generated string.
        var result = ''; // Object to save the generated string
        var characters = '1234567890'; // characters to be used in the generation
        var charactersLength = characters.length; // counts the length of object 'character' and save it to obj charactersLength
        for ( var i = 0; i < length; i++ ) { // Used loop to add random characters and form it as string
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result; // returns the random generated string
    }
}
