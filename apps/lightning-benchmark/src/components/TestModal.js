import {Combobox, Lookup, Modal} from "@salesforce/design-system-react";
import {useState} from "react";

const leadSourceOptions = [
    { id: 1, label: 'Third Party Program', value: 'A0' },
    { id: 2, label: 'Cold Call', value: 'B0' },
    { id: 3, label: 'LinkedIn', value: 'C0' },
    { id: 4, label: 'Direct Mail', value: 'D0' },
    { id: 5, label: 'Other', value: 'E0' },
];

const opportunityTypeOptions = [
    { id: 1, label: 'Add on Business', value: 'A0' },
    { id: 2, label: 'Courtesy', value: 'B0' },
    { id: 3, label: 'New Business', value: 'C0' },
    { id: 4, label: 'Renewal', value: 'D0' },
    { id: 5, label: 'Upgrade', value: 'E0' },
];

export const TestModal = ({opened, setter, sv, tv}) => {
    const [leadSourceSelection, setLeadSourceSelection] = useState(leadSourceOptions[0]);
    const [opportunityTypeSelection, setOpportunityTypeSelection] = useState(opportunityTypeOptions[0]);

    return (
        <Modal
            isOpen={opened}
            onRequestClose={_=>setter(false)}
            size="small"
            heading={"New Opportunity"+(tv ? "(3)" : sv ? "(2)" : "(1)")}
        >
            <section className="slds-p-around_large">
                <div className="slds-form-element slds-m-bottom_large">
                    <label className="slds-form-element__label" htmlFor="opptyName">
                        Opportunity Name
                    </label>
                    <div className="slds-form-element__control">
                        <input
                            id="opptyName"
                            className="slds-input"
                            type="text"
                            placeholder="Enter name"
                        />
                    </div>
                </div>
                <div className="slds-form-element slds-m-bottom_large">
                    <label
                        className="slds-form-element__label"
                        htmlFor="description"
                    >
                        Opportunity Description
                    </label>
                    <div className="slds-form-element__control">
									<textarea
                                        id="description"
                                        className="slds-textarea"
                                        placeholder="Enter description"
                                    />
                    </div>
                </div>
                <div className="slds-form-element slds-m-bottom_large">
                    <Lookup
                        emptyMessage="No items found"
                        hasError={false}
                        label="Account"
                        onChange={(newValue) => {
                            console.log('New search term: ', newValue);
                        }}
                        onSelect={(item) => {
                            console.log(item, ' Selected');
                        }}
                        options={[
                            { type: 'section', label: 'SECTION 1' },
                            { label: "Paddy's Pub" },
                            { label: 'Tyrell Corp' },
                            { type: 'section', label: 'SECTION 2' },
                            { label: 'Paper St. Soap Company' },
                            { label: 'Nakatomi Investments' },
                            { label: 'Acme Landscaping' },
                            { type: 'section', label: 'SECTION 3' },
                            { label: 'Acme Construction' },
                        ]}
                        sectionDividerRenderer={Lookup.DefaultSectionDivider}
                    />
                </div>
                <div className="slds-m-bottom_large">
                    <Combobox
                        events={{
                            onSelect: (event, data) => {
                                const selection =
                                    data.selection.length === 0
                                        ? leadSourceSelection
                                        : data.selection;
                                setLeadSourceSelection(selection);
                            },
                        }}
                        labels={{
                            label: 'Lead Source',
                            placeholder: 'Select Lead Source',
                        }}
                        menuPosition="relative"
                        options={leadSourceOptions}
                        selection={leadSourceSelection}
                        variant="readonly"
                    />
                </div>
                <div className="slds-m-bottom_large">
                    <Combobox
                        events={{
                            onSelect: (event, data) => {
                                const selection =
                                    data.selection.length === 0
                                        ? opportunityTypeSelection
                                        : data.selection;
                                console.log('selected: ', selection[0].label);
                                setOpportunityTypeSelection(selection);
                            },
                        }}
                        labels={{
                            label: 'Type',
                            placeholder: 'Select Opportunity Type',
                        }}
                        menuPosition="relative"
                        options={opportunityTypeOptions}
                        selection={opportunityTypeSelection}
                        variant="readonly"
                    />
                </div>
                <div className="slds-form-element slds-m-bottom_large">
                    <label className="slds-form-element__label" htmlFor="amount">
                        Amount
                    </label>
                    <div className="slds-form-element__control">
                        <input
                            id="amount"
                            className="slds-input"
                            type="text"
                            placeholder="Enter Amount"
                        />
                    </div>
                </div>
            </section>
        </Modal>
    )
}