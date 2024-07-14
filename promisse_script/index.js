const method1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Method 1');
    }, 6000);
});

const method2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Method 2');
    }, 3000);
});

// method1.then((result) => {
//     console.log(result)
//     method2
//     .then((result) => {
//         console.log(result);
//     });
// })
// .catch((error) => {
//     console.log(error);
// });

/* 
*Dans le script fourni, method1 et method2 sont des promesses qui se résolvent après des délais différents, 6000 millisecondes (6 secondes) pour method1 et 3000 millisecondes (3 secondes) pour method2. Les deux promesses commencent leur décompte dès que le script est exécuté, car elles sont déclarées et initialisées au niveau le plus haut du script. Cela signifie que leur minuterie commence immédiatement, pas seulement quand on les attend (await) ou quand on appelle .then() sur elles.

* Lorsque la fonction callMethods est appelée, elle attend d'abord que method1 se résolve avec await method1. Cela prend 6 secondes. Cependant, pendant que method1 attend de se résoudre, method2 continue son propre décompte. Puisque method2 ne prend que 3 secondes pour se résoudre, au moment où method1 a fini son attente de 6 secondes, method2 est déjà résolue depuis 3 secondes. Cela signifie que lorsque le code commence à attendre method2 avec await method2, il n'y a pas de délai supplémentaire car method2 est déjà résolue.

* En résumé, method2 commence son décompte en même temps que method1, mais comme elle a un délai plus court, elle se résout plus tôt. Lorsque le code atteint le point où il attend method2, cette dernière est déjà résolue, donc le code continue immédiatement sans attendre davantage.
*/

async function callMethods() {
    try {
        const result1 = await method1;
        console.log(result1);
        const result2 = await method2;
        console.log(result2);
    } catch (error) {
        console.log(error);
    }
}

callMethods();