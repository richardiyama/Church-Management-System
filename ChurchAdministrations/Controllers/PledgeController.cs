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
    public class PledgeController : ApiController
    {
        private ChurchAdministrationsContextDB db = new ChurchAdministrationsContextDB();

        // GET: api/Pledge
        public IQueryable<Pledge> GetPledges()
        {
            return db.Pledges;
        }

        // GET: api/Pledge/5
        [ResponseType(typeof(Pledge))]
        public async Task<IHttpActionResult> GetPledge(int id)
        {
            Pledge pledge = await db.Pledges.FindAsync(id);
            if (pledge == null)
            {
                return NotFound();
            }

            return Ok(pledge);
        }

        // PUT: api/Pledge/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutPledge(int id, Pledge pledge)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != pledge.PledgeID)
            {
                return BadRequest();
            }

            db.Entry(pledge).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PledgeExists(id))
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

        // POST: api/Pledge
        [ResponseType(typeof(Pledge))]
        public async Task<IHttpActionResult> PostPledge(Pledge pledge)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Pledges.Add(pledge);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = pledge.PledgeID }, pledge);
        }

        // DELETE: api/Pledge/5
        [ResponseType(typeof(Pledge))]
        public async Task<IHttpActionResult> DeletePledge(int id)
        {
            Pledge pledge = await db.Pledges.FindAsync(id);
            if (pledge == null)
            {
                return NotFound();
            }

            db.Pledges.Remove(pledge);
            await db.SaveChangesAsync();

            return Ok(pledge);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PledgeExists(int id)
        {
            return db.Pledges.Count(e => e.PledgeID == id) > 0;
        }
    }
}