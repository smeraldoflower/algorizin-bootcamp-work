// Nusaiba Mahmood
// ITP JS HW 3
// PP03Q2gamescript.js



function checkAnswers(event)
{
    event.preventDefault();

    let score = 0;

    let responses = document.querySelectorAll('#games_form div'); // [div#q1, div#q2, div#q3, div#q4, div#q5]

    for(i=0; i<responses.length; i++)
    {
        let correctOption = responses[i].querySelector('input[value = true]');
        let correctOptionText = document.querySelector(`#${responses[i].id} label[for = ${correctOption.id}]`);
        let questionText = responses[i].querySelector(`#${responses[i].id} p`);
        
        let selectedOption = responses[i].querySelector('input[type = "radio"]:checked');
        let selectedOptionText = document.querySelector(`#${responses[i].id} label[for = ${selectedOption.id}]`);

        // if correct answer is selected
        if (correctOption.checked)
        {
            questionText.style = "color: limegreen;" ; // mark question green
            correctOptionText.style = "color: limegreen; font-weight: bold;" ; // mark correct answer green
            score++; // add to score
        }
        else
        {
            questionText.style = "color: crimson;" ; // mark question red
            selectedOptionText.style = "color: crimson; font-weight: bold;" ; // mark selected ans red
            correctOptionText.style = "color: limegreen; font-weight: bold;" ; // mark correct answer green
        }
    }

    console.log(score);
    document.querySelector('#score').innerHTML = `SCORE: <b style = "color:blueviolet;">${score}</b> / 5` ;
    document.querySelector('#submit_btn').style = 'display: none';

}

document.querySelector('#games_form').addEventListener('submit', checkAnswers);
