import photo1 from "../../images/tables/1.png";
import photo2 from "../../images/tables/2.png";
import photo3 from "../../images/tables/3.png";

export default [
  {
    id: 0,
    starred: true,
    from: "Philip Horbachuski",
    fromEmail: "philip.horbachuski@example.com",
    to: "Wrapbootstrap",
    theme: "Hi, Welcom to Google Mail",
    date: "18:31",
    unreaded: true,
    content: `<p>Projecting surrounded literature yet delightful alteration but bed men. Open are from long why cold.
    If must snug by upon sang loud left. As me do preference entreaties compliment motionless ye literature.
    Day behaviour explained law remainder.</p>
    <p><strong>On then sake home</strong> is am leaf. Of suspicion do departure at extremely he believing.
    Do know said mind do rent they oh hope of. General enquire picture letters
    garrets on offices of no on.</p>
    <p>All the best,</p>
    <p>Vitaut the Great, CEO, <br />
    Fooby Inc. </p>`,
    attachments: [
      {
        photo: photo1,
        photoName: "some-cool-photo1.jpg",
        weight: "568K",
        id: 0,
      },
      {
        photo: photo2,
        photoName: "some-cool-photo2.jpg",
        weight: "568K",
        id: 1,
      },
    ],
  },
  {
    id: 1,
    starred: true,
    from: "StackExchange",
    theme: "New Python questions for this week",
    fromEmail: "stackexchange@example.com",
    to: "Wrapbootstrap",
    date: "Aug 14",
    unreaded: false,
    draft: true,
    content: "<h1>THIS IS HTML!!!!</h1>",
    attachments: [
      {
        photo: photo3,
        photoName: "some-cool-photo1.jpg",
        weight: "568K",
        id: 0,
      },
    ],
  },
  {
    id: 2,
    starred: false,
    from: "Facebook",
    theme: "Someone just commented on your photo!",
    fromEmail: "notification@facebook.com",
    to: "Wrapbootstrap",
    date: "Aug 7",
    unreaded: true,
    sent: true,
    content: "Someone just commented on your photo!",
  },
  {
    id: 3,
    starred: false,
    from: "Twitter",
    theme: "@hackernews is now following you on Twitter",
    fromEmail: "notification@twitter.com",
    to: "Wrapbootstrap",
    date: "Jul 31",
    unreaded: false,
    sent: true,
    content: "@hackernews is now following you on Twitter",
  },
];
