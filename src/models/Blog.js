export class Blog{
  constructor(data){
    this.tags = data.tags || []
    this.published = data.published || true
    this.id = data.id || ''
    this.img = data.imgUrl || data.img
    this.body = data.body || ''
    this.title = data.title || ''
    this.creator = data.creator || {}


  }
}

// {
//   "tags": [],
//   "published": true,
//   "_id": "62abb5a3330233001682ef27",
//   "imgUrl": "https://i.kym-cdn.com/photos/images/newsfeed/001/439/750/197.gif",
//   "body": "WE IN THE SADBOX DUUUUUUUUUUUUUUDES",
//   "title": "ITS A ME",
//   "creator": {
//     "picture": "https://cdn.discordapp.com/attachments/346428945467441163/987790699317583932/1578890772_DMCDREAM.png",
//     "bio": "im bingus",
//     "coverImg": "https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fphotos%2Fimages%2Fnewsfeed%2F001%2F250%2F464%2F766.jpg",
//     "github": "https://github.com/big-daddy-dom",
//     "linkedin": "https://www.linkedin.com/in/dominic-rupert-609a203a/",
//     "resume": "",
//     "class": "late spring 22",
//     "graduated": false,
//     "_id": "626af7659c788f325c9c151c",
//     "name": "Wombo Dombo",
//     "email": "dom123@test.com",
//     "createdAt": "2022-04-28T20:22:03.949Z",
//     "updatedAt": "2022-06-20T15:51:56.693Z",
//     "__v": 0,
//     "id": "626af7659c788f325c9c151c"
//   },
// },