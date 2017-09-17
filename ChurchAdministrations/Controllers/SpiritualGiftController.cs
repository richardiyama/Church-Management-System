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
    public class SpiritualGiftController : ApiController
    {
        private ChurchAdministrationsContextDB db = new ChurchAdministrationsContextDB();

        // GET: api/SpiritualGift
        public IQueryable<SpiritualGift> GetSpiritualGifts()
        {
            return db.SpiritualGifts;
        }

        // GET: api/SpiritualGift/5
        [ResponseType(typeof(SpiritualGift))]
        public async Task<IHttpActionResult> GetSpiritualGift(int id)
        {
            SpiritualGift spiritualGift = await db.SpiritualGifts.FindAsync(id);
            if (spiritualGift == null)
            {
                return NotFound();
            }

            return Ok(spiritualGift);
        }

        // PUT: api/SpiritualGift/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutSpiritualGift(int id, SpiritualGift spiritualGift)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != spiritualGift.SpiritualGiftID)
            {
                return BadRequest();
            }

            db.Entry(spiritualGift).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SpiritualGiftExists(id))
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

        // POST: api/SpiritualGift
        [ResponseType(typeof(SpiritualGift))]
        public async Task<IHttpActionResult> PostSpiritualGift(SpiritualGift spiritualGift)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.SpiritualGifts.Add(spiritualGift);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = spiritualGift.SpiritualGiftID }, spiritualGift);
        }

        // DELETE: api/SpiritualGift/5
        [ResponseType(typeof(SpiritualGift))]
        public async Task<IHttpActionResult> DeleteSpiritualGift(int id)
        {
            SpiritualGift spiritualGift = await db.SpiritualGifts.FindAsync(id);
            if (spiritualGift == null)
            {
                return NotFound();
            }

            db.SpiritualGifts.Remove(spiritualGift);
            await db.SaveChangesAsync();

            return Ok(spiritualGift);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool SpiritualGiftExists(int id)
        {
            return db.SpiritualGifts.Count(e => e.SpiritualGiftID == id) > 0;
        }
    }
}