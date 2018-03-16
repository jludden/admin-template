import React from 'react';
import {Card, CardHeader, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { translate, changeLocale as changeLocaleAction, ViewTitle } from 'admin-on-rest';

import LocaleSwitcher from './LocaleSwitcher'      
   {/* <LocaleSwitcher /> */}


export default () => (
    <Card style={{ margin: '2em' }}>
        <CardHeader title="Welcome to Hangzhou Dylan Technology Administrative Console Demo" />
        <CardText>Feel free to look around...</CardText>
        <CardText>
            <LocaleSwitcher />
        </CardText>
    </Card>
);