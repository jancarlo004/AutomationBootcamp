import { PcfButton, PcfCheckBox, PcfComponent, PcfListView, PcfSelectInput, PcfTextInput } from "@gtui/gt-ui-framework";

export class ReserveWorkSheetPages{
    reserveWorksheetMenuLink = PcfButton("#Claim-MenuLinks-Claim_SP_ReservePage");
    reserveWorksheetEditButton = PcfButton("#SP_ReservePage-Edit");
    reserveWorkSheetExpenseTab = PcfButton("#SP_ReservePage-ExpenseReserves_ExtTab");
    reserveWorksheetIndemnityListView = PcfListView("#SP_ReservePage-SP_WCExposureLevelExpenseReservePanelSet-indmLV");
    reserveWorksheetEmployerLiabilityListView = PcfListView("#SP_ReservePage-SP_WCExposureLevelExpenseReservePanelSet-empLiabLV");
    reserveWorksheetMedicalTab = PcfButton("#SP_ReservePage-MedicalTabTab");
    reserveWorksheetMedicalAddButton = PcfButton("#SP_ReservePage-MedicalIterator-0-WorksheetSectionLV-SP_WorksheetSectionLV_tb-Add");
    reserveWorksheetOtherListview = PcfListView("#SP_ReservePage-MedicalIterator-0-WorksheetSectionLV-SP_WorksheetSectionLV");
    reserveWorksheetClaimCostTab = PcfButton("#SP_ReservePage-ClaimCostReserveTab");
    reserveWorksheetClaimCostReserveAddButton = PcfButton("#SP_ReservePage-SP_WCClaimLevelExpenseReservePanelSet-Add");
    reserveWorksheetClaimCostReserveListview = PcfListView("#SP_ReservePage-SP_WCClaimLevelExpenseReservePanelSet");
    reserveWorksheetExpenseAddButton = PcfButton("#SP_ReservePage-SP_WCExposureLevelExpenseReservePanelSet-empLiabLV_tb-Add");
    reserveWorksheetIndemnityAddButton = PcfButton("#SP_ReservePage-SP_WCExposureLevelExpenseReservePanelSet-indmLV_tb-Add");
    reserveWorksheetExpenseListview = PcfListView("#SP_ReservePage-SP_WCExposureLevelExpenseReservePanelSet-empLiabLV"); 
    reserveWorksheetUpdateButton = PcfButton("#SP_ReservePage-Update");
    editReservesListview = PcfListView("#NewReserveSet-NewReserveSetScreen-ReservesSummaryDV-EditableReservesLV");
    addReserveUpdateButton = PcfButton("#NewReserveSet-NewReserveSetScreen-Update");
    reserveWorksheetClaimCostReserveUpdateButton = PcfButton("#SP_ReservePage-Update");
    reserveWorksheetUnverifiedPolicywarningMessage = PcfComponent('#WebMessageWorksheet-WebMessageWorksheetScreen-grpMsgs');
    reserveWorksheetAddClassCodeWarning = PcfComponent("#WebMessageWorksheet-WebMessageWorksheetScreen-grpMsgs-0");
}
