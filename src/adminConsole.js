import React from "react";
import { Admin, Resource, Delete, englishMessages, jsonServerRestClient } from "admin-on-rest";
import chineseMessages from 'aor-language-chinese';
import * as customMessages from './i18n';
import Dashboard from './Dashboard';
import authClient from './authClient';
import { PostList, PostEdit, PostCreate } from "./posts";
import { UserList } from "./users";
import PostIcon from 'material-ui/svg-icons/action/book';
import UserIcon from 'material-ui/svg-icons/social/group';


const messages = {
  cn: { ...chineseMessages, ...customMessages.cn },
  en: englishMessages,
};

export const adminConsole = () => (
  <Admin dashboard={Dashboard} authClient={authClient} 
    restClient={jsonServerRestClient("https://jsonplaceholder.typicode.com")}
    title="Hangzhou Dylan Admin Console" locale="en" messages={messages}>
    
    <Resource name="posts" list={PostList} edit={PostEdit} 
        create={PostCreate} remove={Delete} icon={PostIcon}/>
    <Resource name="users" list={UserList} icon={UserIcon}/>

    {/* unimplemented */}
    <Resource name="product" list={UserList}/>
    <Resource name="payment" list={UserList}/>
    <Resource name="order" list={UserList}/>
    <Resource name="metric" list={UserList}/>
    <Resource name="app" list={UserList}/>

  </Admin>
);
