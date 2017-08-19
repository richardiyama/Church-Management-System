using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ChurchAdministrations.Models
{
    public class Expense
    {
        public int ExpenseID { get; set; }
        public string SupplierName { get; set; }

        public string Status { get; set; }
        public DateTime Date { get; set; }
        public int ExpenseAmount { get; set; }
    }
}