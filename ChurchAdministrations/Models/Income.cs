using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ChurchAdministrations.Models
{
    public class Income
    {
        public int IncomeID { get; set; }
        public string IncomeTitle { get; set; }

        public string Status { get; set; }
        public DateTime Date { get; set; }
        public int IncomeAmount { get; set; }
        public int MemberID { get; set; }
        public virtual Member Member { get; set; }
    }
}