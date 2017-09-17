using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using ChurchAdministrations.Models;

namespace ChurchAdministrations.Controllers
{
    public class ActivityCategoryController : ApiController
    {
        private ChurchAdministrationsContextDB db = new ChurchAdministrationsContextDB();

        // GET: api/ActivityCategory
        public IQueryable<ActivityCategory> GetActivityCategories()
        {
            return db.ActivityCategories;
        }

        // GET: api/ActivityCategory/5
        [ResponseType(typeof(ActivityCategory))]
        public async Task<IHttpActionResult> GetActivityCategory(int id)
        {
            ActivityCategory activityCategory = await db.ActivityCategories.FindAsync(id);
            if (activityCategory == null)
            {
                return NotFound();
            }

            return Ok(activityCategory);
        }

        // PUT: api/ActivityCategory/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutActivityCategory(int id, ActivityCategory activityCategory)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != activityCategory.ActivityCategoryID)
            {
                return BadRequest();
            }

            db.Entry(activityCategory).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ActivityCategoryExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/ActivityCategory
        [ResponseType(typeof(ActivityCategory))]
        public async Task<IHttpActionResult> PostActivityCategory(ActivityCategory activityCategory)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.ActivityCategories.Add(activityCategory);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = activityCategory.ActivityCategoryID }, activityCategory);
        }

        // DELETE: api/ActivityCategory/5
        [ResponseType(typeof(ActivityCategory))]
        public async Task<IHttpActionResult> DeleteActivityCategory(int id)
        {
            ActivityCategory activityCategory = await db.ActivityCategories.FindAsync(id);
            if (activityCategory == null)
            {
                return NotFound();
            }

            db.ActivityCategories.Remove(activityCategory);
            await db.SaveChangesAsync();

            return Ok(activityCategory);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ActivityCategoryExists(int id)
        {
            return db.ActivityCategories.Count(e => e.ActivityCategoryID == id) > 0;
        }
    }
}