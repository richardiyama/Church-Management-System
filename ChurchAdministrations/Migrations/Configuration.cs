namespace ChurchAdministrations.Migrations
{
    using ChurchAdministrations.Models;
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<ChurchAdministrations.Models.ChurchAdministrationsContextDB>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(ChurchAdministrations.Models.ChurchAdministrationsContextDB context)
        {


            var activitycategories = new List<ActivityCategory>
{
new ActivityCategory {ActivityCategoryName = "First Category"}

};
            activitycategories.ForEach(s => context.ActivityCategories.AddOrUpdate(p => p.ActivityCategoryID, s));
            context.SaveChanges();


            var venues = new List<Venue>
{
new Venue {VenueTitle = "Church",Capacity  = 2,RequestBefore  = 1, Equipment ="Piano", MultipleReservation  ="Piano"}

};
            venues.ForEach(s => context.Venues.AddOrUpdate(p => p.VenueID, s));
            context.SaveChanges();

            var spiritualgifts = new List<SpiritualGift>
{
new SpiritualGift {GiftName = "Church",GiftPrice  = 2,GiftType ="Piano", GiftSource  ="Piano"}

};
            spiritualgifts.ForEach(s => context.SpiritualGifts.AddOrUpdate(p => p.SpiritualGiftID, s));
            context.SaveChanges();



            var songs = new List<Song>
{
new Song {SongCategory = "Church",SongName ="Piano", Description  ="Piano",SongFile = "Song"}

};
            songs.ForEach(s => context.Songs.AddOrUpdate(p => p.SongID, s));
            context.SaveChanges();


            var sermons = new List<Sermon>
{
new Sermon {Description  ="Piano",SermonTitle = "Church",SermonType = "Church",FileSource = "Church",  Status = "Song"}

};
            sermons.ForEach(s => context.Sermons.AddOrUpdate(p => p.SermonID, s));
            context.SaveChanges();




            var expenses = new List<Expense>
{
new Expense {SupplierName  ="Piano",Status = "Song",Date = DateTime.Parse("2010-09-01")}

};
            expenses.ForEach(s => context.Expenses.AddOrUpdate(p => p.ExpenseID, s));
            context.SaveChanges();


           

            var groups = new List<Group>
{
new Group {GroupName = "Chemistry", ImageSource = "Chemistry" }

};
            groups.ForEach(s => context.Groups.AddOrUpdate(p => p.GroupID, s));
            context.SaveChanges();


            var ministries = new List<Ministry>
{
new Ministry {MinistryName = "Chemistry", ImageSource = "Chemistry" }

};
            ministries.ForEach(s => context.Ministries.AddOrUpdate(p => p.MinistryID, s));
            context.SaveChanges();

            var activities = new List<Activity>
{
new Activity { ActivityName = "Carson", ActivityType = "Alexander",GuestSpeaker = "Alexander",Reoccurrance = "Carson", AllDay = "Alexander",StartTime = DateTime.Parse("2010-09-01"),
EndTime = DateTime.Parse("2010-09-01"),ActivityDate = DateTime.Parse("2010-09-01"),EndDate = DateTime.Parse("2010-09-01"),GroupID = groups.Single(c => c.GroupID == 1 ).GroupID,VenueID = venues.Single(c => c.VenueID == 1 ).VenueID,ActivityCategoryID = activitycategories.Single(c => c.ActivityCategoryID == 1 ).ActivityCategoryID }

};


            activities.ForEach(s => context.Activities.AddOrUpdate(p => p.ActivityID, s));
            context.SaveChanges();


            foreach (Activity e in activities)
            {
                var activitiesInDataBase = context.Activities.Where(
                s =>
                s.Group.GroupID == e.GroupID &&
                s.Venue.VenueID == e.VenueID).SingleOrDefault();
                if (activitiesInDataBase == null)
                {
                    context.Activities.Add(e);
                }
            }
            context.SaveChanges();

            var services = new List<Service>
{
new Service { ServiceName = "Carson", ServiceType = "Alexander",StartTime = DateTime.Parse("2010-09-01"),
EndTime = DateTime.Parse("2010-09-01"),StartDate = DateTime.Parse("2010-09-01"),EndDate = DateTime.Parse("2010-09-01"),GroupID = groups.Single(c => c.GroupID == 1 ).GroupID }

};


            services.ForEach(s => context.Services.AddOrUpdate(p => p.ServiceID, s));
            context.SaveChanges();


            foreach (Service e in services)
            {
                var servicesInDataBase = context.Services.Where(
                s =>
                s.Group.GroupID == e.GroupID).SingleOrDefault();
                if (servicesInDataBase == null)
                {
                    context.Services.Add(e);
                }
            }
            context.SaveChanges();


            var members = new List<Member>
{
new Member { Name = "Carson", Username = "Alexander",Password = "Carson",ConfirmPassword = "Alexander",Email = "Carson", Gender = "Alexander",MobileNo = "Carson",DateOfBirth = DateTime.Parse("2010-09-01"), MaritalStatus = "Alexander", MemberType = "Alexander",Occupation = "Carson", Education = "Alexander",
BaptistDate = DateTime.Parse("2010-09-01"),City = "Carson", Address = "Alexander", Image = "Alexander",GroupID = groups.Single(c => c.GroupID == 1 ).GroupID,MinistryID = ministries.Single(c => c.MinistryID == 1 ).MinistryID }

};


            members.ForEach(s => context.Members.AddOrUpdate(p => p.MemberID, s));
            context.SaveChanges();


            foreach (Member e in members)
            {
                var membersInDataBase = context.Members.Where(
                s =>
                s.Group.GroupID == e.GroupID &&
                s.Ministry.MinistryID == e.MinistryID).SingleOrDefault();
                if (membersInDataBase == null)
                {
                    context.Members.Add(e);
                }
            }
            context.SaveChanges();

            var accountants = new List<Accountant>
{
new Accountant {Photo = "1.jpg",StaffMemberName = "Richard Iyama",StaffMemberEmail = "richardiyama@yahoo.com",MobileNo = "08084188687", MemberID = members.Single(c => c.MemberID == 1 ).MemberID }

};
            accountants.ForEach(s => context.Accountants.AddOrUpdate(p => p.AccountantID, s));
            context.SaveChanges();


            var messages = new List<Message>
{
new Message {Subject = "Carson", Description = "Alexander",MemberID = members.Single(c => c.MemberID == 1 ).MemberID, AccountantID =  accountants.Single(c => c.AccountantID == 1 ).AccountantID }

};
            messages.ForEach(s => context.Messages.AddOrUpdate(p => p.MessageID, s));
            context.SaveChanges();


            foreach (Message e in messages)
            {
                var sendersInDataBase = context.Messages.Where(
                s =>
                s.Member.MemberID == e.MemberID &&
                s.Accountant.AccountantID == e.AccountantID).SingleOrDefault();
                if (sendersInDataBase == null)
                {
                    context.Messages.Add(e);
                }
            }
            context.SaveChanges();

            var admins = new List<Admin>
{
new Admin {MemberID = members.Single(c => c.MemberID == 1 ).MemberID }

};
            admins.ForEach(s => context.Admins.AddOrUpdate(p => p.AdminID, s));
            context.SaveChanges();


            foreach (Admin e in admins)
            {
                var adminsInDataBase = context.Admins.Where(
                s =>
                s.Member.MemberID == e.MemberID).SingleOrDefault();
                if (adminsInDataBase == null)
                {
                    context.Admins.Add(e);
                }
            }
            context.SaveChanges();


            var donations = new List<Donation>
{
new Donation {MemberID = members.Single(c => c.MemberID == 1 ).MemberID,TransactionDate = DateTime.Parse("2010-09-01"),Amount = 1,PaymentMethod = "Cash"}

};
            donations.ForEach(s => context.Donations.AddOrUpdate(p => p.DonationID, s));
            context.SaveChanges();




            var pastorals = new List<Pastoral>
{
new Pastoral {PastoralDate  = DateTime.Parse("2010-09-01"), PastoralTime = DateTime.Parse("2010-09-01"),Description = "Alexander",MemberID = members.Single(c => c.MemberID == 1 ).MemberID }

};
            pastorals.ForEach(s => context.Pastorals.AddOrUpdate(p => p.PastoralID, s));
            context.SaveChanges();


            foreach (Pastoral e in pastorals)
            {
                var pastoralsInDataBase = context.Pastorals.Where(
                s =>
                s.Member.MemberID == e.MemberID).SingleOrDefault();
                if (pastoralsInDataBase == null)
                {
                    context.Pastorals.Add(e);
                }
            }
            context.SaveChanges();


            var pledges = new List<Pledge>
{
new Pledge {StartDate  = DateTime.Parse("2010-09-01"), EndDate = DateTime.Parse("2010-09-01"),Frequency = "Alexander",AmountOfTimes = 1,TotalAmount = 1,Amount = 1,MemberID = members.Single(c => c.MemberID == 1 ).MemberID }

};
            pledges.ForEach(s => context.Pledges.AddOrUpdate(p => p.PledgeID, s));
            context.SaveChanges();


            foreach (Pledge e in pledges)
            {
                var pledgesInDataBase = context.Pledges.Where(
                s =>
                s.Member.MemberID == e.MemberID).SingleOrDefault();
                if (pledgesInDataBase == null)
                {
                    context.Pledges.Add(e);
                }
            }
            context.SaveChanges();


            var sellgifts = new List<SellGift>
{
new SellGift {GiftPrice = 1,Date  = DateTime.Parse("2010-09-01"),MemberID = members.Single(c => c.MemberID == 1 ).MemberID,SpiritualGiftID = spiritualgifts.Single(c => c.SpiritualGiftID == 1 ).SpiritualGiftID }

};
            sellgifts.ForEach(s => context.SellGifts.AddOrUpdate(p => p.SellGiftID, s));
            context.SaveChanges();



            foreach (SellGift e in sellgifts)
            {
                var sellgiftInDataBase = context.SellGifts.Where(
                s =>
                s.Member.MemberID == e.MemberID &&
                s.SpiritualGift.SpiritualGiftID == e.SpiritualGiftID).SingleOrDefault();
                if (sellgiftInDataBase == null)
                {
                    context.SellGifts.Add(e);
                }
            }
            context.SaveChanges();


            var transactions = new List<Transaction>
{
new Transaction {Amount = 1,PaymentMethod  ="Cash",Comment  ="Cash",MemberID = members.Single(c => c.MemberID == 1 ).MemberID }

};
            transactions.ForEach(s => context.Transactions.AddOrUpdate(p => p.TransactionID, s));
            context.SaveChanges();


            foreach (Transaction e in transactions)
            {
                var transactionInDataBase = context.Transactions.Where(
                s =>
                s.Member.MemberID == e.MemberID).SingleOrDefault();
                if (transactionInDataBase == null)
                {
                    context.Transactions.Add(e);
                }
            }
            context.SaveChanges();



            var incomes = new List<Income>
{
new Income {IncomeTitle = "Alexander",Status = "Alexander",Date = DateTime.Parse("2010-09-01"),IncomeAmount = 1,MemberID = members.Single(c => c.MemberID == 1 ).MemberID }

};
            incomes.ForEach(s => context.Incomes.AddOrUpdate(p => p.IncomeID, s));
            context.SaveChanges();


            foreach (Income e in incomes)
            {
                var incomesInDataBase = context.Incomes.Where(
                s =>
                s.Member.MemberID == e.MemberID).SingleOrDefault();
                if (incomesInDataBase == null)
                {
                    context.Incomes.Add(e);
                }
            }
            context.SaveChanges();


            var attendances = new List<Attendance>
{
new Attendance {ActivityID = activities.Single(c => c.ActivityID == 1 ).ActivityID,MinistryID = ministries.Single(c => c.MinistryID == 1 ).MinistryID  }

};
            attendances.ForEach(s => context.Attendances.AddOrUpdate(p => p.AttendanceID, s));
            context.SaveChanges();








            foreach (Attendance e in attendances)
            {
                var attendanceInDataBase = context.Attendances.Where(
                s =>
                s.Activity.ActivityID == e.ActivityID &&
                s.Ministry.MinistryID == e.MinistryID).SingleOrDefault();
                if (attendanceInDataBase == null)
                {
                    context.Attendances.Add(e);
                }
            }
            context.SaveChanges();
        }
    }
}




