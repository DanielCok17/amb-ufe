// import { Component, Host, h, State, Prop } from '@stencil/core';

// @Component({
//   tag: 'amb-med-records-access',
//   styleUrl: 'amb-med-records-access.css',
//   shadow: true,
// })
// export class AmbMedRecordsAccess {

//   @Prop() patientId: string;
//   @State() records: any[] = [
//     { id: 1, details: 'Record 1 details' },
//     { id: 2, details: 'Record 2 details' },
//     { id: 3, details: 'Record 3 details' },
//   ];

//   private navigateBack() {
//     const absolute = new URL("/medical/", document.baseURI).pathname;
//     window.navigation.navigate(absolute);
//   }

//   render() {
//     return (
//       <Host>
//         <h2>Specialized Medical Records</h2>
//         <ul>
//           {this.records.map(record => (
//             <li key={record.id}>{record.details}</li>
//           ))}
//         </ul>
//         <md-filled-button onClick={() => this.navigateBack()}>Back to Home</md-filled-button>

//       </Host>
//     );
//   }
// }

import { Component, Host, h, State } from '@stencil/core';
import { MedicalRecordsApi, Configuration } from '../../api/medical-records';
import axios from 'axios';

@Component({
  tag: 'amb-med-records-access',
  styleUrl: 'amb-med-records-access.css',
  shadow: true,
})
export class AmbMedRecordsAccess {
  @State() records: any[] = [];
  @State() errorMessage: string = '';

  private api = new MedicalRecordsApi(new Configuration({ basePath: 'http://localhost:5005/api' }), undefined, axios);

  async componentWillLoad() {
    try {
      const response = await this.api.getAllMedicalRecords();
      const records = response.data;
      this.records = await Promise.all(
        records.map(async record => {
          const detailsResponse = await this.api.getMedicalRecords(record.id);
          return { ...record, detailedInfo: detailsResponse.data };
        })
      );
    } catch (error) {
      this.errorMessage = 'Failed to fetch records: ' + error.message;
    }
  }

  private navigateBack() {
    const absolute = new URL('/medical/', document.baseURI).pathname;
    window.navigation.navigate(absolute);
  }

  render() {
    return (
      <Host>
        <h2>Specialized Medical Records</h2>
        {this.errorMessage ? (
          <div class="error">{this.errorMessage}</div>
        ) : (
          <ul>
            {this.records.map(record => (
              <li key={record.id}>
                {record.details}
                <ul>
                  {record.detailedInfo.map(detail => (
                    <li>{detail.details}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        )}
        <md-filled-button onClick={() => this.navigateBack()}>Back to Home</md-filled-button>
      </Host>
    );
  }
}
