import { PcfButton, PcfListView, PcfSelectInput } from "@gtui/gt-ui-framework";

export class RecoveryPages{
    createRecoveryPayer = PcfSelectInput("#NewRecoverySet-NewRecoveryScreen-RecoveryDetailDV-Payer");
    createRecoveryreserveLine = PcfSelectInput("#NewRecoverySet-NewRecoveryScreen-RecoveryDetailDV-ReserveLineInputSet-ReserveLine");
    createRecoveryCategory = PcfSelectInput("#NewRecoverySet-NewRecoveryScreen-RecoveryDetailDV-RecoveryCategory");
    createRecoveryLineItemsListview = PcfListView("#NewRecoverySet-NewRecoveryScreen-RecoveryDetailDV-EditableRecoveryLineItemsLV");
    createRecoveryUpdateButton = PcfButton("#NewRecoverySet-NewRecoveryScreen-Update");
    createRecoveryReserveLineAddButton = PcfButton("#NewRecoveryReserveSet-NewReserveSetScreen-Add");
    createRecoveryReserveListView = PcfListView("#NewRecoveryReserveSet-NewReserveSetScreen-RecoveryReservesSummaryDV-EditableRecoveryReservesLV");
    createRecoveryReserveLineUpdateButton = PcfButton("#NewRecoveryReserveSet-NewReserveSetScreen-Update");
}