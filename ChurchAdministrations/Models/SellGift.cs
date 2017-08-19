using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ChurchAdministrations.Models
{
    public class SellGift
    {
        public int SellGiftID { get; set; }

        public int GiftPrice { get; set; }
        public DateTime Date { get; set; }
        public int MemberID { get; set; }
        public virtual Member Member { get; set; }
        public int SpiritualGiftID { get; set; }
        public virtual SpiritualGift SpiritualGift {get; set;}

    }
}