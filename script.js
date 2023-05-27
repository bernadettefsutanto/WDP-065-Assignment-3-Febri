

//data all
const url = 'https://covid-193.p.rapidapi.com/history?country=All&day=2023-05-27';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '4b1df6c92amsh0cc73d517c6574ep180dc1jsn85083701da99',
        'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
    }
};

fetch(url, options)
    .then(response => {
        return response.json()
    })
    .then(result => {
        console.log(result, 'ini result');
        var kematian = document.getElementById('totalKematian')
        kematian.textContent = result.response[0].deaths.total
        var kasus = document.getElementById('totalKasus')
        kasus.textContent = result.response[0].cases.total
        var kasusaktif = document.getElementById('totalAktif')
        kasusaktif.innerText = result.response[0].cases.active
        var recover = document.getElementById('totalRecover')
        recover.innerText = result.response[0].cases.recovered
        var waktu = document.getElementById('parameterWaktu')
        waktu.innerText = result.parameters.day
    })
    .catch(err => console.log(err))

//end of data all

//submit input
function showData() {
    event.preventDefault();
    window.onload = function () {
        console.log(document.getElementById("input-negara").value);
    };

    var inputnegara = document.getElementById("input-negara").value

    const url = `https://covid-193.p.rapidapi.com/history?country=${inputnegara}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4b1df6c92amsh0cc73d517c6574ep180dc1jsn85083701da99',
            'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
        }
    };

    fetch(url, options)
        .then(response => {
            return response.json()
        })
        .then(result => {
            console.log(result, 'ini result');
            var carikematian = document.getElementById('totalCariKematian')
            carikematian.textContent = result.response[0].deaths.total
            var carikasus = document.getElementById('totalCariKasus')
            carikasus.textContent = result.response[0].cases.total
            var carikasusaktif = document.getElementById('totalCariAktif')
            carikasusaktif.innerText = result.response[0].cases.active
            var carirecover = document.getElementById('totalCariRecover')
            carirecover.innerText = result.response[0].cases.recovered
            var cariwaktu = document.getElementById('parameterCariWaktu')
            cariwaktu.innerText = result.response[0].day
            document.getElementById("pencarian").style.display = "block"
        })
        .catch(err => {
            console.log(err)
            alert("Negara tidak ditemukan, silahkan coba lagi!");
        })
}

function resetData() {
    $('.result-container').hide();
    document.getElementById('form-pencarian').reset();
}