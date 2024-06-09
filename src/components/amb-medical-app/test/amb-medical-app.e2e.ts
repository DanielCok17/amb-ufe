import { newE2EPage } from '@stencil/core/testing';

describe('amb-medical-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<amb-medical-app></amb-medical-app>');

    const element = await page.find('amb-medical-app');
    expect(element).toHaveClass('hydrated');
  });
});
