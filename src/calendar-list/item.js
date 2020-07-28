import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Calendar from '../calendar';
import styleConstructor from './style';

class CalendarListItem extends Component {
  static defaultProps = {
    hideArrows: true,
    hideExtraDays: true,
  };

  constructor(props) {
    super(props);
    this.style = styleConstructor(props.theme);
  }

  shouldComponentUpdate(nextProps) {
    const r1 = this.props.item;
    const r2 = nextProps.item;
    return r1.toString('yyyy MM') !== r2.toString('yyyy MM') || !!(r2.propbump && r2.propbump !== r1.propbump);
  }

  render() {
    const row = this.props.item;
    if (row.getTime) {
      let height = this.props.calendarHeight;
      // if (row.getMonth() === 11) {
      // height += height / 5;
      // }
      return (
        <Calendar
          theme={this.props.theme}
          style={[{ height, width: this.props.calendarWidth }, this.style.calendar]}
          current={row}
          hideArrows={this.props.hideArrows}
          hideExtraDays={this.props.hideExtraDays}
          disableMonthChange
          markedDates={this.props.markedDates}
          markingType={this.props.markingType}
          hideDayNames={this.props.hideDayNames}
          onDayPress={this.props.onDayPress}
          onDayLongPress={this.props.onDayLongPress}
          displayLoadingIndicator={this.props.displayLoadingIndicator}
          minDate={this.props.minDate}
          maxDate={this.props.maxDate}
          firstDay={this.props.firstDay}
          monthFormat={this.props.monthFormat}
          dayComponent={this.props.dayComponent}
          disabledByDefault={this.props.disabledByDefault}
          showWeekNumbers={this.props.showWeekNumbers}
          uren={this.props.uren}
          bezettingColor={this.props.bezettingColor}
          wachtende={this.props.wachtende}
        />);
    } else {
      const text = row.toString();
      return (
        <View style={[{ height: this.props.calendarHeight, width: this.props.calendarWidth }, this.style.placeholder]}>
          <Text allowFontScaling={false} style={this.style.placeholderText}>{text}</Text>
        </View>
      );
    }
  }
}

export default CalendarListItem;
