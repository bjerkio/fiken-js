/**
 * Get ID from `location` header
 * 
 * This function is used to get the ID resources
 * created in Folio (where you are redirected
 * afterwards).
 * 
 * @example
 * ```typescript
 * import { getIDFromHeaders } from 'fiken';
 * 
 * ...
 * 
 * const res = await fiken.createBankAccountRaw({
 *  ...
 * });
 * 
 * const id = getIDFromHeaders(res.raw);
 * ```
 */
export function getIDFromHeaders(resp: Response): string {
    const loc = resp.headers.get('location');
    if (!loc) {
        throw new Error('location header was not found');
    }

    const url = loc.split('/');
    return url.pop();    
}