import { View, Text, StyleSheet } from 'react-native'
import { Calendar } from 'react-native-calendars'
import React from 'react'
import { APP_BLACK, APP_GRAY } from '../../styles'
import Icon from 'react-native-vector-icons/Ionicons'

const Arrow = ({ direction }) => {
  return direction === 'left' ?
    <Icon name='chevron-back' size={22} color={APP_GRAY} /> : <Icon name='chevron-forward' size={22} color={APP_GRAY} />
}
export const CustomCalendar = () => {
  return (
    <Calendar
      // // Initially visible month. Default = Date()
      style={styles.calendar}
      current={'2023-02-12'}
      theme={theme}
      // // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
      // minDate={'2012-05-10'}
      // // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
      // maxDate={'2012-05-30'}
      // // Handler which gets executed on day press. Default = undefined
      onDayPress={day => {
        console.log('selected day', day)
      }}
      // // render a look for the marked dates
      // markedDates={
      //   {
      //     '2020-02-10': {selected: true, selectedColor: 'red'},
      //     '2020-02-19': {selected: true, selectedColor: 'red'},
      //     '2020-02-21': {selected: true, selectedColor: 'red'},
      //     '2020-02-24': {selected: true, selectedColor: 'red'},
      //     '2020-02-29': {selected: true, selectedColor: 'red'},
      //   }
      // }
      // https://stackoverflow.com/questions/52090035/how-to-override-the-style-sheet-of-the-react-native-calendar
      // // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
      // monthFormat={'yyyy MM'}
      // // Handler which gets executed when visible month changes in calendar. Default = undefined
      // onMonthChange={month => {
      //   console.log('month changed', month)
      // }}
      // // Hide month navigation arrows. Default = false
      // Hide month navigation arrows. Default = false

      // Replace default arrows with custom ones (direction can be 'left' or 'right')
      renderArrow={(direction) => (<Arrow direction={direction} />)}
      // // Do not show days of other months in month page. Default = false

      // hideExtraDays={true}
      // // If hideArrows=false and hideExtraDays=false do not swich month when tapping on greyed out
      // // day from another month that is visible in calendar page. Default = false
      // disableMonthChange={true}
      // // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
      firstDay={1}
      enableSwipeMonths={true}
    />
  )
}

const theme: any = {
  backgroundColor: '#ffffff',
  calendarBackground: '#ffffff',
  textSectionTitleColor: '#b6c1cd',
  selectedDayBackgroundColor: 'red',
  selectedDayTextColor: '#ffffff',
  todayTextColor: APP_BLACK,
  dayTextColor: '#2d4150',
  textDisabledColor: '#d9e1e8',
  dotColor: '#00adf5',
  arrowColor: 'orange',
  monthTextColor: APP_BLACK,
  textDayFontSize: 16,
  textMonthFontSize: 18,
  textMonthFontWeight: '600',
  textDayHeaderFontSize: 15
}

const styles = StyleSheet.create({
  calendar: {}
})
