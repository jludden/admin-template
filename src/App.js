import React from "react";
import { jsonServerRestClient, Admin, Resource, Delete } from "admin-on-rest";

import { PostList, PostEdit, PostCreate } from "./posts";
import { UserList } from "./users";

const App = () => (
  <Admin restClient={jsonServerRestClient(
        "https://jsonplaceholder.typicode.com")}>
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} remove={Delete} />
    <Resource name="users" list={UserList} />
  </Admin>
);

export default App;
