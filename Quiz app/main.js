
// list of answers

const correctAnswers=['A','B','B','A'];
console.log(correctAnswers);

// form

const form=document.querySelector('.quiz-form')
console.log(form);

// result
const result = document.querySelector('.result')

// events

form.addEventListener('submit',e=>{
    // kay kr ga event call ho ga 1 time display kry ga stop kr dy ga event ko jb tak baqi factionality call ni hoti
    e.preventDefault();
    // console.log("i am in form");
    const userAnswers=[form.q1.value,form.q2.value,form.q3.value,form.q4.value]
    let score=0;
    userAnswers.forEach((answer,index) => {
        if(answer === correctAnswers[index]){
            score+=25;
        }
        result .classList .remove('d-none')
        scrollTo(0,0);

        let output=0;
        const timer=setInterval(()=>{
            result.querySelector('span').textContent=`${output}%`;
            if(output===score){
                clearInterval(timer)
            }
            else{
                output++
            }
        },15)
    });
    // console.log(userAnswers);
})