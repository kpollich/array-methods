import React, { useState } from "react";
import axios from "axios";
import { NextPage } from "next";

import { User, GetUsers } from "./types";

interface Props {
  users: User[];
}

const IndexPage: NextPage<Props> = ({ users }) => {
  const [query, setQuery] = useState<string>("");

  // Filter the set of users based on the provided query
  const displayedUsers =
    query === ""
      ? users
      : users.filter(
          user =>
            user.name.first.match(new RegExp(query)) ||
            user.name.last.match(new RegExp(query))
        );

  return (
    <div className="wrapper">
      <h1>List Users</h1>

      <label htmlFor="query">Search</label>
      <input
        type="text"
        name="query"
        value={query}
        onChange={e => {
          setQuery(e.target.value);
        }}
      />

      <ul>
        {/* Loop over the set of users and return a JSX Node for each of them */}
        {displayedUsers.map(user => (
          <li key={user.id.value}>
            <img
              src={user.picture.thumbnail}
              alt={`${user.name.first} ${user.name.last}`}
            />
            <h3>
              {user.name.first} {user.name.last}
            </h3>
          </li>
        ))}
      </ul>

      <style jsx>{`
        ul {
          list-style: none;
          padding: 0;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          grid-gap: 10px;
          width: 80%;
          margin: 25px auto;
        }

        li {
          border: 1px solid #dadada;
          border-radius: 10px;
        }

        label {
          display: block;
        }

        .wrapper {
          text-align: center;
        }
      `}</style>

      <style jsx global>
        {`
          body {
            margin: 0;
            padding: 0;
            font-family: sans-serif;
          }
        `}
      </style>
    </div>
  );
};

IndexPage.getInitialProps = async () => {
  const userUrl = "https://randomuser.me/api?results=25&nat=US";
  const response = await axios.get<GetUsers>(userUrl);

  return { users: response.data.results };
};

export default IndexPage;
