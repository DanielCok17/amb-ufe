import { Component, Host, h, State, Prop } from '@stencil/core';

@Component({
  tag: 'amb-update-lab-results',
  styleUrl: 'amb-update-lab-results.css',
  shadow: true,
})
export class AmbUpdateLabResults {

  @Prop() recordId: string;
  @State() labResults = 'Initial lab results';

  updateLabResults() {
    console.log('Lab results updated:', this.labResults);
    alert('Lab results updated successfully!');
  }

  handleChange(event) {
    this.labResults = event.target.value;
  }

  private navigateBack() {
    const absolute = new URL("/medical/", document.baseURI).pathname;
    window.navigation.navigate(absolute);
  }

  render() {
    return (
      <Host>
        <h2>Update Lab Results</h2>
        <md-filled-text-field label="Lab Results" onInput={(e) => this.handleChange(e)} value={this.labResults}></md-filled-text-field>
        <md-filled-button onClick={() => this.updateLabResults()}>Update</md-filled-button>
        <md-filled-button onClick={() => this.navigateBack()}>Back to Home</md-filled-button>
      </Host>
    );
  }
}
