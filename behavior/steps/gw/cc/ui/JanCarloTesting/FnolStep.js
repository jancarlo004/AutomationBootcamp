'use strict'
import { onApp } from "../../../../../../ui/pages/gw/registry/onApp"
import { FnolScenario } from "../../../../../../ui/actions/cc/ui/JanCarloTesting/FnolScenario";
// import { ViewClaimScenario } from "../../../../../ui/actions/cc/cincinnati/ViewClaimScenario";
// import { CheckSearchScenario } from "../../../../../ui/actions/cc/cincinnati/CheckSearchScenario";
// import { SpecificScenario } from "../../../../../ui/actions/cc/cincinnati/SpecificScenario";
// import { AddressVerification } from "../../../../../ui/actions/cc/cincinnati/AddressVerification";

const {Given, When, Then} = require("@cucumber/cucumber");
const onCCApp = new onApp("CC");
const fnolnScenario = new FnolScenario();
// const viewClaimScenario = new ViewClaimScenario();
// const checkSearchScenario = new CheckSearchScenario();
// const specificScenario = new SpecificScenario();
// const addressVerification = new AddressVerification();

Given(/^I login to Claim Center with Adjuster Role$/, async function(){
    await onCCApp.loginWithUser('su','gw');  
});

When(/^I create a claim/, async function(){
    await fnolnScenario.claimCreation("Workers' Compensation");
});

// Then(/^Claim is created$/, async function(){
//     await fnolnScenario.verifyClaimIsCreated("New Claim Saved");
// });

// When(/^I view the Claim$/, async function(){
//     await viewClaimScenario.viewingClaim();
// });

// Then(/^Claim summary is displayed$/, async function(){
//     await viewClaimScenario.verifyClaimSummaryIsDisplayed("Summary");
// });

// When(/^claim is opened$/, async function(){
//     await fnolnScenario.goToClaim();
// });

// When(/^I create (.*) claims$/, async function(t, stepArguments){
//     let numberOfClaim = stepArguments[0];
    
//     for (let i = 0; i < numberOfClaim; i++) {
//         await fnolnScenario.claimCreation("Workers' Compensation");
//     }
// });

// When(/^I create (.*) claims with checks$/, async function(t, stepArguments){
//     let numberOfClaimWithCheck = stepArguments[0];
    
//     for (let i = 0; i < numberOfClaimWithCheck; i++) {
//         await fnolnScenario.claimCreation("Workers' Compensation");
//         await fnolnScenario.goToClaim();
//         await checkSearchScenario.createcheck();
//     }
// });

// When(/^claim is created with (.*) policy number$/, async function(t, stepArguments){
//     let policyNumber = stepArguments[0];

//     await specificScenario.claimCreationWithSpecificPolicyNumber("Workers' Compensation", policyNumber);
//     await fnolnScenario.goToClaim();
// });

// When(/^I add verifying address and validate$/, async function(){
//     await addressVerification.addAndVerifyAddress("Workers' Compensation");
// });

// Then(/^Address is verified$/, async function(){
//     await addressVerification.verifyAddressStatus();
// });