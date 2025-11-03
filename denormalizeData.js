// Denormalize data (client-side "join")

// Scenario : You have an array of users and a separate array of post

// You have to crate a new array of users where each user object contains a posts array of their own posts

// ?input

const users = [
  { id: 401, name: "Nazmul" },
  { id: 402, name: "Fahim" },
  { id: 403, name: "Shafin" },
  { id: 404, name: "Anamul" },
  { id: 405, name: "Shariar" },
  { id: 406, name: "Abdulla" },
];

const posts = [
  {
    id: 1,
    userId: 402,
    title: "My First Post",
  },
  {
    id: 2,
    userId: 401,
    title: "My First Day at college",
  },
  {
    id: 3,
    userId: 404,
    title: "My Favorite hobbies",
  },
  {
    id: 4,
    userId: 402,
    title: "Walking alone the road",
  },
  {
    id: 5,
    userId: 403,
    title: "Happy to be a part of next level Development",
  },
  {
    id: 6,
    userId: 405,
    title: "We are alone",
  },
  {
    id: 7,
    userId: 406,
    title: "First day of my university Exam.",
  },
];

/**
 * TODO --> create hash table of posts
 * TODO -->
 * TODO -->
 * TODO -->
 *
 * */

// using array reduce

const postByUserId = posts.reduce((table, post) => {
  const { userId } = post;
  if (!table[userId]) {
    table[userId] = [];
  }
  table[userId].push(post);
  return table;
}, {});

const userWithPost = users.map((user) => {
  return { ...user, posts: postByUserId[user.id] || [] };
});

// using map

const newPostById = new Map();
for (let post of posts) {
  const { userId } = post;
  if (!newPostById.has(userId)) {
    newPostById.set(userId, []);
  }
  const current = newPostById.get(userId);
  current.push(post);
}

// console.log(newPostById);

const finalPostWithUser = users.map((user) => {
  return { ...user, posts: newPostById.get(user.id) || [] };
});

console.log(JSON.stringify(finalPostWithUser));

// console.table(JSON.stringify([...new Set(userWithPost)]));
