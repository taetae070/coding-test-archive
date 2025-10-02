function solution(numer1, denom1, numer2, denom2) {

    const numer = ( numer1 * denom2 ) + ( numer2 * denom1 );
    const denom = denom1 * denom2 ;
    let gcd = 1;

    for (let i = Math.min(numer, denom); i > 1; i--) {

        if (numer % i === 0 && denom % i === 0) {

            gcd = i;

            break; 

        }

    }



    return [numer / gcd, denom / gcd];

}