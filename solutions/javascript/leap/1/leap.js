//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isLeap = (leapYear) => {
  if(leapYear%4!=0){return false;}
  if(leapYear%100==0){return leapYear%400==0;}
  return true;
};
