const db = require("./db");
const Advertisement = require("./advertisement/model");
const Users = require("./user/model");

// {force: true} is ON right now
// When the database syncs, the first .then Promise will first destroy the two tables (so it 'refreshes so to speak'), then the data will be created. In the second .then, I commented out the destroy methods because I think it's not necessary anymore (but kpt it in just in case). 
db.sync({ force: true })
  .then(() =>
    Promise.all([
      Advertisement.destroy({
        where: {}
      }),
      Users.destroy({
        where: {}
      }),
      Users.create({
        name: "Mr. Green",
        email: "mrgreen@gmail.com"
      }),
      Users.create({
        name: "Mrs. Black",
        email: "mrblack@gmail.com"
      }),
      Users.create({
        name: "Mr. Yellow",
        email: "mryellow@hotmail.com"
      }),
      Users.create({
        name: "Mrs. Orange",
        email: "mrsorange@gmail.com"
      })
    ])
  )
  .then(() =>
    Promise.all([
      // Users.destroy({
      //   where: {}
      // }),
      // Advertisement.destroy({
      //   where: {}
      // }),
      Advertisement.create(
        {
          title: "Sea lion",
          description:
            "A big sea lion, would be a perfect addition to your family",
          url: "https://picsum.photos/id/1084/536/354?grayscale",
          price: 1500.0,
          email: "sealion@live.nl",
          phonenumber: 3456821,
          userId: 1
        },
        Advertisement.create({
          title: "The sky",
          description:
            "When you can't get fresh air at the classroom of Codaisseur, you just buy it right?",
          url: "https://picsum.photos/seed/picsum/536/354",
          price: 1300.0,
          email: "lion@live.nl",
          phonenumber: 62415821,
          userId: 1
        }),
        Advertisement.create({
          title: "Dog",
          description:
            "After a long day of coding, this creature will give you the best cuddles there are",
          url: "https://picsum.photos/id/237/536/354",
          price: 300.0,
          email: "dog@live.com",
          phonenumber: 62415821,
          userId: 2
        }),
        Advertisement.create({
          title: "Light Tower",
          description:
            "I mean, this is what anyone wants to have in their living room right? A big tower of light! A Light Tower!",
          url: "https://picsum.photos/id/870/536/354?grayscale&blur=2",
          price: 2300.0,
          email: "tower@live.com",
          phonenumber: 6215821,
          userId: 3
        }),
        {
          include: [Users]
        }
      )
    ])
  )
  .then(() => console.log("Database seeded!"))
  .catch(console.error);
