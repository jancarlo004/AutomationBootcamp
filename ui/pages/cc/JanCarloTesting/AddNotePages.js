import { PcfButton, PcfComponent, PcfListView, PcfSelectInput, PcfTextInput } from "@gtui/gt-ui-framework";
import { PcfRadioButton } from "../../../pages/cc/components/PcfRadioButton";

export class AddNotePages{
    claimMenuActionsNewNote = PcfComponent("#Claim-ClaimMenuActions-ClaimNewOtherMenuItemSet-ClaimMenuActions_NewOther-ClaimMenuActions_NewNote");
    newNoteScreenTopic = PcfSelectInput("#NewNoteWorksheet-NewNoteScreen-NoteDetailDV-Topic");
    newNoteSecurityType = PcfSelectInput("#NewNoteWorksheet-NewNoteScreen-NoteDetailDV-SecurityType");
    newNoteScreenRelatedTo = PcfSelectInput("#NewNoteWorksheet-NewNoteScreen-NoteDetailDV-RelatedTo");
    newNoteScreenDetailBody = PcfComponent("#NewNoteWorksheet-NewNoteScreen-NoteDetailDV-Body");
    newNoteScreenUpdateButton = PcfButton("#NewNoteWorksheet-NewNoteScreen-Update");
    claimsNoteListView = PcfListView("#ClaimNotes-NotesSearchScreen-ClaimNotesLV");
    claimNotesTab = PcfComponent("#Claim-MenuLinks-Claim_ClaimNotes");
    claimNotesFindText = PcfTextInput("#ClaimNotes-NotesSearchScreen-NoteSearchDV-TextSearch");
    claimNoteAuthor = PcfSelectInput("#ClaimNotes-NotesSearchScreen-NoteSearchDV-Author");
    claimNoteTopic = PcfSelectInput("#ClaimNotes-NotesSearchScreen-NoteSearchDV-Topic");
    claimNoteDate = PcfSelectInput("#ClaimNotes-NotesSearchScreen-NoteSearchDV-DateSearch2-DateSearch2RangeValue");
    claimNoteSearchButton = PcfButton("#ClaimNotes-NotesSearchScreen-NoteSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search");
    claimNoteEditLinkButton = PcfComponent("#ClaimNotes-NotesSearchScreen-ClaimNotesLV-0-EditLink");
    claimNoteUpdateButton = PcfButton("#EditNote-EditNoteScreen-Update");
    claimNoteEditScreenTopic = PcfSelectInput("#EditNote-EditNoteScreen-NoteDetailDV-Topic");
    claimNoteEditScreenSecurityType = PcfSelectInput("#EditNote-EditNoteScreen-NoteDetailDV-SecurityType");
    claimNoteEditScreenSubject = PcfTextInput("#EditNote-EditNoteScreen-NoteDetailDV-Subject_Input");
    claimNoteEditScreenRelatedTo = PcfSelectInput("#EditNote-EditNoteScreen-NoteDetailDV-RelatedTo");
    claimNoteEditScreenConfidential = PcfRadioButton("#EditNote-EditNoteScreen-NoteDetailDV-Confidential");
    claimNoteEditScreenBody = PcfComponent("#EditNote-EditNoteScreen-NoteDetailDV-Body");
}