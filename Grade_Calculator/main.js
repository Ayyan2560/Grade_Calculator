 document.getElementById('gradeForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const score = parseFloat(document.getElementById('score').value);
            let grade;
            if(score > 100){
                grade = 'Invalid percentage';
            }else if(score < 0){
                grade = 'Invalid percentage';
            } else if (score >= 80){
                grade = "A+"
            }else if (score >= 70){
                grade = "A"
            }else if (score >= 60){
                grade = "B"
            }else if (score >= 50){
                grade = "C"
            }else if (score >= 40){
                grade = "D"
            } else if(score >= 33){
                grade = "E"
            }
            else if (score <= 33){
                grade = "FAIL"}
                console.log(score , grade);
            document.getElementById('result').textContent = `Your grade is: ${grade}`;
        });