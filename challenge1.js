// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
// A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!


/* Write your code below. Good luck! 🙂 */

const calcAverage = (n1,n2,n3) => (n1+n2+n3)/3;

//console.log(calcAverage(2,3,4));
var scoreDolphins;
var scoreKoalas;

scoreKoalas = calcAverage(23, 34,27);
scoreDolphins = calcAverage(85, 54,41);

//console.log(scoreDolphins,scoreKoalas)

function checkWinner (avgDolphins, avgKoalas) {
    //ar a;
    if (avgKoalas > avgDolphins) {
        if (avgKoalas/2 > avgDolphins) {
            return "Kola";
        }
    } else if (avgDolphins > avgKoalas) {
        if (avgDolphins/2 > avgKoalas){
            return "Dolp";
        }
    } else return "No";
    return "No"
}

var a = checkWinner(scoreDolphins,scoreKoalas)
//console.log(a);
var b;
switch (a) {
    case 'Kola':
        b = `Kolas wins (${scoreKoalas} vs. ${scoreDolphins})`
        break;
    case 'Dolp':
        b = `Dolphins wins (${scoreDolphins} vs. ${scoreKoalas})`
        break;
    case 'No':
        b = `No one wins this match`
        break;
    default:
        b = `breakout`
}

console.log(b)







