// Test your array method knowledge!

test("get doubles", () => {
  const arr = [1, 3, 3, 5, 9];

  // should be an array containing each number in `arr` doubled
  const result = null;

  expect(result).toEqual([2, 6, 6, 10, 18]);
});

test("get odds", () => {
  const arr = [4, 6, 3, 1, 12, 13];

  // should be an array containing all odd numbers in `arr`
  const result = null;

  expect(result).toEqual([3, 1, 13]);
});

test("get average", () => {
  const arr = [1, 5, 8, 12, 20];

  // should be the average of the numbers in `arr`
  const result = null;

  expect(result).toEqual(9.2);
});

test("any admins", () => {
  const user1 = { id: 123, roles: ["editor", "admin"] };
  const user2 = { id: 456, roles: ["editor"] };

  const users = [user1, user2];

  // should be true/false based on whether a user in users is an admin
  const result = null;

  expect(result).toBeTrue();
});

test("get post titles for gmail users", () => {
  const users = [
    {
      id: 1,
      email: "user@yahoo.com",
      posts: [{ title: "Nope", category: "News" }]
    },
    {
      id: 2,
      email: "user@gmail.com",
      posts: [
        { title: "Good Post", category: "Fishing and Hunting" },
        { title: "Another good one", category: "Topiaries" }
      ]
    },
    {
      id: 3,
      email: "user2@gmail.com",
      posts: [
        { title: "Best Post Ever!", category: "Construction" },
        { title: "A post", category: "Starbucks Secret Menu" }
      ]
    }
  ];

  // should be an object keyed by email w/ an array of post titles for each key
  // e.g. { "foo@example.com": ["Post 1", "Post 2"]}
  const result = null;

  const expected = {
    "user@gmail.com": ["Good Post", "Another good one"],
    "user2@gmail.com": ["Best Post Ever!", "A post"]
  };

  expect(result).toEqual(expected);
});
