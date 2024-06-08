import { newE2EPage } from '@stencil/core/testing';

describe('amb-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<amb-ambulance-wl-list></amb-ambulance-wl-list>');

    const element = await page.find('amb-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
