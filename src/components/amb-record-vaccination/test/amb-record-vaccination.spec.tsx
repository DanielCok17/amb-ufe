import { newSpecPage } from '@stencil/core/testing';
import { AmbRecordVaccination } from '../amb-record-vaccination';

describe('amb-record-vaccination', () => {
  it('renders the form', async () => {
    const page = await newSpecPage({
      components: [AmbRecordVaccination],
      html: `<amb-record-vaccination></amb-record-vaccination>`,
    });
    expect(page.root).toEqualHtml(`
      <amb-record-vaccination>
        <mock:shadow-root>
          <h2>Record Vaccination</h2>
          <form>
            <md-filled-text-field label="Date" name="date"></md-filled-text-field>
            <md-filled-text-field label="Time" name="time"></md-filled-text-field>
            <md-filled-text-field label="Type" name="type"></md-filled-text-field>
            <md-filled-text-field label="Dose" name="dose"></md-filled-text-field>
            <md-filled-text-field label="Batch" name="batch"></md-filled-text-field>
            <md-filled-text-field label="Observations" name="observations"></md-filled-text-field>
            <md-filled-text-field label="Side Effects" name="sideEffects"></md-filled-text-field>
            <md-filled-button type="submit">Record</md-filled-button>
          </form>
        </mock:shadow-root>
      </amb-record-vaccination>
    `);
  });
});
