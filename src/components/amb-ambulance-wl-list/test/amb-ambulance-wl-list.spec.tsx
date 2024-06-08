import { newSpecPage } from '@stencil/core/testing';
import { AmbAmbulanceWlList } from '../amb-ambulance-wl-list';

describe('amb-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AmbAmbulanceWlList],
      html: `<amb-ambulance-wl-list></amb-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <amb-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </amb-ambulance-wl-list>
    `);
  });
});
