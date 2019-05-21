var btn = document.getElementById('btn');

btn.addEventListener('click', function () {
    document.body.style.backgroundColor = 'red';
    btn.innerHTML = "excellent choice"
        if (document.body.style.backgroundColor = 'red') {
            btn.addEventListener('click', function () {
                document.body.style.backgroundColor = 'green'
                btn.innerHTML = "did I ask for this?"
                btn.addEventListener('mousemove', function () {
                    document.body.style.backgroundColor = 'yellow'
                    btn.innerHTML = "don't double click me"
                        if (document.body.style.backgroundColor = 'yellow') {
                            btn.addEventListener('dblclick', function () {
                                document.body.style.backgroundColor = 'pink';
                                    
                    })
                }
            })
                
        })
    }
});

