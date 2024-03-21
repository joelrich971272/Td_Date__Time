document.onreadystatechange = function () {
    console.log(document.readyState)
    if (document.readyState === 'interactive') {
        console.log("c'est ok")
        function calculerDiffDate() {
            let daysOfTheMonths = 0;
            let dd = new Date(document.getElementById("date_debut").value) ;
            let df = new Date(document.getElementById("date_fin").value);
            let differenceDays = df-dd
            let differenceHours = hf-hd

            if (df.getTime() === dd.getTime()) {
                document.getElementById("ecarteDate").innerHTML = <h5>"C'est le meme jour</h5>;
            }
            else {
                dd = document.getElementById("date_debut").value;
                df = document.getElementById("date_fin").value

                const x = new moment(df);
                const y = new moment(dd)


                let days = y.diff(x,'days')
                let months = x.diff(y, 'months')
                let years = x.diff(y, 'years')


                document.getElementById("ecartDate").innerText = differenceDays

                }

            let hd = new Date(document.getElementById("heure_debut").value) ;
            let hf = new Date(document.getElementById("heure_fin").value);

            if (hf.getHours() === hd.getHours()){
                document.getElementById("ecarttime").innerHTML = <h5>C'est la meme heure</h5>

            }
            else {
                hd = document.getElementById("heure_debut").value
                hf = document.getElementById("heure_fin").value


                const a = new moment(hf)
                const b = new moment(hd)

                let seconds = a.diff(a,'hours')
                let minutes = a.diff(b,'minutes')
                let hours = a.diff(b,'hours')

                document.getElementById("ecarttime").innerText = differenceHours
            }

        }

    }
}