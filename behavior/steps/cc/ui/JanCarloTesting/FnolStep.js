'use strict'
import { onApp } from "../../../../../ui/pages/gw/registry/onApp"
import { FnolScenario } from "../../../../../ui/actions/cc/ui/JanCarloTesting/FnolScenario.js";

const {Given, When, Then} = require("@cucumber/cucumber");
const onCCApp = new onApp("CC");
const fnolnScenario = new FnolScenario();

Given(/^I login to Claim Center with Adjuster Role$/, async function(){
    await onCCApp.loginWithUser('su','gw');  
});

When(/^I create a claim/, async function(){
    await fnolnScenario.claimCreation("Workers' Compensation");
});

