import { getIDFromHeaders } from '../libs/id-from-header';
import { Response } from 'node-fetch';
describe('id-from-header.ts', () => {
  const url =
    'https://api.fiken.no/api/v2/companies/fiken-demo-historisk-fasong-as1/bankAccounts/1933231237';

  it('should resolve location header', () => {
    const response = new Response(
      null,
      {
        headers: {
          location: url,
        },
      },
    );
    
    expect(getIDFromHeaders(response)).toBe('1933231237');
  });

  it('should fail if no location is in headers', () => {
      const response = new Response(null, {
          headers: {},
      });
      expect(() => getIDFromHeaders(response)).toThrowError();
  })

});
