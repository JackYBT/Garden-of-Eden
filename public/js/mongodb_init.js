db = new Mongo().getDB("garden_of_eden_db");
db.dropDatabase();

db.journal.insertMany([{
    _id: ObjectId("62341f4d09d8f7e344b7e9ad"),
    text: 'let the wind of freedom blow',
    time: ISODate("2022-03-18T05:57:33.111Z")
  },
  {
    text: "today's weather is awesome!",
    time: ISODate("2022-03-18T05:57:38.487Z")
  },
  {
    text: "Today didn't go so well... I caught covid",
    time: ISODate("2022-03-18T05:57:47.169Z")
  },
  {
    text: 'Ughhhh, just heard from many different people that Stanford will be online for the rest of January. This fucking sucks, because I was really looking forward to in-person events',
    time: ISODate("2022-03-18T05:59:38.401Z")
  },
  {
    text: "Today was a bad day. Couldn't fall asleep in the morning. ",
    time: ISODate("2022-03-18T06:00:05.588Z")
  },
  {
    text: 'Working in the GSB is so fucking nice hahah. ',
    time: ISODate("2022-03-18T06:00:31.740Z")
  },
  {
    text: "Just met with the Loki Code people. I think they will be my safety option for the summer. I love the idea and the product they're building",
    time: ISODate("2022-03-18T06:18:51.570Z")
  },
  {
    text: 'I love you',
    time: ISODate("2022-03-18T06:19:02.514Z")
  },
  {
    text: 'Feeling veryyyy tired. Brazilians are so much more energetic and friendly on the surface than the Chinese. It is kinda sad to think about how the rich in brazil are doing extremely well but the poor in the favelas are suffering hell ',
    time: ISODate("2022-03-18T06:19:25.754Z")
  },
  {
    text: "Actually so hard to find startup opportunities. That's why I understand why some people have the perspective that if you have an awesome opportunity, you should def pursue it.",
    time: ISODate("2022-03-18T06:19:44.791Z")
  },
  {
    text: "When she laid on me in the karaoke room, I haven't felt my [[heart]] beat like that in a long time. I was genuinely happy just being so close to her. [[dt]] and [[diana]] both saw me and were giving me funny looks lolllll they really want me to be together with her.",
    time: ISODate("2022-03-18T06:20:29.292Z")
  },
  {
    text: 'and i liked each other since February.. But we were both too afraid to explicitly tell each other our own feelings. One of my biggest regrets to date',
    time: ISODate("2022-03-18T06:20:49.163Z")
  },
  {
    text: "Happy Holidays brother, I bet the next time I'm going to see you it's going to be an absolute blast as well. It costed me a lot to realize that friends and families are the most important things in life, and I just feel absolutely blissed that you and Andrew will always be a part of mine.",
    time: ISODate("2022-03-18T06:21:45.375Z")
  }]);
db.photos.insertMany([{
    photoURL: 'images/stanford.png',
    time: ISODate("2022-03-18T05:57:53.294Z")
  },
  {
    photoURL: 'https://www.pic.com/wp-content/uploads/sites/3/2021/11/Home-Page_Cam.png?w=500',
    time: ISODate("2022-03-18T06:17:04.581Z")
  },
  {
    photoURL: 'https://scpd.stanford.edu/sites/default/files/2020-08/stanford-oval.jpg',
    time: ISODate("2022-03-18T06:17:24.437Z")
  },
  {
    photoURL: 'https://media.cntraveler.com/photos/5b71a3d92211d70d9158ae1a/16:9/w_3344,h_1881,c_limit/Yosemite_GettyImages-632167865.jpg',
    time: ISODate("2022-03-18T06:17:51.229Z")
  },
  {
    photoURL: 'https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_894,q_50,w_1903/v1/clients/catalinaislandccvb/Untitled_Panorama1_be5bf235-9ac1-4ed9-9ba1-622fcf38611a.jpg',
    time: ISODate("2022-03-18T06:18:07.568Z")
  },
  {
    photoURL: 'https://image.cnbcfm.com/api/v1/image/106984655-1638720074358-gettyimages-1294303237-01_jan_01_005.jpeg?v=1643864448&w=929&h=523',
    time: ISODate("2022-03-18T06:21:09.447Z")
  },{
    photoURL: 'images/profile_blue.png',
    time: ISODate("2022-03-18T06:28:48.565Z")
  },
  {
    photoURL: 'images/profile_red.png',
    time: ISODate("2022-03-18T06:28:57.781Z")
  }]);