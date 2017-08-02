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
    public class MinistryController : ApiController
    {
        private ChurchAdministrationsContextDB db = new ChurchAdministrationsContextDB();

        // GET: api/Ministry
        public IQueryable<Ministry> GetMinistries()
        {
            return db.Ministries;
        }

        // GET: api/Ministry/5
        [ResponseType(typeof(Ministry))]
        public async Task<IHttpActionResult> GetMinistry(int id)
        {
            Ministry ministry = await db.Ministries.FindAsync(id);
            if (ministry == null)
            {
                return NotFound();
            }

            return Ok(ministry);
        }

        // PUT: api/Ministry/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutMinistry(int id, Ministry ministry)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != ministry.MinistryID)
            {
                return BadRequest();
            }

            db.Entry(ministry).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MinistryExists(id))
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

        // POST: api/Ministry
        [ResponseType(typeof(Ministry))]
        public async Task<IHttpActionResult> PostMinistry(Ministry ministry)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Ministries.Add(ministry);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = ministry.MinistryID }, ministry);
        }

        // DELETE: api/Ministry/5
        [ResponseType(typeof(Ministry))]
        public async Task<IHttpActionResult> DeleteMinistry(int id)
        {
            Ministry ministry = await db.Ministries.FindAsync(id);
            if (ministry == null)
            {
                return NotFound();
            }

            db.Ministries.Remove(ministry);
            await db.SaveChangesAsync();

            return Ok(ministry);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool MinistryExists(int id)
        {
            return db.Ministries.Count(e => e.MinistryID == id) > 0;
        }
    }
}