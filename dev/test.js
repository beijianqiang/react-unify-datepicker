/**
 * Created by zmy on 2017/11/28.
 */
import React from 'react';
import ReactDom from 'react-dom';

import UnifyDatePicker from '../lib';

const app = document.getElementById('app');

ReactDom.render((
    <UnifyDatePicker option='{"type":"date"}' />
), app);