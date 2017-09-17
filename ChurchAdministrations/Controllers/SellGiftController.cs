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
    public class SellGiftController : ApiController
    {
        private ChurchAdministrationsContextDB db = new ChurchAdministrationsContextDB();

        // GET: api/SellGift
        public IQueryable<SellGift> GetSellGifts()
        {
            return db.SellGifts;
        }

        // GET: api/SellGift/5
        [ResponseType(typeof(SellGift))]
        public async Task<IHttpActionResult> GetSellGift(int id)
        {
            SellGift sellGift = await db.SellGifts.FindAsync(id);
            if (sellGift == null)
            {
                return NotFound();
            }

            return Ok(sellGift);
        }

        // PUT: api/SellGift/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutSellGift(int id, SellGift sellGift)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != sellGift.SellGiftID)
            {
                return BadRequest();
            }

            db.Entry(sellGift).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SellGiftExists(id))
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

        // POST: api/SellGift
        [ResponseType(typeof(SellGift))]
        public async Task<IHttpActionResult> PostSellGift(SellGift sellGift)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.SellGifts.Add(sellGift);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = sellGift.SellGiftID }, sellGift);
        }

        // DELETE: api/SellGift/5
        [ResponseType(typeof(SellGift))]
        public async Task<IHttpActionResult> DeleteSellGift(int id)
        {
            SellGift sellGift = await db.SellGifts.FindAsync(id);
            if (sellGift == null)
            {
                return NotFound();
            }

            db.SellGifts.Remove(sellGift);
            await db.SaveChangesAsync();

            return Ok(sellGift);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool SellGiftExists(int id)
        {
            return db.SellGifts.Count(e => e.SellGiftID == id) > 0;
        }
    }
}