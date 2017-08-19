using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ChurchAdministrations.Models
{
    public class Transaction
    {
        public int TransactionID { get; set; }
        public int Amount { get; set; }
        public string PaymentMethod { get; set; }
        public string Comment { get; set; }
        public int MemberID { get; set; }
        public virtual Member Member { get; set; }
    }
}