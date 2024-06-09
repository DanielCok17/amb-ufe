import { newE2EPage } from '@stencil/core/testing';

describe('amb-delete-allergy-record', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<amb-delete-allergy-record></amb-delete-allergy-record>');

    const element = await page.find('amb-delete-allergy-record');
    expect(element).toHaveClass('hydrated');
  });
});
