import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'amb-record-vaccination',
  styleUrl: 'amb-record-vaccination.css',
  shadow: true,
})
export class AmbRecordVaccination {

  @State() vaccination = {
    date: '',
    time: '',
    type: '',
    dose: '',
    batch: '',
    observations: '',
    sideEffects: ''
  };

  recordVaccination() {
    console.log('Vaccination recorded:', this.vaccination);
    alert('Vaccination recorded successfully!');
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.vaccination = { ...this.vaccination, [name]: value };
  }

  private navigateBack() {
    const absolute = new URL("/medical/", document.baseURI).pathname;
    window.navigation.navigate(absolute);
  }

  render() {
    return (
      <Host>
        <h2>Record Vaccination</h2>
        <form onSubmit={(e) => { e.preventDefault(); this.recordVaccination(); }}>
          <md-filled-text-field label="Date" name="date" onInput={(e) => this.handleChange(e)} />
          <md-filled-text-field label="Time" name="time" onInput={(e) => this.handleChange(e)} />
          <md-filled-text-field label="Type" name="type" onInput={(e) => this.handleChange(e)} />
          <md-filled-text-field label="Dose" name="dose" onInput={(e) => this.handleChange(e)} />
          <md-filled-text-field label="Batch" name="batch" onInput={(e) => this.handleChange(e)} />
          <md-filled-text-field label="Observations" name="observations" onInput={(e) => this.handleChange(e)} />
          <md-filled-text-field label="Side Effects" name="sideEffects" onInput={(e) => this.handleChange(e)} />
          <md-filled-button type="submit">Record</md-filled-button>
        </form>
        <md-filled-button onClick={() => this.navigateBack()}>Back to Home</md-filled-button>
      </Host>
    );
  }
}

