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
    public class PastoralController : ApiController
    {
        private ChurchAdministrationsContextDB db = new ChurchAdministrationsContextDB();

        // GET: api/Pastoral
        public IQueryable<Pastoral> GetPastorals()
        {
            return db.Pastorals;
        }

        // GET: api/Pastoral/5
        [ResponseType(typeof(Pastoral))]
        public async Task<IHttpActionResult> GetPastoral(int id)
        {
            Pastoral pastoral = await db.Pastorals.FindAsync(id);
            if (pastoral == null)
            {
                return NotFound();
            }

            return Ok(pastoral);
        }

        // PUT: api/Pastoral/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutPastoral(int id, Pastoral pastoral)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != pastoral.PastoralID)
            {
                return BadRequest();
            }

            db.Entry(pastoral).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PastoralExists(id))
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

        // POST: api/Pastoral
        [ResponseType(typeof(Pastoral))]
        public async Task<IHttpActionResult> PostPastoral(Pastoral pastoral)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Pastorals.Add(pastoral);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = pastoral.PastoralID }, pastoral);
        }

        // DELETE: api/Pastoral/5
        [ResponseType(typeof(Pastoral))]
        public async Task<IHttpActionResult> DeletePastoral(int id)
        {
            Pastoral pastoral = await db.Pastorals.FindAsync(id);
            if (pastoral == null)
            {
                return NotFound();
            }

            db.Pastorals.Remove(pastoral);
            await db.SaveChangesAsync();

            return Ok(pastoral);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PastoralExists(int id)
        {
            return db.Pastorals.Count(e => e.PastoralID == id) > 0;
        }
    }
}