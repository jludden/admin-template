import React from "react";
import { jsonServerRestClient, Admin, Resource } from "admin-on-rest";

import { PostList } from "./posts";

const App = () => (
  <Admin
    restClient={jsonServerRestClient("https://jsonplaceholder.typicode.com")}
  >
    <Resource name="posts" list={PostList} />
  </Admin>
);

export default App;
