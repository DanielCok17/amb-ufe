import { newSpecPage } from '@stencil/core/testing';
import { AmbMedRecordsAccess } from '../amb-med-records-access';

describe('amb-med-records-access', () => {
  it('renders with static data', async () => {
    const page = await newSpecPage({
      components: [AmbMedRecordsAccess],
      html: `<amb-med-records-access></amb-med-records-access>`,
    });
    expect(page.root).toEqualHtml(`
      <amb-med-records-access>
        <mock:shadow-root>
          <h2>Specialized Medical Records</h2>
          <ul>
            <li>Record 1 details</li>
            <li>Record 2 details</li>
            <li>Record 3 details</li>
          </ul>
          <md-filled-button>
          Back to Home
        </md-filled-button>
        </mock:shadow-root>
      </amb-med-records-access>
    `);
  });
});
