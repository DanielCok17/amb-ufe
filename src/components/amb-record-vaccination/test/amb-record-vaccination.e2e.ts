import { newE2EPage } from '@stencil/core/testing';

describe('amb-record-vaccination', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<amb-record-vaccination></amb-record-vaccination>');

    const element = await page.find('amb-record-vaccination');
    expect(element).toHaveClass('hydrated');
  });
});
