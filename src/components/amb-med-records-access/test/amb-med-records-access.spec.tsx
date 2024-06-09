// import { newSpecPage } from '@stencil/core/testing';
// import { AmbMedRecordsAccess } from '../amb-med-records-access';

// describe('amb-med-records-access', () => {
//   it('renders with static data', async () => {
//     const page = await newSpecPage({
//       components: [AmbMedRecordsAccess],
//       html: `<amb-med-records-access></amb-med-records-access>`,
//     });
//     expect(page.root).toEqualHtml(`
//       <amb-med-records-access>
//         <mock:shadow-root>
//           <h2>Specialized Medical Records</h2>
//           <ul>
//             <li>Record 1 details</li>
//             <li>Record 2 details</li>
//             <li>Record 3 details</li>
//           </ul>
//           <md-filled-button>
//           Back to Home
//         </md-filled-button>
//         </mock:shadow-root>
//       </amb-med-records-access>
//     `);
//   });
// });

import { newSpecPage } from '@stencil/core/testing';
import { AmbMedRecordsAccess } from '../amb-med-records-access';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('amb-med-records-access', () => {
  let mock: MockAdapter;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  it('renders with all medical records and their details', async () => {
    mock.onGet('http://localhost:5005/api/medical-records').reply(200, [
      { id: '1', details: 'Record 1 details' },
      { id: '2', details: 'Record 2 details' },
      { id: '3', details: 'Record 3 details' },
    ]);

    mock.onGet('http://localhost:5005/api/medical-records/1').reply(200, [{ details: 'Detailed info about Record 1' }]);
    mock.onGet('http://localhost:5005/api/medical-records/2').reply(200, [{ details: 'Detailed info about Record 2' }]);
    mock.onGet('http://localhost:5005/api/medical-records/3').reply(200, [{ details: 'Detailed info about Record 3' }]);

    const page = await newSpecPage({
      components: [AmbMedRecordsAccess],
      html: `<amb-med-records-access></amb-med-records-access>`,
    });

    await page.waitForChanges();

    expect(page.root).toEqualHtml(`
      <amb-med-records-access>
        <mock:shadow-root>
          <h2>Specialized Medical Records</h2>
          <ul>
            <li>
              Record 1 details
              <ul>
                <li>Detailed info about Record 1</li>
              </ul>
            </li>
            <li>
              Record 2 details
              <ul>
                <li>Detailed info about Record 2</li>
              </ul>
            </li>
            <li>
              Record 3 details
              <ul>
                <li>Detailed info about Record 3</li>
              </ul>
            </li>
          </ul>
          <md-filled-button>Back to Home</md-filled-button>
        </mock:shadow-root>
      </amb-med-records-access>
    `);
  });
});
