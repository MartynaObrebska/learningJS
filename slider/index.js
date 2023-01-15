const banerContainer = document.querySelector(".team");
const numberOfUsers = 5;

// asyn Baner

$.get({
  url: `https://random-data-api.com/api/v2/users?size=${numberOfUsers}`,
  dataType: "json",
  success: function (data) {
    new Baner(
      banerContainer,
      data.map((member) => ({
        image: member.avatar,
        name: `${member.first_name} ${member.last_name}`,
        profession: member.employment.title,
      }))
    );
  },
});

// static Baner

// new Baner(banerContainer, [
//   {
//     image: "img/s1.png",
//     name: "Anna Baugart",
//     profession: "programistka JS",
//   },
//   {
//     image: "img/s2.png",
//     name: "Marek Feliksiak",
//     profession: "UX i UI Designer",
//   },
//   {
//     image: "img/s3.png",
//     name: "Arek Pawłowicz",
//     profession: "Front-end Developer",
//   },
// ]);
