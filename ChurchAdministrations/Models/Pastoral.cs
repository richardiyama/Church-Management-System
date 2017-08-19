using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ChurchAdministrations.Models
{
    public class Pastoral
    {
        public int PastoralID { get; set; }
        public int MemberID { get; set; }
        public virtual Member Member { get; set; }

        public DateTime PastoralDate { get; set; }
        public DateTime PastoralTime { get; set; }
        public string Description { get; set; }

    }
}