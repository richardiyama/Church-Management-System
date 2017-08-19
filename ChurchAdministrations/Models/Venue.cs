using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ChurchAdministrations.Models
{
    public class Venue
    {
        public int VenueID { get; set; }
        public string VenueTitle { get; set; }
        public int Capacity { get; set; }
        public int RequestBefore { get; set; }
        public string Equipment { get; set; }
        public string MultipleReservation {get; set;}
        public virtual ICollection<Activity> Activity { get; set; }
    }
}