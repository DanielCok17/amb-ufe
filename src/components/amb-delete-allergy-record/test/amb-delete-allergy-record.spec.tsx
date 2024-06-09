import { newSpecPage } from '@stencil/core/testing';
import { AmbDeleteAllergyRecord } from '../amb-delete-allergy-record';

describe('amb-delete-allergy-record', () => {
  it('renders with delete button', async () => {
    const page = await newSpecPage({
      components: [AmbDeleteAllergyRecord],
      html: `<amb-delete-allergy-record allergy-id="1"></amb-delete-allergy-record>`,
    });
    expect(page.root).toEqualHtml(`
      <amb-delete-allergy-record allergy-id="1">
        <mock:shadow-root>
          <h2>Delete Allergy Record</h2>
          <md-filled-button>Delete</md-filled-button>
        </mock:shadow-root>
      </amb-delete-allergy-record>
    `);
  });
});
