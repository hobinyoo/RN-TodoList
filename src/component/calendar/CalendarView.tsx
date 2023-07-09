import React, {Dispatch, SetStateAction} from 'react';
import {StyleSheet} from 'react-native';
import {Calendar} from 'react-native-calendars';

interface Props {
  selectedDate: string;
  setSelectedDate: Dispatch<SetStateAction<string>>;
}

const CalendarView = ({selectedDate, setSelectedDate}: Props) => {
  return (
    <Calendar
      style={styles.calendar}
      onDayPress={day => {
        setSelectedDate(day.dateString);
      }}
      markedDates={{
        [selectedDate]: {
          selected: true,
          disableTouchEvent: true,
          dotColor: 'orange',
          selectedColor: 'green',
        },
      }}
    />
  );
};

const styles = StyleSheet.create({
  calendar: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
});

export default CalendarView;
