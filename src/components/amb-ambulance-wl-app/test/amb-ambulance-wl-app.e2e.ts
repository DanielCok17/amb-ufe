import { newE2EPage } from '@stencil/core/testing';

describe('amb-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<amb-ambulance-wl-app></amb-ambulance-wl-app>');

    const element = await page.find('amb-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
