using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ChurchAdministrations.Models
{
    public class Attendance
    {
        public int AttendanceID { get; set; }

        public int ActivityID { get; set; }
        public virtual Activity Activity {get; set;}
        public int MinistryID { get; set; }
        public virtual Ministry Ministry { get; set; }
        public string Status { get; set; }
        
    }
}