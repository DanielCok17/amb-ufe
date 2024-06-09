import { newE2EPage } from '@stencil/core/testing';

describe('amb-med-records-access', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<amb-med-records-access></amb-med-records-access>');

    const element = await page.find('amb-med-records-access');
    expect(element).toHaveClass('hydrated');
  });
});
