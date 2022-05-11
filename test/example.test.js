// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderDogCard } from '../render-utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<a href="./detail/?id=2"><div class="dog-card"><p>Boogie</p><img src="./assets/corgi.jpeg"></div></a>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const boogie = {
        id: 2,
        name: 'Boogie',
        age: '5',
        breed: 'corgi',
        description: 'Borkf I am bekom fat snoot shoober tungg, mlem what a nice floof noodle horse. Heckin good boys you are doin me a concern many pats long woofer wrinkler dat tungg tho blop, big ol adorable doggo tungg fluffer. Puggo thicc length boy such treat, thicc. Length boy h*ck yapper tungg blop, woofer borkdrive smol. Maximum borkdrive such treat porgo you are doing me the shock maximum borkdrive, I am bekom fat thicc.',
    };
    const actual = renderDogCard(boogie);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
