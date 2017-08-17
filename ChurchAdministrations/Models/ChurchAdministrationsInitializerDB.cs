using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Web;

namespace ChurchAdministrations.Models
{
    public class ChurchAdministrationsInitializerDB : System.Data.Entity.DropCreateDatabaseIfModelChanges<ChurchAdministrationsContextDB>
    {
        protected override void Seed(ChurchAdministrationsContextDB context)
        {
            var members = new List<Member>
{
           new Member{Name = "Richard Iyama",Username = "richardiyama",Password = "JAVA4real2002",
               ConfirmPassword = "JAVA4real2002",  Email = "richardiyama@yahoo.com", Gender = "Male",
               MobileNo = "08084188687", DateOfBirth = Convert.ToDateTime(@"16/03/1987", System.Globalization.CultureInfo.GetCultureInfo("hi-IN").DateTimeFormat),
               MaritalStatus = "Married", MemberType = "Volunteer", Occupation = "Software Developer",Education = "Computer Science", BaptistDate = Convert.ToDateTime(@"22/11/1998", System.Globalization.CultureInfo.GetCultureInfo("hi-IN").DateTimeFormat),
               City = "Ikeja",Address = "Oregun Lagos", Image = "1.jpg"
},
   new Member{Name = "Onajite Iyama",Username = "onajiteiyama",Password = "JAVA4real2002",
               ConfirmPassword = "JAVA4real2002",  Email = "richardiyama@yahoo.com", Gender = "Female",
               MobileNo = "08107368146", DateOfBirth = Convert.ToDateTime(@"20/12/1989", System.Globalization.CultureInfo.GetCultureInfo("hi-IN").DateTimeFormat),
               MaritalStatus = "Married", MemberType = "Volunteer", Occupation = "Agric Facilator",Education = "Agricultural Science", BaptistDate = Convert.ToDateTime(@"22/11/2000", System.Globalization.CultureInfo.GetCultureInfo("hi-IN").DateTimeFormat),
               City = "Ikeja",Address = "Oregun Lagos", Image = "2.jpg"
},
   };
            members.ForEach(s => context.Members.Add(s));
            context.SaveChanges();



            var groups = new List<Group>
{
            new Group{GroupName = "Youth",ImageSource = "2.jpg"},
            new Group{GroupName = "Children",ImageSource = "1.jpg"},

             };
            groups.ForEach(s => context.Groups.Add(s));
            context.SaveChanges();





            var ministries = new List<Ministry>
{
            new Ministry{MinistryName = "Prophet",ImageSource = "2.jpg"},
            new Ministry{MinistryName = "Pastor",ImageSource = "1.jpg"},

             };
            ministries.ForEach(s => context.Ministries.Add(s));
            context.SaveChanges();
        }
    }
}