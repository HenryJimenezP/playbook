const repo = {
    name: "LaunchX",
    author: "carlogilmar",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
   }
   
   console.log("GitHub")
   console.log("Nombre del repo:" + repo.name)
   console.log("Issues totales: " + repo.getTotalIssues())
   console.log(repo.getGeneralInfo())

const twitter = {
    user: "Henry Jimenez",
    username: "@ing_henryjp95",
    age: 26,
    following: 274,
    followers: 1,
    tweets: 150,
    likes: 596,
    trending_topic: "Peliculas",
    hashtag: "#Sonic2",
    getInfoTwitter: function() {
        return `Trending topic del día es ${this.trending_topic}, hashtag con mas tendencia es ${this.hashtag}`
    }
}

console.log("\nTwitter")
console.log ("Usuario: '" + twitter.user + "', con el nombre de usuario: " + twitter.username)
console.log (twitter.getInfoTwitter())

const facebook = {
    user: "Henry Jimenez",
    post: "Buenos dias",
    biography: "Ingeniero en computación",
    post_total: 860,
    friends: 200,
    getInfoFacebook: function() {
        return `Este ${this.biography} les desea unos ${this.post} a todos`
    }
}

console.log("\nFacebook")
console.log("Nombre del usuario: " + facebook.user)
console.log(facebook.getInfoFacebook())

const uber = {
    profile: "henry",
    travel: "Ensenada, BC",
    costo: 120,
    getInfoUber: function(){
        return `Su viaje a ${this.travel} tiene un costo de $${this.costo} MXN`
    }
}

console.log("\nUber")
console.log("Nombre del usuario: " + uber.profile)
console.log(uber.getInfoUber())

const whatsapp = {
    profile: "Henry",
    contacts: 30,
    chats: 15,
    groups: 3,
    llamadas: 15,
    chat_user: "amiga",
    state: "en linea",
    state_act: "está escribiendo...",
    chat_cont: "Hola, como estas?",
    getInfoWhatsApp: function(){
        return `${this.chat_user} se encuntra ${this.state}, ${this.chat_user} ${this.state_act}`
    },
    getInfoChat: function(){
        return `${this.chat_user} te envio en siguiente mensaje "${this.chat_cont}"`
    }
}

console.log("\nWhatsApp")
console.log("Perfil: " + whatsapp.profile)
console.log(whatsapp.getInfoWhatsApp())
console.log(whatsapp.getInfoChat())