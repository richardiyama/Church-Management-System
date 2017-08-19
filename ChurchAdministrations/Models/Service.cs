using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ChurchAdministrations.Models
{
    public class Service
    {

        public int ServiceID { get; set; }
        public string ServiceName { get; set; }
        public string ServiceType { get; set; }

        public DateTime StartTime {get; set;}

        public DateTime EndTime { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }

        public int GroupID { get; set; }
        public virtual Group Group { get; set; }
    }
}