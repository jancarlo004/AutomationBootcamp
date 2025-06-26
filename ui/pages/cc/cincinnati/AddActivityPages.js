import { PcfButton, PcfComponent, PcfListView, PcfSelectInput } from "@gtui/gt-ui-framework";
import { PcfRadioButton } from "../../../pages/cc/components/PcfRadioButton";

export class AddActivityPages{
    claimMenuActionsNewActivity = PcfComponent("#Claim-ClaimMenuActions-ClaimMenuActions_NewActivity");
    newActivityUpdateButton = PcfButton("#NewActivity-NewActivityScreen-NewActivity_UpdateButton");
    claimWorkPlanListView = PcfListView("#ClaimWorkplan-ClaimWorkplanScreen-WorkplanLV");
    claimWorkPlanCompleteButton = PcfComponent("#ClaimWorkplan-ClaimWorkplanScreen-ClaimWorkplan_CompleteButton");
    claimWorkPlanAssignButton = PcfButton("#ClaimWorkplan-ClaimWorkplanScreen-ClaimWorkplan_AssignButton");
    claimWorkPlanvalidationMessage = PcfComponent("#ClaimWorkplan-ClaimWorkplanScreen-_msgs");
    claimWorkPlanAssignmentList = PcfSelectInput("#AssignActivitiesPopup-AssignmentPopupScreen-AssignmentPopupDV-SelectFromList");
    claimWorkPlanAssignmentButton = PcfButton("#AssignActivitiesPopup-AssignmentPopupScreen-AssignmentPopupDV-AssignmentPopupScreen_ButtonButton");
    claimWorkPlanCloseWorkSheet = PcfButton("#ActivityDetailWorksheet-ActivityDetailScreen-Close");
}