import { newSpecPage } from '@stencil/core/testing';
import { AmbAmbulanceWlApp } from '../amb-ambulance-wl-app';

describe('amb-ambulance-wl-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [AmbAmbulanceWlApp],
      html: `<amb-ambulance-wl-app base-path="/"></amb-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("amb-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [AmbAmbulanceWlApp],
      html: `<amb-ambulance-wl-app base-path="/ambulance-wl/"></amb-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("amb-ambulance-wl-list");
  });
});