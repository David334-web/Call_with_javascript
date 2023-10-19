const MerlynIT = {
    cours: "Javascript",
    email: "servicesmerlyn@gmail.com",
    etudiant: [],

    login(nom, prenom){
        console.log(`${nom} ${prenom} vous êtes en ${this.cours} 
        votre email est ${this.email}`)
        this.etudiant.push(`${nom} ${prenom}`)
    }
}

MerlynIT.login("David", "Frantz")
console.log(MerlynIT.etudiant)


const DavidIT = {
    cours: "Css",
    email: "dfrantzmerlyn@gmail.com",
    etudiant: [],
}

const utiliser = MerlynIT.login

utiliser.call(DavidIT, "Frantz", "David")
console.log(DavidIT.etudiant)