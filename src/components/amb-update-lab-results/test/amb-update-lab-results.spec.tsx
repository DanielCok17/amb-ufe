import { newSpecPage } from '@stencil/core/testing';
import { AmbUpdateLabResults } from '../amb-update-lab-results';

describe('amb-update-lab-results', () => {
  it('renders the form with initial data', async () => {
    const page = await newSpecPage({
      components: [AmbUpdateLabResults],
      html: `<amb-update-lab-results></amb-update-lab-results>`,
    });
    expect(page.root).toEqualHtml(`
      <amb-update-lab-results>
        <mock:shadow-root>
          <h2>Update Lab Results</h2>
          <md-filled-text-field label="Lab Results" value="Initial lab results"></md-filled-text-field>
          <md-filled-button>Update</md-filled-button>
          <md-filled-button>
          Back to Home
        </md-filled-button>
        </mock:shadow-root>
      </amb-update-lab-results>
    `);
  });
});
