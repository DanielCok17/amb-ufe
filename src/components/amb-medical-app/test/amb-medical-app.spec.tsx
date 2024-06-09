import { newSpecPage } from '@stencil/core/testing';
import { AmbMedicalApp } from '../amb-medical-app';

describe('amb-medical-app', () => {
  it('renders the home page with buttons', async () => {
    const page = await newSpecPage({
      components: [AmbMedicalApp],
      html: `<amb-medical-app base-path="/medical/"></amb-medical-app>`,
    });
    page.win.navigation = new EventTarget();
    expect(page.root).toEqualHtml(`
      <amb-medical-app base-path="/medical/">
        <mock:shadow-root>
          <div>
            <h1>Welcome to the Medical Application</h1>
            <md-filled-button>Access Medical Records</md-filled-button>
            <md-filled-button>Record Vaccination</md-filled-button>
            <md-filled-button>Update Lab Results</md-filled-button>
            <md-filled-button>Delete Allergy Record</md-filled-button>
          </div>
        </mock:shadow-root>
      </amb-medical-app>
    `);
  });
});
