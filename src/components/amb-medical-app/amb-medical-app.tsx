import { Component, Host, Prop, State, h } from '@stencil/core';

declare global {
  interface Window {
    navigation: any;
  }
}

@Component({
  tag: 'amb-medical-app',
  styleUrl: 'amb-medical-app.css',
  shadow: true,
})
export class AmbMedicalApp {
  @State() private relativePath = '';

  @Prop() basePath: string = '';

  componentWillLoad() {
    const baseUri = new URL(this.basePath, document.baseURI || '/').pathname;

    const toRelative = (path: string) => {
      if (path.startsWith(baseUri)) {
        this.relativePath = path.slice(baseUri.length);
      } else {
        this.relativePath = '';
      }
    };

    window.navigation?.addEventListener('navigate', (ev: Event) => {
      if ((ev as any).canIntercept) {
        (ev as any).intercept();
      }
      let path = new URL((ev as any).destination.url).pathname;
      toRelative(path);
    });

    toRelative(location.pathname);
  }

  render() {
    let element = 'home';
    let itemId = '';

    if (this.relativePath.startsWith('record-access/')) {
      element = 'record-access';
      itemId = this.relativePath.split('/')[1];
    } else if (this.relativePath.startsWith('record-vaccination')) {
      element = 'record-vaccination';
    } else if (this.relativePath.startsWith('update-lab-results/')) {
      element = 'update-lab-results';
      itemId = this.relativePath.split('/')[1];
    } else if (this.relativePath.startsWith('delete-allergy-record/')) {
      element = 'delete-allergy-record';
      itemId = this.relativePath.split('/')[1];
    }

    const navigate = (path: string) => {
      const absolute = new URL(path, new URL(this.basePath, document.baseURI)).pathname;
      window.navigation.navigate(absolute);
    };

    return (
      <Host>
        {element === 'home' && (
          <div>
            <h1>Welcome to the Medical Application</h1>
            <md-filled-button onClick={() => navigate("/medical/record-access/1")}>Access Medical Records</md-filled-button>
            <md-filled-button onClick={() => navigate("/medical/record-vaccination")}>Record Vaccination</md-filled-button>
            <md-filled-button onClick={() => navigate("/medical/update-lab-results/1")}>Update Lab Results</md-filled-button>
            <md-filled-button onClick={() => navigate("/medical/delete-allergy-record/1")}>Delete Allergy Record</md-filled-button>
          </div>
        )}
        {element === 'record-access' && (
          <amb-med-records-access patient-id={itemId}></amb-med-records-access>
        )}
        {element === 'record-vaccination' && (
          <amb-record-vaccination></amb-record-vaccination>
        )}
        {element === 'update-lab-results' && (
          <amb-update-lab-results record-id={itemId}></amb-update-lab-results>
        )}
        {element === 'delete-allergy-record' && (
          <amb-delete-allergy-record allergy-id={itemId}></amb-delete-allergy-record>
        )}
      </Host>
    );
  }
}
