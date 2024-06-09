import { newE2EPage } from '@stencil/core/testing';

describe('amb-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<amb-ambulance-wl-editor></amb-ambulance-wl-editor>');

    const element = await page.find('amb-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
