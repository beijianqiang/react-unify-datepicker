/**
 * Created by zmy on 2017/11/28.
 */
import React from 'react';
import './plugin/jquery.js';
import  './plugin/datePicker.js';
import './plugin/picker.js';

import './picker.less';

export default class UnifyDatePicker extends React.Component {
    constructor(props) {
        super(props);
        this.pic = '';
    }

    componentDidMount() {
        const optionsJson = this.props.option ? this.props.option : '{}';
        const options = JSON.parse(optionsJson);
        this.pic = new DatePicker(options);
        this.pic.show(function(rs) {
            //result.innerText = '选择结果: ' + rs.text;
            this.props.select && this.props.select(rs.text);
            this.pic.dispose();
        }.bind(this));
    }

    componentWillUnmount(){
        this.pic = '';
    }

    render() {
        return null
    }
}
