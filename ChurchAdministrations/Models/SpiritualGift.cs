using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ChurchAdministrations.Models
{
    public class SpiritualGift
    {
        public int SpiritualGiftID { get; set; }
        public string GiftName { get; set; }
        public int GiftPrice { get; set; }
        public string GiftType { get; set; }
        public string GiftSource { get; set; }

        public virtual ICollection<SellGift> SellGift { get; set; }
    }
}