import { newE2EPage } from '@stencil/core/testing';

describe('amb-update-lab-results', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<amb-update-lab-results></amb-update-lab-results>');

    const element = await page.find('amb-update-lab-results');
    expect(element).toHaveClass('hydrated');
  });
});
