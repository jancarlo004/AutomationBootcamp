import { FNOLWizard } from "../../../../pages/gw/generated/claimcenter/pages/claim/FNOLWizard"; 
import { FnolWizard_Ext } from "../../../../pages/cc/JanCarloTesting/FnolWizard_Ext.js"
import { ClaimTabBar } from "../../../../pages/gw/generated/claimcenter/pages/navigation/tabBar/ClaimTabBar"
import { NewClaimSaved } from "../../../../pages/gw/generated/claimcenter/pages/other/NewClaimSaved";
import { TestDataGenerators } from "../../../../util/cc/JanCarloTesting/TestDataGenerators.js";
import {t} from "testcafe";
// import world from "../../../util/cc/cincinnati/world.js";
import { PcfComponent, PcfSelectInput } from "@gtui/gt-ui-framework";

const fnolWizard = new FNOLWizard();
const fnolWizard_Ext = new FnolWizard_Ext();
const claimTabBar = new ClaimTabBar();
const newClaimSaved = new NewClaimSaved();
const testDataGenerator = new TestDataGenerators();

export class FnolScenario{

   async claimCreation(product){
        await this.searchForAPolicy();
        await this.createClaim(product);
    }

    async createClaim(product){
        if(await fnolWizard_Ext.fnolPolicySearchFailedPopUpMessage.component.visible){
            await this.createClaimUsingUnverifiedPolicy(product);
        }else{
            await this.createClaimUsingVerifiedPolicy();
        }
    }

    async createClaimUsingVerifiedPolicy(){
        await this.createNewPersonWithVerifiedPolicy();
        await this.addBasicInformationForVerifiedPolicy();
        await this.addClaimInformationForVerifiedPolicy();
        await this.assignAndCreateClaim();
        await this.saveClaimNumber();      //save claim number
    }

    async createClaimUsingUnverifiedPolicy(product){
        await this.searchOrCreatePolicyInformation(product);
        await this.createNewPersonForUnverifiedPolicy();
        await fnolWizard.fNOLWizardNext.click(); 
        await this.addBasicInformationForUnverifiedPolicy();
        await this.addClaimInformationForUnverifiedPolicy();
        await this.assignAndCreateClaim();
        await this.saveClaimNumber();      //save claim number
    }

    async verifyClaimIsCreated(claimSavedLabel){
        await t.expect(await fnolWizard_Ext.claimSavedLabel.component.innerText).contains(claimSavedLabel);
    } 

    async searchOrCreatePolicyInformation(product){
        await fnolWizard_Ext.fnolWizardFindPolicyOrUnverifiedButton.selectRadioButtonByLabel("Create Unverified Policy");
        await fnolWizard_Ext.fnolUnverifiedPolicyPolicyNumberTextBox.setValue(await this.generatePolicyNumbers(5));
        await t.pressKey('tab');
        await fnolWizard_Ext.fnolUnverifiedPolicyTypeDropdown.selectOptionByLabel(product); 
        await fnolWizard_Ext.fnolUnverfiedPolicyLossDateTextBox.setValue(await this.getPastDate());
        world.effectiveDate = await fnolWizard_Ext.fnolUnverifiedEffectiveDate.setValue(await this.getPastDate());
        await fnolWizard_Ext.fnolUnverifiedExpirationDate.setValue(await this.getExpirationDate());
        await fnolWizard_Ext.fnolUnverifiedAgencyCode.setValue("46009");
        await fnolWizard_Ext.fnolUnverifiedMenuIcon.click();
    }

    async createNewPersonForUnverifiedPolicy(){
        await fnolWizard_Ext.fnolUnverifiedNewPersonCreation.click();

        let firstNames = await testDataGenerator.firstNameGenerator();
        let firstName = firstNames.firstName[Math.floor(Math.random() * firstNames.firstName.length)];
        await fnolWizard_Ext.fnolPersonFirstName.setValue(firstName);
        t.ctx.contactFirstName = firstName;

        let lastName = await testDataGenerator.lastNameGenerator();
        await fnolWizard_Ext.fnolPersonLastName.setValue(lastName);
        t.ctx.contactLastName = lastName;
        console.log("Claimant Name: " +t.ctx.contactFirstName + " " + t.ctx.contactLastName);
        t.ctx.contactName =t.ctx.contactFirstName + " " + t.ctx.contactLastName;

        await fnolWizard_Ext.fnolWorkPhoneNumber.setValue("201-234-8897");
        await fnolWizard_Ext.fnolHomePhoneNumber.setValue("201-789-0098");
        await fnolWizard_Ext.fnolMobileNumber.setValue("201-456-3345");
        await t.pressKey('tab');

        let dateOfBirthAndTaxID = await testDataGenerator.dateOfBirthAndTaxIdGenerator();
        await fnolWizard_Ext.fnolPersonTaxID.setValue(dateOfBirthAndTaxID.TaxId[Math.floor(Math.random() * dateOfBirthAndTaxID.TaxId.length)]);
        await fnolWizard_Ext.fnolTaxExemptionEntities.setValue("10");
        await fnolWizard_Ext.fnolDateOfBirth.setValue(dateOfBirthAndTaxID.DateOfBirth[Math.floor(Math.random() * dateOfBirthAndTaxID.DateOfBirth.length)]);
        await fnolWizard_Ext.fnolGender.selectOptionByLabel(firstNames.Gender);
        await fnolWizard_Ext.fnolMaritalStatus.selectOptionByLabel("Single");

        let address = await testDataGenerator.addresssGenerator();
        await fnolWizard_Ext.fnolAddressLine1.setValue(address.street);
        t.ctx.contactAddressAddressLine = address.street;

        await fnolWizard_Ext.fnolAddressLine2.setValue(address.AddressLine2);
        t.ctx.contactAddressAddressLine2 = address.AddressLine2;

        await fnolWizard_Ext.fnolCity.setValue(address.city);
        t.ctx.contactAddressCity = address.city;

        await fnolWizard_Ext.fnolCounty.setValue(address.county);
        t.ctx.contactAddressCounty = address.county;

        await t.pressKey('tab');
        await fnolWizard_Ext.fnolStateDropdown.selectOptionByLabel(address.state);
        t.ctx.contactAddressState = address.state;

        await fnolWizard_Ext.fnolZipCode.setValue(address.zipcode);
        t.ctx.contactAddressZipCode = address.zipcode;

        await fnolWizard_Ext.fnolVerifiedAddressButton.click();
        await fnolWizard_Ext.fnolVerifiedOverrideRadioButton.selectRadioButtonByLabel("Yes");
        await fnolWizard_Ext.fnolUnverifiedAddressType.selectOptionByLabel("Home");
        await fnolWizard_Ext.fnolLocationDescription.setValue("Test");
        await fnolWizard_Ext.fnolUpdateButton.click();

        if(await fnolWizard_Ext.fnolDuplicateContactFoundPopup.component.visible){
            await fnolWizard_Ext.fnolDuplicateContactListview.clickOnCell(-1, 0);
        }
    }

    async createNewPersonWithVerifiedPolicy(){
        await fnolWizard.fNOLWizardNext.click();
        await fnolWizard_Ext.fnolVerifiedPolicyMenuIcon.click();
        await fnolWizard_Ext.fnolVerifiedPolicyNewPersonMenu.click();
   
        let firstNames = await testDataGenerator.firstNameGenerator();
        let firstName = firstNames.firstName[Math.floor(Math.random() * firstNames.firstName.length)];
        await fnolWizard_Ext.fnolPersonFirstName.setValue(firstName);
        t.ctx.contactFirstName = firstName;

        let lastName = await testDataGenerator.lastNameGenerator();
        await fnolWizard_Ext.fnolPersonLastName.setValue(lastName);
        t.ctx.contactLastName = lastName;
        console.log("Claimant Name: " +t.ctx.contactFirstName + " " + t.ctx.contactLastName);
        t.ctx.contactName =t.ctx.contactFirstName + " " + t.ctx.contactLastName;

        await fnolWizard_Ext.fnolWorkPhoneNumber.setValue("201-234-8897");
        await fnolWizard_Ext.fnolHomePhoneNumber.setValue("201-789-0098");
        await fnolWizard_Ext.fnolMobileNumber.setValue("201-456-3345");
        await t.pressKey('tab');

        let dateOfBirthAndTaxID = await testDataGenerator.dateOfBirthAndTaxIdGenerator();
        await fnolWizard_Ext.fnolPersonTaxID.setValue(dateOfBirthAndTaxID.TaxId[Math.floor(Math.random() * dateOfBirthAndTaxID.TaxId.length)]);
        await fnolWizard_Ext.fnolTaxExemptionEntities.setValue("10");
        await fnolWizard_Ext.fnolDateOfBirth.setValue(dateOfBirthAndTaxID.DateOfBirth[Math.floor(Math.random() * dateOfBirthAndTaxID.DateOfBirth.length)]);
        await fnolWizard_Ext.fnolGender.selectOptionByLabel(firstNames.Gender);
        await fnolWizard_Ext.fnolMaritalStatus.selectOptionByLabel("Single");

        let address = await testDataGenerator.addresssGenerator();
        await fnolWizard_Ext.fnolAddressLine1.setValue(address.street);
        t.ctx.contactAddressAddressLine = address.street;

        await fnolWizard_Ext.fnolAddressLine2.setValue(address.AddressLine2);
        t.ctx.contactAddressAddressLine2 = address.AddressLine2;

        await fnolWizard_Ext.fnolCity.setValue(address.city);
        t.ctx.contactAddressCity = address.city;

        await fnolWizard_Ext.fnolCounty.setValue(address.county);
        t.ctx.contactAddressCounty = address.county;

        await t.pressKey('tab');
        await fnolWizard_Ext.fnolStateDropdown.selectOptionByLabel(address.state);
        t.ctx.contactAddressState = address.state;

        await fnolWizard_Ext.fnolZipCode.setValue(address.zipcode);
        t.ctx.contactAddressZipCode = address.zipcode;

        await fnolWizard_Ext.fnolVerifiedAddressButton.click();
        await fnolWizard_Ext.fnolVerifiedOverrideRadioButton.selectRadioButtonByLabel("Yes");
        await fnolWizard_Ext.fnolUnverifiedAddressType.selectOptionByLabel("Home");
        await fnolWizard_Ext.fnolLocationDescription.setValue("Test");
        await fnolWizard_Ext.fnolUpdateButton.click();

          if(await fnolWizard_Ext.fnolDuplicateContactFoundPopup.component.visible){
            await fnolWizard_Ext.fnolDuplicateContactListview.clickOnCell(-1, 0);
        }
    }

    async addBasicInformationForUnverifiedPolicy(){
        await fnolWizard_Ext.fnolBasicInfoReportedByNameDropdown.selectNthOption(1);  //Step2 Basic Information
        await fnolWizard.fNOLWizard_BasicInfoScreenClaim_ReportedByType.selectOptionByLabel(await testDataGenerator.basicInfoGenerator());
        await fnolWizard_Ext.fNOLWizardBasicInfoScreenClaimantNameDropdown.selectNthOption(1);
        await fnolWizard.fNOLWizardNext.click();
    }

    async addBasicInformationForVerifiedPolicy(){
        await fnolWizard.fNOLWizard_BasicInfoScreenClaim_ReportedByType.selectOptionByLabel(await testDataGenerator.basicInfoGenerator());
        await fnolWizard_Ext.fNOLWizardBasicInfoScreenClaimantNameDropdown.selectNthOption(1);
        await fnolWizard.fNOLWizardNext.click();
        
    }

    async addClaimInformationForUnverifiedPolicy(){
        await t.typeText(fnolWizard_Ext.fnolWizardNewLossDetailsScreenOccurenceDescription.component, "test");
        await fnolWizard.fNOLWizard_NewLossDetailsScreenDateReportedtoEmployer.setValue(await this.getPastDate());  //Add Claim Information
        await this.addReporterEmployerTime();
        await fnolWizard_Ext.fnolReportedDate.setValue(await this.getPastDate());
        await this.addReportedTime();
        await fnolWizard_Ext.fnolUnverifiedDateToAgentReport.setValue(await this.getPastDate());
        await this.addReportToAgentTime();
        await fnolWizard_Ext.fNOLWizardNewLossDetailsScreenInjurySeverityTimeLossReport.selectRadioButtonByLabel(await testDataGenerator.addClaimInformationGenerator("Indemnity"));
        await fnolWizard_Ext.fnolSafetyEquipmentProvided.selectRadioButtonByLabel("Yes");
        await fnolWizard_Ext.fnolSafetyEquipmentUsed.selectRadioButtonByLabel("Yes");
        await fnolWizard_Ext.fnolAccidentPremises.selectOptionByLabel("Employer");
        await fnolWizard.fNOLWizardFullWizardStepSetFNOLWizard_NewLossDetailsScreenCCAddressInputSetglobalAddressContainerAddress_Picker.selectNthOption(1);    
        await fnolWizard_Ext.fnolWizardVerifiedPolicyAddressLine1.setValue(t.ctx.contactAddressAddressLine);
        await fnolWizard_Ext.fnolWizardVerifiedPolicyState.selectOptionByLabel(t.ctx.contactAddressState);
        await t.pressKey('tab');
        await fnolWizard_Ext.fnolWizardAddClaimInformationVerifiedButton.click();   
        await fnolWizard_Ext.fnolWizardOverrideRadioButton.selectRadioButtonByLabel("Yes");
        await fnolWizard_Ext.fNOLWizardNewLossDetailsScreenInjuryDescription.setValue("Injury");
        await this.severityDeathReport();
        await this.severityMedicalReport();
        await fnolWizard_Ext.fnolWizardNewLossDetailsScreenSeverity.selectOptionByLabel(await testDataGenerator.addClaimInformationGenerator("Severity")); 
        await this.injuries();
        await fnolWizard.fNOLWizardNext.click(); 
    }

    async addClaimInformationForVerifiedPolicy(){
        await t.typeText(fnolWizard_Ext.fnolWizardNewLossDetailsScreenOccurenceDescription.component, "test");
        await fnolWizard.fNOLWizard_NewLossDetailsScreenDateReportedtoEmployer.setValue(await this.getPastDate());  //Add Claim Information
        await this.addReporterEmployerTime();
        await fnolWizard_Ext.fnolReportedDate.setValue(await this.getPastDate());
        await this.addReportedTime();
        await fnolWizard_Ext.fnolUnverifiedDateToAgentReport.setValue(await this.getPastDate());
        await this.addReportToAgentTime();
        await fnolWizard_Ext.fNOLWizardNewLossDetailsScreenInjurySeverityTimeLossReport.selectRadioButtonByLabel(await testDataGenerator.addClaimInformationGenerator("Indemnity"));
        await fnolWizard_Ext.fnolSafetyEquipmentProvided.selectRadioButtonByLabel("Yes");
        await fnolWizard_Ext.fnolSafetyEquipmentUsed.selectRadioButtonByLabel("Yes");
        await fnolWizard_Ext.fnolAccidentPremises.selectOptionByLabel("Employer");
        await fnolWizard.fNOLWizardFullWizardStepSetFNOLWizard_NewLossDetailsScreenCCAddressInputSetglobalAddressContainerAddress_Picker.selectNthOption(1);   
        await fnolWizard_Ext.fNOLWizardNewLossDetailsScreenInjuryDescription.setValue("Injury");
        await this.severityDeathReport();
        await this.severityMedicalReport();
        await fnolWizard_Ext.fnolWizardNewLossDetailsScreenSeverity.selectOptionByLabel(await testDataGenerator.addClaimInformationGenerator("Severity")); 
        await this.injuries();
        await fnolWizard.fNOLWizardNext.click();  
    }

    async injuries(){
        let injury = await testDataGenerator.injuryGenerator();
        await fnolWizard.fNOLWizard_NewLossDetailsScreenClaim_InjuryIllnessCause.selectOptionByLabel(injury.causeOfInjury);
        await fnolWizard.fNOLWizard_NewLossDetailsScreenClaim_AccidentType.selectOptionByLabel(injury.detailedCause[Math.floor(Math.random() * injury.detailedCause.length)]);

        let injuryType = await testDataGenerator.injuryTypeGenerator();
        await fnolWizard_Ext.fnolWizardNewLossDetailsInjuryType.selectOptionByLabel(injuryType.primaryInjuryType);
        await fnolWizard_Ext.fnolWizardNewLossDetailsDetailedInjuryType.selectOptionByLabel(injuryType.detailedInjuryType[Math.floor(Math.random() * injuryType.detailedInjuryType.length)])
        await this.bodyPartDetails();
    }

    async severityDeathReport(){
        await fnolWizard_Ext.fNOLWizardNewLossDetailsScreenInjurySeverityDeathReport.selectRadioButtonByLabel(await testDataGenerator.addClaimInformationGenerator("Injury Severity report"));
        
        if (await fnolWizard_Ext.fnolWizardNewLossDetailsDateOfDeath.component.visible){
            await fnolWizard_Ext.fnolWizardNewLossDetailsDateOfDeath.setValue(await this.getPastDate());
        }
    }

    async severityMedicalReport(){
        await fnolWizard_Ext.fNOLWizardNewLossDetailsScreenInjurySeverityMedicalReport.selectRadioButtonByLabel(await testDataGenerator.addClaimInformationGenerator("Severity Medical report"));
        
        if (await fnolWizard_Ext.fnolWizardNewLossDetailsInitialtreatment.component.visible){
            await fnolWizard_Ext.fnolWizardNewLossDetailsInitialtreatment.selectNthOption(1);
            await fnolWizard_Ext.fnolWizardNewLossDetailsTreatmentType.selectNthOption(1);    
        }
    }

    async bodyPartDetails(){
        let bodyPartsField = await testDataGenerator.bodyPartsGenerator();
        let bodyPartListview = await fnolWizard_Ext.fnolNewLossDetailsBodyPartListView.rowCount() - 1;
        let areaBodyField = await fnolWizard_Ext.fnolNewLossDetailsBodyPartListView.getCellByColumnName(bodyPartListview, "Area of Body");
        let areaOfBody = PcfSelectInput(areaBodyField);
        await areaOfBody.selectOptionByLabel(bodyPartsField.areaOfBody);
        await t.wait(2000);
        
        let bodyPartField = await fnolWizard_Ext.fnolNewLossDetailsBodyPartListView.getCellByColumnName(bodyPartListview, "Body Part");
        let bodyPart = PcfSelectInput(bodyPartField);
        await bodyPart.selectOptionByLabel(bodyPartsField.bodyPart[Math.floor(Math.random() * bodyPartsField.bodyPart.length)]);

        let sideDropdown = await fnolWizard_Ext.fnolNewLossDetailsBodyPartListView.component.find('td[id$=-DetailedBodyPartSide_Cell]').find('div.gw-TypeKeyValueWidget[id$=-DetailedBodyPartSide]');
        let sideDropdowns = PcfSelectInput(sideDropdown);

        if(await sideDropdowns.component.visible){
            let bodyPartSideField = await fnolWizard_Ext.fnolNewLossDetailsBodyPartListView.getCellByColumnName(bodyPartListview, "Side");
            let bodyPartsSide = PcfSelectInput(bodyPartSideField);
            await bodyPartsSide.selectNthOption(1);
        }
    }

    async assignAndCreateClaim(){
        await fnolWizard.fNOLWizardFinish.click();  //Save and Assigned Claim
    }

    async searchForAPolicy(){
        await fnolWizard_Ext.claimTabBarMoreOptions.click();
        await claimTabBar.claimTabClaimTab_FNOLWizard.click();
        await fnolWizard_Ext.fnolWizardPolicyNumberTextBox.setValue("123sadsad");
        await fnolWizard_Ext.fnolWizardLossDate.setValue(await this.getPastDate());
        await fnolWizard_Ext.fnolPolicySearchButton.click();
    }

    async addReportToAgentTime(){
        let dateReportToAgentTime = await fnolWizard_Ext.fnolUnverifiedDateToAgentReport.component.find('input').withAttribute('name','FNOLWizard-FullWizardStepSet-FNOLWizard_NewLossDetailsScreen-Claim_DateReportedToAgent_Ext_time');
        let time = await this.getHours();
        await t.typeText(dateReportToAgentTime, time);
    }

    async addReportedTime(){
        let dateReportedTime = await fnolWizard_Ext.fnolReportedDate.component.find('input').withAttribute('name','FNOLWizard-FullWizardStepSet-FNOLWizard_NewLossDetailsScreen-Claim_ReportedDate_time');
        let time = await this.getHours();
        await t.typeText(dateReportedTime, time);
    }

    async addReporterEmployerTime(){
        let reporterEmployerTime = await fnolWizard.fNOLWizard_NewLossDetailsScreenDateReportedtoEmployer.component.find('input').withAttribute('name','FNOLWizard-FullWizardStepSet-FNOLWizard_NewLossDetailsScreen-DateReportedtoEmployer_time');
        let time = await this.getHours();
        await t.typeText(reporterEmployerTime, time);
    }

    async generatePolicyNumbers(length){ // Method usage: Returns a random generated string.
        var result = ''; // Object to save the generated string
        var characters = '1234567890'; // characters to be used in the generation
        var charactersLength = characters.length; // counts the length of object 'character' and save it to obj charactersLength
        for ( var i = 0; i < length; i++ ) { // Used loop to add random characters and form it as string
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return "EWC08"+result; // returns the random generated string
    }

    async getExpirationDate(){
        const currentDate = new Date();
        const mm = String(currentDate.getMonth() + 1).padStart(2, '0');
        const dd = String(currentDate.getDate()).padStart(2, '0');
        const yyyy = currentDate.getFullYear() + 1;
        return mm + '/' + dd + '/' + yyyy;
    }

    async getPastYear(){
        const currentDate = new Date();
        const mm = String(currentDate.getMonth() + 1).padStart(2, '0');
        const dd = String(currentDate.getDate()).padStart(2, '0');
        const yyyy = currentDate.getFullYear() - 1;
        return mm + '/' + dd + '/' + yyyy;
    }

    async getDateToday() {
        let date = new Date();
        date.setDate(date.getDate());
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        });
    }

    async getPastDate() {
        let date = new Date();
        date.setDate(date.getDate() - 1);
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        });
    }

    async getHours(){
        let time = new Date();
        let options = { hour: 'numeric', minute: 'numeric', hour12: true};
        return time.toLocaleString('en-US', options);
    }

    async saveClaimNumber(){
        let claimSaveHeader = await fnolWizard_Ext.claimNumber.component.find('.gw-label').innerText;
        t.ctx.claimNumber = claimSaveHeader.substring(5,14);
        console.log("Claim Number:" + t.ctx.claimNumber);
    }

    async goToClaim(){
        await newClaimSaved.newClaimSavedDVGoToClaim.click();
        t.ctx.contactName = await fnolWizard_Ext.claimantName.component.find('.gw-infoValue').innerText;
        t.ctx.contactLastName = t.ctx.contactName.substring(t.ctx.contactName.lastIndexOf(" ")+1);
    }
}
