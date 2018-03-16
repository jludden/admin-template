import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { changeLocale as changeLocaleAction } from 'admin-on-rest';

const styles = {
    label: { width: '10em', display: 'inline-block' },
    button: { margin: '1em' },
};

class LocaleSwitcher extends Component {
    switchToChinese = () => this.props.changeLocale('cn');
    switchToEnglish = () => this.props.changeLocale('en');

    render() {
        const { changeLocale } = this.props;
        return (
            <div>
            <div style={styles.label}>Language</div>
                <RaisedButton style={styles.button} label="en" primary onClick={this.switchToEnglish} />
                <RaisedButton style={styles.button} label="cn" secondary onClick={() => changeLocale('cn')} />
                {/* <div style={styles.label}>Language</div>
                <RaisedButton style={styles.button} label="en" onClick={this.switchToEnglish} />
                <RaisedButton style={styles.button} label="cn" onClick={this.switchtoChinese} /> */}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    locale: state.locale,
});

const mapDispatchToProps = dispatch => {
    return {
        changeLocale: changeLocaleAction
    }
}

// export default connect(mapStateToProps, mapDispatchToProps)(LocaleSwitcher);
export default connect(undefined, { changeLocale: changeLocaleAction })(LocaleSwitcher);