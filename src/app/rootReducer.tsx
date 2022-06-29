import DialogSlice from 'components/dialog/DialogSlice';
import calendarsSlice from 'features/calendars/calendarsSlice';
import createCalendarSlice from 'features/create-calendar/featureSlice';
import dashboardSlice from 'features/dashboard/dashboardSlice';
import loginSlice from 'features/login/loginSlice';
import overlaySlice from 'features/overlay-utilities/overlaySlice';
import todoEventSlice from 'features/todolist-event/todoEventSlice';
import insurancetaxbankingSile from 'features/insurancetaxbanking/InsurancetaxbankingSile';
const rootreducer = {
  loginState: loginSlice,
  insurancetaxbankingState: insurancetaxbankingSile,
  dialogState: DialogSlice,
  dashboardState: dashboardSlice,
  calendarState: calendarsSlice,
  todoEventState: todoEventSlice,
  createCalendarState: createCalendarSlice,
  overlayState: overlaySlice,
};
export default rootreducer;
