const db = require("./db");
const Advertisement = require("./advertisement/model");
const Users = require("./user/model");
// {force: true}
db.sync()
  .then(() =>
    Promise.all([
      Users.destroy({
        where: {}
      }),
      Advertisement.destroy({
        where: {}
      }),
      Advertisement.create(
        {
          title: "Sea lion",
          description: "A big sea lion, would be a perfect addition to your family",
          url: "https://picsum.photos/id/1084/536/354?grayscale",
          price: 1500.0,
          email: 'sealion@live.nl',
          phonenumber: 3456821
        },
        {
          include: [Users]
        }
      )
    ])
  )
  .then(() =>
  Promise.all([
    // Advertisement.destroy({
    //   where: {}
    // }),
    Users.destroy({
      where: {}
    }),
    Users.create(
      {
        name: "Mr. Green",
        email: 'mrgreen@gmail.com'
      }
    )
  ])
)
  .then(() => console.log("Database seeded!"))
  .catch(console.error);