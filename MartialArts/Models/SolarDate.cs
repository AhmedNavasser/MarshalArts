using System;
using System.ComponentModel;
using System.Globalization;

namespace MartialArts.Models
{
    public static class SolarDate
    {
        private static readonly DateTime DateTimeObject = DateTime.Now.Date;
        private static readonly PersianCalendar PersianCalendarObject = new PersianCalendar();

        private static int _daysOfMonth;

        public static int SolarDayOfMonth
        {
            get
            {
                _daysOfMonth = PersianCalendarObject.GetDayOfMonth(DateTimeObject);
                return _daysOfMonth;
            }
        }

        public static int SolarDaysOfMonth(this DateTime dateTime)
        {
            return SolarDayOfMonth;
        }

        public static string ToSolarDateTime(this DateTime dateTime)
        {
            var solarDateTimeList = new string[3];
            var persianCalendar = new PersianCalendar();

            solarDateTimeList[0] = persianCalendar.GetYear(DateTimeObject).ToString(CultureInfo.InvariantCulture);
            solarDateTimeList[1] = persianCalendar.GetMonth(DateTimeObject).ToString(CultureInfo.InvariantCulture);
            solarDateTimeList[2] = persianCalendar.GetDayOfMonth(DateTimeObject).ToString(CultureInfo.InvariantCulture);

            if (Convert.ToInt16(solarDateTimeList[1]) < 10)
            {
                solarDateTimeList[1] = "0" + solarDateTimeList[1];
            }
            if (Convert.ToInt16(solarDateTimeList[2]) < 10)
            {
                solarDateTimeList[2] = "0" + solarDateTimeList[2];
            }
            return string.Format("{0}/{1}/{2}", solarDateTimeList[2], solarDateTimeList[1], solarDateTimeList[0]);

        }

        public static string SolarDaysOfWeek(this DateTime dateTime)
        {
            var persianCalendar = new PersianCalendar();
            var georgianDay = persianCalendar.GetDayOfWeek(DateTimeObject).ToString();
            string solarDay;

            switch (georgianDay)
            {
                case "Sunday":
                    solarDay = "یکشنبه";
                    break;
                case "Monday":
                    solarDay = "دوشنبه";
                    break;
                case "Tuesday":
                    solarDay = "سه شنبه";
                    break;
                case "Wednesday":
                    solarDay = "چهارشنبه";
                    break;
                case "Thursday":
                    solarDay = "پنج شنبه";
                    break;
                case "Firday":
                    solarDay = "جمعه";
                    break;
                case "Saturday":
                    solarDay = "شنبه";
                    break;
                default:
                    throw new InvalidEnumArgumentException();

            }
            return solarDay;

        }

        public static string SolarMonthInYear(this DateTime dateTime)
        {
            var persianCalendar = new PersianCalendar();
            var month = persianCalendar.GetMonth(DateTimeObject);

            string solarMonth;

            switch (month)
            {
                case 1:
                    solarMonth = "فروردین";
                    break;
                case 2:
                    solarMonth = "اردیبهشت";
                    break;
                case 3:
                    solarMonth = "خرداد";
                    break;
                case 4:
                    solarMonth = "تیر";
                    break;
                case 5:
                    solarMonth = "مرداد";
                    break;
                case 6:
                    solarMonth = "شهریور";
                    break;
                case 7:
                    solarMonth = "مهر";
                    break;
                case 8:
                    solarMonth = "آبان";
                    break;
                case 9:
                    solarMonth = "آذر";
                    break;
                case 10:
                    solarMonth = "دی";
                    break;
                case 11:
                    solarMonth = "بهمن";
                    break;
                case 12:
                    solarMonth = "اسفند";
                    break;
                default:
                    throw new InvalidEnumArgumentException();

            }
            return solarMonth;

        }


    }
}

