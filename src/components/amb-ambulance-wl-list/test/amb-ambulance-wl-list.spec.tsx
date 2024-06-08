import { newSpecPage } from '@stencil/core/testing';
import { AmbAmbulanceWlList } from '../amb-ambulance-wl-list';

describe('amb-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AmbAmbulanceWlList],
      html: `<amb-ambulance-wl-list></amb-ambulance-wl-list>`,
    });

    const wlList = page.rootInstance as AmbAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length

    const items = page.root.shadowRoot.querySelectorAll("md-list-item");
    expect(items.length).toEqual(expectedPatients);

  });
});
