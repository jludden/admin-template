import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { changeLocale as changeLocaleAction } from 'admin-on-rest';

class LocaleSwitcher extends Component {
    switchToChinese = () => this.props.changeLocale('cn');
    switchToEnglish = () => this.props.changeLocale('en');

    render() {
        const { changeLocale } = this.props;
        return (
            <div>
                <div>Language</div>
                <RaisedButton label="en" onClick={this.switchToEnglish} />
                <RaisedButton label="cn" onClick={this.switchtoChinese} />
                {/* <div style={styles.label}>Language</div>
                <RaisedButton style={styles.button} label="en" onClick={this.switchToEnglish} />
                <RaisedButton style={styles.button} label="cn" onClick={this.switchtoChinese} /> */}
            </div>
        );
    }
}

export default connect(undefined, { changeLocale: changeLocaleAction })(LocaleSwitcher);