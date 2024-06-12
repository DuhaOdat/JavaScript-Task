
document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const ckBx = [];
    const check = document.querySelectorAll('input[type="checkbox"]');
    check.forEach(function(x) {
        if (x.checked) {
            ckBx.push(x.value);
        }
    });

    const data1 = {
        name: document.getElementById('Name').value,
        Age: document.getElementById('Age').value,
        Gender: document.getElementById('Gender').value,
        Barth: document.getElementById('Birth').value,
        image: document.getElementById('Image').value
    };

    const data2 = {
        description: document.getElementById('des').value, 
        Majo: document.getElementById('major').value, 
        programmingLanguage: ckBx
    };

    const data3 = {
        SiblingsNUmber: document.getElementById('sibNum').value, 
        Siblingsdesc: document.getElementById('sibDesc').value 
    };

    localStorage.setItem('card1', JSON.stringify(data1));
    localStorage.setItem('card2', JSON.stringify(data2));
    localStorage.setItem('card3', JSON.stringify(data3));

    creation(data1,"card1");
    creation(data2,"card2");
    creation(data3,"card3");
    
});