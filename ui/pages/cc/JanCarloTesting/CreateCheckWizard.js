import { PcfSelectInput, PcfComponent, PcfTextInput, PcfButton, PcfListView, PcfDateValueInput} from "@gtui/gt-ui-framework";

export class CreateCheckWizard{
    claimsMenuActionsNewTransactionCheck = PcfComponent("#Claim-ClaimMenuActions-ClaimMenuActions_NewTransaction-ClaimMenuActions_NewOtherTrans-ClaimMenuActions_NewTransaction_Check");
    newManualCheckPrimaryPayeeNameDropdown = PcfSelectInput("#NormalCreateCheckWizard-CheckWizard_CheckPayeesScreen-NewCheckPayeeDV-PrimaryPayee_Name");
    normalCreateCheckWizardInsuredPayType = PcfSelectInput("#NormalCreateCheckWizard-CheckWizard_CheckPayeesScreen-NewCheckPayeeDV-InsurPayInputSetRef-InsurPay_AccInputSet-InsurPayType");
    normalCreateCheckWizardInsuredPayTypeMethod  = PcfSelectInput("#NormalCreateCheckWizard-CheckWizard_CheckPayeesScreen-NewCheckPayeeDV-InsurPayInputSetRef-InsurPay_AccInputSet-InsurPayMethodEdit");
    newManualCheckPrimaryPayeeTypePay= PcfSelectInput("#ManualCreateCheckWizard-ManualCheckWizard_CheckPayeesScreen-NewManualCheckPayeeDV-PrimaryPayee_Type");
    newManualCheckPayToOrderOfTextBox = PcfTextInput("#ManualCreateCheckWizard-ManualCheckWizard_CheckPayeesScreen-NewManualCheckPayeeDV-Check_PayTo");
    newManualCheckRecepientTextBox = PcfTextInput("#ManualCreateCheckWizard-ManualCheckWizard_CheckPayeesScreen-NewManualCheckPayeeDV-Check_MailToContact");
    normalCreateCheckNextButton = PcfButton("#NormalCreateCheckWizard-Next");
    normalCheckDateOfService = PcfDateValueInput("#NormalCreateCheckWizard-CheckWizard_CheckInstructionsScreen-NewPaymentInstructionsDV-CheckWizardCheckSummaryInputSet-Check_DateOfService");
    normalCheckServicePeriodStart = PcfDateValueInput("#NormalCreateCheckWizard-CheckWizard_CheckInstructionsScreen-NewPaymentInstructionsDV-CheckWizardCheckSummaryInputSet-ServicePeriod_Start");
    normalCheckServicePeriodEnd = PcfDateValueInput("#NormalCreateCheckWizard-CheckWizard_CheckInstructionsScreen-NewPaymentInstructionsDV-CheckWizardCheckSummaryInputSet-ServicePeriod_End");
    normalCheckInvoiceNumber = PcfTextInput("#NormalCreateCheckWizard-CheckWizard_CheckInstructionsScreen-NewPaymentInstructionsDV-CheckWizardCheckSummaryInputSet-Check_InvoiceNumber");
    normalCheckCheckNumber = PcfTextInput("#NormalCreateCheckWizard-CheckWizard_CheckInstructionsScreen-NewPaymentInstructionsDV-CheckWizardCheckSummaryInputSet-Check_CheckNumber");
    normalCheckConfirmCheckNumber = PcfTextInput("#NormalCreateCheckWizard-CheckWizard_CheckInstructionsScreen-NewPaymentInstructionsDV-CheckWizardCheckSummaryInputSet-Check_ConfirmCheckNumber");
    newPaymentBenefitCategory = PcfComponent("#NormalCreateCheckWizard-CheckWizard_CheckPaymentsScreen-NewCheckPaymentPanelSet-NewPaymentDetailDV-Payment_BenefitInputSet_SP-WCPaymentBenefitInputSet-Payment_BenefitCategory_Input");
    newPaymentBenefitCategory = PcfSelectInput("#ManualCreateCheckWizard-ManualCheckWizard_CheckPaymentsScreen-NewCheckPaymentPanelSet-NewPaymentDetailDV-Payment_BenefitInputSet_SP-WCPaymentBenefitInputSet-Payment_BenefitCategory");
    normalCreateCheckPaymentReserveLineDropdown = PcfSelectInput("#NormalCreateCheckWizard-CheckWizard_CheckPaymentsScreen-NewCheckPaymentPanelSet-NewPaymentDetailDV-ReserveLineInputSet-ReserveLine");
    normalCreateCheckPaymentTypeDropdown = PcfSelectInput("#NormalCreateCheckWizard-CheckWizard_CheckPaymentsScreen-NewCheckPaymentPanelSet-NewPaymentDetailDV-Payment_PaymentType");
    normalCreateCheckBenefitDropdown = PcfSelectInput("#NormalCreateCheckWizard-CheckWizard_CheckPaymentsScreen-NewCheckPaymentPanelSet-NewPaymentDetailDV-Payment_BenefitInputSet_SP-WCPaymentBenefitInputSet-Payment_BenefitCategory");
    normalCreateCheckPaymentLineItemsListView = PcfListView("#NormalCreateCheckWizard-CheckWizard_CheckPaymentsScreen-NewCheckPaymentPanelSet-NewPaymentDetailDV-EditablePaymentLineItemsLV");
    normalCreateCheckFinishButton = PcfButton("#NormalCreateCheckWizard-Finish");
    manualCheckUnverifiedPolicyWarningMessage = PcfComponent("#WebMessageWorksheet-WebMessageWorksheetScreen-grpMsgs");
    claimMenuActionsNewTransactionNewOtherTrans = PcfComponent("#Claim-ClaimMenuActions-ClaimMenuActions_NewTransaction-ClaimMenuActions_NewOtherTrans");
    claimsMenuActionsNewTransactionCheckMenu = PcfComponent("#Claim-ClaimMenuActions-ClaimMenuActions_NewTransaction-ClaimMenuActions_NewTransaction_CheckSet");
    claimsCreateCheckValidation = PcfComponent("#WebMessageWorksheet-WebMessageWorksheetScreen-grpMsgs");
    claimsMenuActionNewTransactionReserveWorksheet = PcfComponent("#Claim-ClaimMenuActions-ClaimMenuActions_NewTransaction-ClaimMenuActions_NewTransaction_ReserveWorksheet_SP");
    paymentSearchClaimNumber = PcfTextInput("#PaymentSearch-PaymentSearchScreen-PaymentSearchDV-PaymentSearchRequiredInputSet-ClaimNumber");
    paymentSearchUpdateButton = PcfButton("#PaymentSearch-PaymentSearchScreen-PaymentSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search");
    paymentSearchListView = PcfListView("#PaymentSearch-PaymentSearchScreen-2");
    checkListview = PcfListView("#ClaimFinancialsChecks-ClaimFinancialsChecksScreen-ChecksLV");
}
