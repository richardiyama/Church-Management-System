﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ChurchAdministrations.Models
{
    public class Donation
    {
        public int DonationID { get; set; }
        public DateTime TransactionDate { get; set; }
        public string MemberName { get; set; }
        public int Amount { get; set; }
        public string PaymentMethod { get; set; }
        public virtual Member Member { get; set; }
        public int MemberID { get; set; }
    }
}