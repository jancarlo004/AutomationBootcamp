import { PcfButton, PcfComponent, PcfDateValueInput, PcfSelectInput } from "@gtui/gt-ui-framework";
import { PcfRadioButton } from "../../../pages/cc/components/PcfRadioButton";

export class LossDetailsPages{
    claimLossDetailsWaivedDeductible = PcfRadioButton("#ClaimLossDetails-ClaimLossDetailsScreen-LossDetailsPanelSet-LossDetailsCardCV-LossDetailsDV-DedUncollectibleWaived_Ext");
    claimLossDetailsCompensabilityfactorsClaimEmploymentInjury = PcfRadioButton("#ClaimLossDetails-ClaimLossDetailsScreen-LossDetailsPanelSet-LossDetailsCardCV-LossDetailsDV-CompensabilityFactorsInputSet-Claim_EmploymentInjury");
    claimLossDetailsCompensabilityfactorsInjuredOnRegularJob = PcfRadioButton("#ClaimLossDetails-ClaimLossDetailsScreen-LossDetailsPanelSet-LossDetailsCardCV-LossDetailsDV-CompensabilityFactorsInputSet-InjuredOnRegularJob");
    claimLossDetailsCompensabilityfactorsEmployerQuestionValidity = PcfRadioButton("#ClaimLossDetails-ClaimLossDetailsScreen-LossDetailsPanelSet-LossDetailsCardCV-LossDetailsDV-CompensabilityFactorsInputSet-EmployerQuestionsValidity");
    claimLossDetailsCompensabilityfactorsSafetyEquipmentProvided = PcfRadioButton("#ClaimLossDetails-ClaimLossDetailsScreen-LossDetailsPanelSet-LossDetailsCardCV-LossDetailsDV-CompensabilityFactorsInputSet-SafetyEquipmentProvided");
    claimLossDetailsCompensabilityfactorsSafetyEquipmentUsed = PcfRadioButton("#ClaimLossDetails-ClaimLossDetailsScreen-LossDetailsPanelSet-LossDetailsCardCV-LossDetailsDV-CompensabilityFactorsInputSet-SafetyEquipmentUsed");
    claimLossDetailsCompensabilityfactorsSafetyDrugsInvolved = PcfRadioButton("#ClaimLossDetails-ClaimLossDetailsScreen-LossDetailsPanelSet-LossDetailsCardCV-LossDetailsDV-CompensabilityFactorsInputSet-DrugsInvolved");
    claimLossDetailsCompensabilityfactorsCompensableStatus = PcfSelectInput("#ClaimLossDetails-ClaimLossDetailsScreen-LossDetailsPanelSet-LossDetailsCardCV-LossDetailsDV-CompensabilityFactorsInputSet-CompensableInputSet-CompensableStatus");
    claimsLossDetailsLocationDropdown = PcfSelectInput("#ClaimLossDetails-ClaimLossDetailsScreen-LossDetailsPanelSet-LossDetailsCardCV-LossDetailsDV-LocationCode");
    claimLossDetailsCompensabilityfactorsCompensableWithLiability = PcfRadioButton("#ClaimLossDetails-ClaimLossDetailsScreen-LossDetailsPanelSet-LossDetailsCardCV-LossDetailsDV-CompensabilityFactorsInputSet-CompensableInputSet-compensateWithLiability_SP");
    claimLossDetailsClaimLateReport = PcfSelectInput("#ClaimLossDetails-ClaimLossDetailsScreen-LossDetailsPanelSet-LossDetailsCardCV-LossDetailsDV-ClaimLateReport_Ext");
    claimlossDetailsHireDate = PcfDateValueInput("#ClaimLossDetails-ClaimLossDetailsScreen-LossDetailsPanelSet-LossDetailsCardCV-LossDetailsDV-EmploymentData_HireDate");
    claimLossDetailsEmploymentStatus = PcfSelectInput("#ClaimLossDetails-ClaimLossDetailsScreen-LossDetailsPanelSet-LossDetailsCardCV-LossDetailsDV-EmploymentData_EmploymentStatus");
    claimLossDetailsAbsenteeIndicator = PcfRadioButton("#ClaimLossDetails-ClaimLossDetailsScreen-LossDetailsPanelSet-LossDetailsCardCV-LossDetailsDV-EmploymentData_AbseteeIssueIndicator_Ext");
    claimLossDetailsUpdateButton = PcfButton("#ClaimLossDetails-ClaimLossDetailsScreen-Update");
    claimLossDetailsAddClassCodeValidation = PcfComponent("#ClaimLossDetails-ClaimLossDetailsScreen-_msgs-0");
    claimLossDetailsCancelButton = PcfButton("#ClaimLossDetails-ClaimLossDetailsScreen-Cancel");
    claimLossDetailsEmploymentClaimClassCodeByLocation = PcfRadioButton("#ClaimLossDetails-ClaimLossDetailsScreen-LossDetailsPanelSet-LossDetailsCardCV-LossDetailsDV-EmploymentData_ClassCodeByLocation");
    claimLossDetailsEmploymentClassCode = PcfSelectInput("#ClaimLossDetails-ClaimLossDetailsScreen-LossDetailsPanelSet-LossDetailsCardCV-LossDetailsDV-EmploymentData_ClassCode");
}   