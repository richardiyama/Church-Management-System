using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ChurchAdministrations.Models
{
    public class Activity
    {
        public int ActivityID { get; set; }

        public string ActivityName { get; set; }
        public string ActivityType { get; set; }
       
        public string GuestSpeaker { get; set; }
        public string Reoccurrance { get; set; }
        public string AllDay { get; set; }
        public DateTime StartTime { get; set; }

        public DateTime EndTime { get; set; }
        public DateTime ActivityDate { get; set; }
        public DateTime EndDate { get; set; }

        public int ActivityCategoryID { get; set; }
        public virtual ActivityCategory ActivityCategory { get; set; }

        public int GroupID { get; set; }
        public int VenueID { get; set; }
        public virtual Venue Venue { get; set; }
        public virtual Group Group { get; set; }
        public virtual ICollection<Attendance> Attendance { get; set; }
    }
}