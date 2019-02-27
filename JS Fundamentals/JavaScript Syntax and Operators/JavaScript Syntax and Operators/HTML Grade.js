function solve(examPoints, homeworkCompleted, totalHomeworks) {
    let grade = 0;
    let totalPoints = 0;
    let maxPoints = 100;

    let examPercentPoints = Math.abs((examPoints / 400) * 100 - 100);

    let maxPercentPoints = 90 / (100 / examPercentPoints);
    let maxEamPoints = 90 - maxPercentPoints;
    totalPoints = maxEamPoints;

    if (homeworkCompleted === totalHomeworks) {
        totalPoints += 10;
    }

    if (examPoints === 400) {

        grade = 6;
    }
    else {
        grade = 3 + 2 * (totalPoints - maxPoints / 5) / (maxPoints / 2);
    }

    if (grade < 3) {
        grade = Math.ceil(grade);
    }
    console.log(grade);

}
solve(300, 10, 10)