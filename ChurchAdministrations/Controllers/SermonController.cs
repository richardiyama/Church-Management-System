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
    public class SermonController : ApiController
    {
        private ChurchAdministrationsContextDB db = new ChurchAdministrationsContextDB();

        // GET: api/Sermon
        public IQueryable<Sermon> GetSermons()
        {
            return db.Sermons;
        }

        // GET: api/Sermon/5
        [ResponseType(typeof(Sermon))]
        public async Task<IHttpActionResult> GetSermon(int id)
        {
            Sermon sermon = await db.Sermons.FindAsync(id);
            if (sermon == null)
            {
                return NotFound();
            }

            return Ok(sermon);
        }

        // PUT: api/Sermon/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutSermon(int id, Sermon sermon)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != sermon.SermonID)
            {
                return BadRequest();
            }

            db.Entry(sermon).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SermonExists(id))
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

        // POST: api/Sermon
        [ResponseType(typeof(Sermon))]
        public async Task<IHttpActionResult> PostSermon(Sermon sermon)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Sermons.Add(sermon);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = sermon.SermonID }, sermon);
        }

        // DELETE: api/Sermon/5
        [ResponseType(typeof(Sermon))]
        public async Task<IHttpActionResult> DeleteSermon(int id)
        {
            Sermon sermon = await db.Sermons.FindAsync(id);
            if (sermon == null)
            {
                return NotFound();
            }

            db.Sermons.Remove(sermon);
            await db.SaveChangesAsync();

            return Ok(sermon);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool SermonExists(int id)
        {
            return db.Sermons.Count(e => e.SermonID == id) > 0;
        }
    }
}