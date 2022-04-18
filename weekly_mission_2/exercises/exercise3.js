class repo{
    constructor(name, author, languaje){
        this.name = name
        this.author = author
        this.languaje = languaje
        this.numberOfCommits = 100
        this.stars = 199
        this.forks = 299
        this.issues_open = 10
        this.issues_close = 10
    }

    getTotalIssues(){
        return this.issues_open + this.issues_close
      }
    getGeneralInfo(){
        return `This repository ${this.name} was created by ${this.author}`
      }
}

console.log("\nGitHub")
const github = new repo("LaunchX", "carlogilmar", "JavaScript")
   console.log("Nombre del repo: " + github.name)
   console.log("Issues totales: " + github.getTotalIssues())
   console.log(github.getGeneralInfo())


class Twitter {
    constructor (user, username, following, followers, tweets, likes, trending_topic, hashtag){
        this.user = user
        this.username = username
        this.following = following
        this.followers = followers
        this.tweets = tweets
        this.likes = likes
        this.trending_topic = trending_topic
        this.hashtag = hashtag
    }
    getInfoTwitter() {
        return `Trending topic del día es ${this.trending_topic}, hashtag con mas tendencia es ${this.hashtag}`
    }
}

console.log("\nTwitter")
const twitter = new Twitter("Henry Jimenez", "@ing_henryjp95", 274, 1, 150, 596, "Peliculas", "#Sonic2")
console.log ("Usuario: '" + twitter.user + "', con el nombre de usuario: " + twitter.username)
console.log (twitter.getInfoTwitter())


class Facebook{
    constructor (user, post, biography, post_total , friends){
        this.user = user
        this.post = post
        this.biography = biography
        this.post_total = post_total
        this.friends = friends
    }
    getInfoFacebook() {
        return `Este ${this.biography} les desea unos ${this.post} a todos`
    }
}

console.log("\nFacebook")
const face = new Facebook("Henry Jimenez", "Buenos dias", "Ingeniero en computación", 860, 200)
console.log("Nombre del usuario: " + face.user)
console.log(face.getInfoFacebook())

class Uber{
    constructor(profile, travel, costo){
        this.profile = profile
        this.travel = travel
        this.costo = costo
    }
    getInfoUber(){
        return `Su viaje a ${this.travel} tiene un costo de $${this.costo} MXN`
    }
}

console.log("\nUber")
const uber = new Uber("henry", "Ensenada, BC", 120)
console.log("Nombre del usuario: " + uber.profile)
console.log(uber.getInfoUber())

class WhatsApp{
    constructor(profile, contacts, chats, groups, llamadas, chat_user, state, state_act, chat_cont){
        this.profile = profile
        this.contacts = contacts
        this.chats = chats
        this.groups = groups
        this.llamadas = llamadas
        this.chat_user = chat_user
        this.state = state
        this.state_act = state_act
        this.chat_cont = chat_cont
    }
    getInfoWhatsApp(){
        return `${this.chat_user} se encuntra ${this.state}`
    }
    getInfoState(){
        return `${this.chat_user} ${this.state_act}`
    }
    getInfoChat(){
        return `${this.chat_user} te envio en siguiente mensaje: "${this.chat_cont}"`
    }
}

console.log("\nWhatsApp")
const whats = new WhatsApp("Henry", 30, 15, 3, 15, "amiga", "en linea", "está escribiendo...", "Hola, como estas?",)
console.log("Perfil: " + whats.profile)
console.log(whats.getInfoWhatsApp())
console.log(whats.getInfoState())
console.log(whats.getInfoChat())