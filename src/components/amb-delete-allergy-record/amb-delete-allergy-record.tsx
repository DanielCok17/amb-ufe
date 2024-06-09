import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'amb-delete-allergy-record',
  styleUrl: 'amb-delete-allergy-record.css',
  shadow: true,
})
export class AmbDeleteAllergyRecord {

  @Prop() allergyId: string;

  deleteAllergyRecord() {
    console.log('Allergy record deleted:', this.allergyId);
    alert('Allergy record deleted successfully!');
  }

  private navigateBack() {
    const absolute = new URL("/medical/", document.baseURI).pathname;
    window.navigation.navigate(absolute);
  }

  render() {
    return (
      <Host>
        <h2>Delete Allergy Record</h2>
        <md-filled-button onClick={() => this.deleteAllergyRecord()}>Delete</md-filled-button>
        <md-filled-button onClick={() => this.navigateBack()}>Back to Home</md-filled-button>
      </Host>
    );
  }
}
