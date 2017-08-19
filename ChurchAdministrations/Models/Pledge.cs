using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ChurchAdministrations.Models
{
    public class Pledge
    {
        public int PledgeID { get; set; }

        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string Frequency { get; set; }
        public int AmountOfTimes { get; set; }

        public int TotalAmount { get; set; }
        public int Amount { get; set; }

        public virtual Member Member { get; set; }
        public int MemberID { get; set; }
    }
}