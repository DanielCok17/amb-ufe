import { Component, Host, h, State, Prop } from '@stencil/core';

@Component({
  tag: 'amb-med-records-access',
  styleUrl: 'amb-med-records-access.css',
  shadow: true,
})
export class AmbMedRecordsAccess {

  @Prop() patientId: string;
  @State() records: any[] = [
    { id: 1, details: 'Record 1 details' },
    { id: 2, details: 'Record 2 details' },
    { id: 3, details: 'Record 3 details' },
  ];

  private navigateBack() {
    const absolute = new URL("/medical/", document.baseURI).pathname;
    window.navigation.navigate(absolute);
  }

  render() {
    return (
      <Host>
        <h2>Specialized Medical Records</h2>
        <ul>
          {this.records.map(record => (
            <li key={record.id}>{record.details}</li>
          ))}
        </ul>
        <md-filled-button onClick={() => this.navigateBack()}>Back to Home</md-filled-button>
      </Host>
    );
  }
}
