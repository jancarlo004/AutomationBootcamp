import { PcfButton, PcfComponent, PcfListView } from "@gtui/gt-ui-framework";
import { Selector } from "testcafe";

export class ContactManagerPages {
    contactsTabBarMoreOptions = PcfButton("#TabBar-ContactsTab > div.gw-action--expand-button > div");
    contactsPendingChanges = PcfComponent("#TabBar-ContactsTab-ABContacts_PendingChanges");
    contactsPendingChangesCreateTab = PcfComponent("#PendingChanges-PendingChangesScreen-CreatesCardTab");
    contactsPendingChangesListview = PcfListView("#PendingChanges-PendingChangesScreen-PendingCreatesListDetailPanel-PendingContactCreateDetailedLV");
    contactsPendingChangesApproveButton = PcfComponent("#PendingChanges-PendingChangesScreen-PendingCreatesListDetailPanel-PendingContactCreateDetailedLV_tb-PendingContactCreate_ApproveButton");
    contactsNexButton = PcfComponent("#PendingChanges-PendingChangesScreen-PendingCreatesListDetailPanel-PendingContactCreateDetailedLV-_ListPaging-next");
    contactsPagingInput = PcfComponent("#PendingChanges-PendingChangesScreen-PendingCreatesListDetailPanel-PendingContactCreateDetailedLV-_ListPaging-input");
    contactsPostLabel = PcfComponent("#PendingChanges-PendingChangesScreen-PendingCreatesListDetailPanel-PendingContactCreateDetailedLV-_ListPaging-postLabel");
    pendingScreenContact = Selector('td[id$=-Contact_Cell]');
}