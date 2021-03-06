import React from 'react';
//import './calendar.ts';
//import 'air-datepicker';
import './cell.scss';
import './datepicker-config.scss';
import './datepicker.scss';
import './navigation.scss';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.open = this.props.state === 'open' ? true : false;
    this.classWrapper = this.props.classWrapper || '';
  }

  render() {
    let { open, classWrapper } = this;

    return (
      <div className={classWrapper}>
        {open ? (
          <div className="datepicker-here js-datepicker-here"></div>
        ) : (
          <div className="datepicker-here js-datepicker-here datepicker-here_hide"></div>
        )}
      </div>
    );
  }
}

export default Calendar;
